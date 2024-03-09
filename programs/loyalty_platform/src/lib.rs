use anchor_lang::prelude::*;

declare_id!("Hnutco6zh5mJ1cbE4Jyj4wUxSJJKg8bNUoY4Pzewr6Bi");

#[program]
pub mod loyalty_platform {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
