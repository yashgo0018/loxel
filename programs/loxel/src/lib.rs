mod errors;

use anchor_lang::prelude::*;

declare_id!("Hnutco6zh5mJ1cbE4Jyj4wUxSJJKg8bNUoY4Pzewr6Bi");

#[program]
pub mod loxel {
    use crate::errors::OrganizationError;
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

    pub fn add_authorized_key(ctx: Context<KeyChange>, key: Pubkey) -> Result<()> {
        let organization = &mut ctx.accounts.organization_pda;
        if organization.authorized_keys.len() == 10 {
            return err!(OrganizationError::MaxApiKeyLimitReached);
        }

        // check if the authorized key is already added
        for i in 0..organization.authorized_keys.len() {
            if organization.authorized_keys[i] == key {
                return err!(OrganizationError::KeyAlreadyAuthorized);
            }
        }

        organization.authorized_keys.push(key);

        Ok(())
    }

    pub fn remove_authorized_key(ctx: Context<KeyChange>, key: Pubkey) -> Result<()> {
        let organization = &mut ctx.accounts.organization_pda;

        let mut key_found = usize::MAX;

        for i in 0..organization.authorized_keys.len() {
            if organization.authorized_keys[i] == key {
                key_found = i;
            }
        }

        if key_found == usize::MAX {
            return err!(OrganizationError::KeyNotFound);
        }

        organization.authorized_keys.remove(key_found);

        Ok(())
    }

    pub fn add_loyalty_pass(ctx: Context<AddLoyaltyPass>, name: String) -> Result<()> {
        let pass_template = &mut ctx.accounts.pass_template_pda;

        pass_template.organization = ctx.accounts.organization_pda.key();
        pass_template.name = name;

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
        space=8+32+(4+59)+(4+32*10)
    )]
    pub organization_pda: Account<'info, Organization>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct KeyChange<'info> {
    #[account(
        mut,
        seeds=[
            "ORGANIZATION".as_bytes(),
            owner.key().as_ref()
        ],
        bump,
    )]
    pub organization_pda: Account<'info, Organization>,
    pub owner: Signer<'info>,
}

#[derive(Accounts)]
#[instruction(name:String)]
pub struct AddLoyaltyPass<'info> {
    #[account(
        seeds=[
            "ORGANIZATION".as_bytes(),
            owner.key().as_ref()
        ],
        bump,
    )]
    pub organization_pda: Account<'info, Organization>,
    #[account(
        init,
        seeds=[
            "PASS_TEMPLATE".as_bytes(),
            organization_pda.key().as_ref(),
            name.as_bytes()
        ],
        bump,
        payer=owner,
        space=8+32+(4+name.len())
    )]
    pub pass_template_pda: Account<'info, PassTemplate>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>
}

#[account]
pub struct Organization {
    owner: Pubkey,
    metadata_cid: String,
    authorized_keys: Vec<Pubkey>
}

#[account]
pub struct PassTemplate {
    organization: Pubkey,
    name: String
}