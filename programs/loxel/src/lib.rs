use anchor_lang::prelude::*;

declare_id!("Hnutco6zh5mJ1cbE4Jyj4wUxSJJKg8bNUoY4Pzewr6Bi");

#[program]
pub mod loxel {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }

    pub fn register_organization(ctx: Context<RegisterOrganization>, metadata_cid: String) -> Result<()> {
        let organization = &mut ctx.accounts.organization_pda;
        organization.owner = ctx.accounts.owner.key();
        organization.metadata_cid = metadata_cid;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct RegisterOrganization<'info> {
    #[account(
        init,
        seeds=[
            "ORGANIZATION".as_bytes(),
            owner.key().as_ref()
        ],
        bump,
        payer=owner,
        space=8+32+(4+59)
    )]
    pub organization_pda: Account<'info, Organization>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>
}

#[account]
pub struct Organization {
    owner: Pubkey,
    metadata_cid: String,
}

