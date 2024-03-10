import { initializeKeypair } from "./initializeKeypair";
import * as web3 from "@solana/web3.js";
import express from "express";
import idl from "../../target/idl/loxel.json";
import {
  AnchorProvider,
  Idl,
  Program,
  Wallet,
  setProvider,
} from "@coral-xyz/anchor";
import { uploadJSONtoIPFS } from "./helpers";
import cors from "cors";

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

async function main() {
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  const relayerKeypair = await initializeKeypair(connection);
  const relayer = new Wallet(relayerKeypair);
  const provider = new AnchorProvider(connection, relayer, {
    commitment: "processed",
  });
  const program = new Program(idl as Idl, idl.metadata.address, provider);

  app.get("/", (req, res) => {
    res.json({ message: "server is listening" });
  });

  app.post("/register", async (req, res) => {
    const { owner, name, imageUrl, email, website, category, country } =
      req.body;
    const ownerPublicKey = new web3.PublicKey(owner);
    const { Hash } = await uploadJSONtoIPFS({
      owner,
      name,
      imageUrl,
      email,
      website,
      category,
      country,
    });
    const transaction = await program.methods
      .registerOrganization(Hash)
      .accounts({ owner: ownerPublicKey, relayer: relayer.publicKey })
      .transaction();
    const { blockhash } = await provider.connection.getLatestBlockhash();

    // user makes the server the fee payer
    transaction.feePayer = relayer.publicKey;
    transaction.recentBlockhash = blockhash;

    // user signs transaction
    transaction.partialSign(relayerKeypair);

    // user serialized transaction + sends to server
    const serialized = transaction.serialize({ requireAllSignatures: false });

    res.json({ transaction: serialized.toString("base64") });
  });

  app.post("/relay", async (req, res) => {
    const { transaction } = req.body;
    // server deserialized received transaction
    const transactionOnServer = web3.Transaction.from(
      Buffer.from(transaction, "base64")
    );

    // server signs + sends transaction
    await provider.sendAndConfirm(transactionOnServer);
  });
}

main();

app.listen(port, () => console.log(`server is listening on port ${port}`));
