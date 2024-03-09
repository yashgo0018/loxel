import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Loxel } from "../target/types/loxel";
import {assert} from "chai";

describe("loxel", () => {
  // Configure the client to use the local cluster.
  let provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Loxel as Program<Loxel>;

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
});
