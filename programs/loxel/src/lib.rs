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
        organization.total_benefits = 0;

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

    pub fn issue_loyalty_pass(ctx: Context<IssuePass>, organization_owner:Pubkey, pass_name:String, user:Pubkey, expiry_timestamp: u32, points: u32) -> Result<()> {
        if !ctx.accounts.organization_pda.authorized_keys.contains(&ctx.accounts.authorized_key.key()) {
            return err!(OrganizationError::Unauthorized);
        }

        let pass = &mut ctx.accounts.pass_pda;
        pass.organization = ctx.accounts.organization_pda.key();
        pass.customer = user;
        pass.points_left = points;
        pass.initial_points = points;
        pass.expiry_timestamp = expiry_timestamp;
        pass.template = ctx.accounts.pass_template_pda.key();

        Ok(())
    }

    pub fn deduct_points(ctx: Context<UsePass>, organization_owner:Pubkey, pass_name:String, user: Pubkey, points: u32) -> Result<()> {
        if !ctx.accounts.organization_pda.authorized_keys.contains(&ctx.accounts.authorized_key.key()) {
            return err!(OrganizationError::Unauthorized);
        }

        let pass = &mut ctx.accounts.pass_pda;
        if pass.points_left < points {
            return err!(OrganizationError::InsufficientPoints);
        }
        pass.points_left -= points;

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
        space=8+32+(4+59)+(4+32*10)+2
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

#[derive(Accounts)]
#[instruction(organization_owner:Pubkey, pass_name:String, user:Pubkey)]
pub struct IssuePass<'info> {
    #[account(
        seeds=[
            "ORGANIZATION".as_bytes(),
            organization_owner.as_ref()
        ],
        bump,
    )]
    pub organization_pda: Account<'info, Organization>,
    #[account(
        seeds=[
            "PASS_TEMPLATE".as_bytes(),
            organization_pda.key().as_ref(),
            pass_name.as_bytes()
        ],
        bump,
    )]
    pub pass_template_pda: Account<'info, PassTemplate>,
    #[account(
        init,
        seeds=[
            "PASS".as_bytes(),
            pass_template_pda.key().as_ref(),
            user.key().as_ref()
        ],
        bump,
        payer=server,
        space=8+32+32+32+4+4+4
    )]
    pub pass_pda: Account<'info, Pass>,
    pub authorized_key: Signer<'info>,
    pub system_program: Program<'info, System>,
    #[account(mut)]
    pub server: Signer<'info>
}

#[derive(Accounts)]
#[instruction(organization_owner:Pubkey, pass_name:String, user:Pubkey)]
pub struct UsePass<'info> {
    #[account(
        seeds=[
            "ORGANIZATION".as_bytes(),
            organization_owner.as_ref()
        ],
        bump,
    )]
    pub organization_pda: Account<'info, Organization>,
    #[account(
        seeds=[
            "PASS_TEMPLATE".as_bytes(),
            organization_pda.key().as_ref(),
            pass_name.as_bytes()
        ],
        bump,
    )]
    pub pass_template_pda: Account<'info, PassTemplate>,
    #[account(
        mut,
        seeds=[
            "PASS".as_bytes(),
            pass_template_pda.key().as_ref(),
            user.key().as_ref()
        ],
        bump,
    )]
    pub pass_pda: Account<'info, Pass>,
    pub authorized_key: Signer<'info>
}

#[account]
pub struct Organization {
    owner: Pubkey,
    metadata_cid: String,
    authorized_keys: Vec<Pubkey>,
    total_benefits: u16
}

#[account]
pub struct PassTemplate {
    organization: Pubkey,
    name: String
}

#[account]
pub struct Pass {
    customer: Pubkey,
    template: Pubkey,
    organization: Pubkey,
    expiry_timestamp: u32,
    initial_points: u32,
    points_left: u32
}