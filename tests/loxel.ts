import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Loxel } from "../target/types/loxel";
import {assert} from "chai";

describe("loxel", () => {
  // Configure the client to use the local cluster.
  let provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Loxel as Program<Loxel>;

  const keys: anchor.web3.Keypair[] = [];

  for (let i = 0; i < 10; i++) {
    keys.push(anchor.web3.Keypair.generate());
  }


  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });

  it("Register Organization!", async () => {
    // Add your test here.
    let organization_metadata_cid = "bafybeihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku";

    const tx = await program.methods.registerOrganization(organization_metadata_cid).rpc();
    console.log("Your transaction signature", tx);

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    const organization = await program.account.organization.fetch(organization_pda);

    assert.equal(organization.owner.toString(), provider.wallet.publicKey.toString());
    assert.equal(organization.metadataCid, organization_metadata_cid);
  });

  it("Add a authorized keys", async () => {
    const tx = await program.methods.addAuthorizedKey(keys[0].publicKey).rpc();
    console.log("Your transaction signature", tx);

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    const organization = await program.account.organization.fetch(organization_pda);

    assert.equal(organization.authorizedKeys[0].toString(), keys[0].publicKey.toString());
  });

  it("Should not add the same key again", async () => {
    try {
      await program.methods.addAuthorizedKey(keys[0].publicKey).rpc()
    } catch (e) {
      return;
    }
    assert.fail("didn't throw any error");
  });

  it("Should remove a authorized key", async () => {
    const tx = await program.methods.removeAuthorizedKey(keys[0].publicKey).rpc();
    console.log("Your transaction signature", tx);

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    const organization = await program.account.organization.fetch(organization_pda);

    assert.equal(organization.authorizedKeys.length, 0);
  });

  it("Should throw an error if a key is removed which is not authorized", async () => {
    try {
      await program.methods.removeAuthorizedKey(keys[0].publicKey).rpc()
    } catch (e) {
      return;
    }
    assert.fail("didn't throw any error");
  });

  it("Should add a couple of keys", async () => {
    const tx1 = await program.methods.addAuthorizedKey(keys[0].publicKey).rpc();
    const tx2 = await program.methods.addAuthorizedKey(keys[1].publicKey).rpc();

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    const organization = await program.account.organization.fetch(organization_pda);

    assert.equal(organization.authorizedKeys.length, 2);
    assert.equal(organization.authorizedKeys[0].toString(), keys[0].publicKey.toString());
    assert.equal(organization.authorizedKeys[1].toString(), keys[1].publicKey.toString());
  });

  it("Should create a pass template", async () => {
    const passDetails = {
      name: "Gold Pass"
    };

    const tx = await program.methods.addLoyaltyPass(passDetails.name, "condition 1").rpc();

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    // const organization = await program.account.organization.fetch(organization_pda);

    const [pass_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PASS_TEMPLATE"), organization_pda.toBuffer(), Buffer.from(passDetails.name)], program.programId)
    const pass = await program.account.passTemplate.fetch(pass_pda);

    assert.equal(pass.organization.toString(), organization_pda.toString());
    assert.equal(pass.name, passDetails.name);
  });

  it("Should not issue the pass if the pass template is not created", async () => {
    try {
      await program.methods.issueLoyaltyPass(provider.wallet.publicKey, "The Invalid Pass".toString(), keys[5].publicKey, new Date().getTime() / 1000 | 0, 100).rpc();
    } catch (e) {
      return;
    }
    assert.fail("didn't throw any error");
  });

  it("Should not issue the pass if the api key is not authorized", async () => {
    // user creates transaction
    const transaction = await program.methods.issueLoyaltyPass(provider.wallet.publicKey, "Gold Pass".toString(), keys[5].publicKey, new Date().getTime() / 1000 | 0, 100).accounts({authorizedKey: keys[4].publicKey}).transaction();
    const { blockhash } = await provider.connection.getLatestBlockhash();

    // user makes the server the fee payer
    transaction.feePayer = provider.wallet.publicKey;
    transaction.recentBlockhash = blockhash;

    // user signs transaction
    transaction.partialSign(keys[4])

    // user serialized transaction + sends to server
    const serialized = transaction.serialize({requireAllSignatures: false})

    // server deserialized received transaction
    const transactionOnServer = anchor.web3.Transaction.from(serialized);

    try {
      // server signs + sends transaction
      await provider.sendAndConfirm(transactionOnServer)
    } catch (e) {
      return
    }
    assert.fail("didn't throw any error");
  });

  it("Should issue the pass", async () => {
    // user creates transaction
    const transaction = await program.methods.issueLoyaltyPass(provider.wallet.publicKey, "Gold Pass".toString(), keys[5].publicKey, new Date().getTime() / 1000 | 0, 100).accounts({authorizedKey: keys[1].publicKey}).transaction();
    const { blockhash } = await provider.connection.getLatestBlockhash();

    // user makes the server the fee payer
    transaction.feePayer = provider.wallet.publicKey;
    transaction.recentBlockhash = blockhash;

    // user signs transaction
    transaction.partialSign(keys[1])

    // user serialized transaction + sends to server
    const serialized = transaction.serialize({requireAllSignatures: false})

    // server deserialized received transaction
    const transactionOnServer = anchor.web3.Transaction.from(serialized);

    // server signs + sends transaction
    await provider.sendAndConfirm(transactionOnServer)

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    const [pass_template_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PASS_TEMPLATE"), organization_pda.toBuffer(), Buffer.from("Gold Pass")], program.programId);
    const [pass_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PASS"), pass_template_pda.toBuffer(), keys[5].publicKey.toBuffer()], program.programId)
    const pass = await program.account.pass.fetch(pass_pda);
    console.log(pass);
    assert.equal(pass.pointsLeft, 100);
  });

  it("Should deduct points from the pass", async () => {
    // user creates transaction
    const transaction = await program.methods.deductPoints(provider.wallet.publicKey, "Gold Pass".toString(), keys[5].publicKey, 2).accounts({authorizedKey: keys[1].publicKey}).transaction();
    const { blockhash } = await provider.connection.getLatestBlockhash();

    // user makes the server the fee payer
    transaction.feePayer = provider.wallet.publicKey;
    transaction.recentBlockhash = blockhash;

    // user signs transaction
    transaction.partialSign(keys[1])

    // user serialized transaction + sends to server
    const serialized = transaction.serialize({requireAllSignatures: false})

    // server deserialized received transaction
    const transactionOnServer = anchor.web3.Transaction.from(serialized);

    // server signs + sends transaction
    await provider.sendAndConfirm(transactionOnServer)

    const [organization_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ORGANIZATION"), provider.wallet.publicKey.toBuffer()], program.programId);
    const [pass_template_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PASS_TEMPLATE"), organization_pda.toBuffer(), Buffer.from("Gold Pass")], program.programId);
    const [pass_pda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("PASS"), pass_template_pda.toBuffer(), keys[5].publicKey.toBuffer()], program.programId)
    const pass = await program.account.pass.fetch(pass_pda);
    assert.equal(pass.pointsLeft, 98);
  });
});
