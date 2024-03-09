use anchor_lang::error_code;

#[error_code]
pub enum OrganizationError {
    // Error 0
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
}
