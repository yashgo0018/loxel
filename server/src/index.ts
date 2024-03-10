import { initializeKeypair } from "./initializeKeypair";
import * as web3 from "@solana/web3.js";
import express from "express";

const port = process.env.PORT || 8000;
const app = express();

async function main() {
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  const relayer = await initializeKeypair(connection);

  app.get("/", (req, res) => {
    res.json({ message: "server is listening" });
  });
}

main();

app.listen(port, () => console.log(`server is listening on port ${port}`));
