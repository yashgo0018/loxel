use anchor_lang::error_code;

#[error_code]
pub enum OrganizationError {
    #[msg("A organization cannot have more than 10 authorized keys")]
    MaxApiKeyLimitReached,

    #[msg("Key is already authorized")]
    KeyAlreadyAuthorized,

    #[msg("Key is not authorized")]
    KeyNotFound,

    #[msg("Key not unauthorized")]
    Unauthorized,

    #[msg("Insufficient points")]
    InsufficientPoints,

    #[msg("A benefit cannot have more than 10 eligible passes")]
    MaxPassLimitReached,

    #[msg("Pass is already eligible")]
    PassAlreadyEligible,

    #[msg("Pass is not eligible")]
    PassNotFound
}
