export const locales = [
  {
    locale: "en-US",
    currency: "USD",
    icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
    conversion: 1,
    code: "us",
  }, // English (United States) - US Dollar
  {
    locale: "en-GB",
    currency: "GBP",
    icon: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
    conversion: 0.78,
    code: "gb",
  }, // English (United Kingdom) - British Pound
  {
    locale: "en-IN",
    currency: "INR",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    conversion: 82,
    code: "in",
  }, // English (India) - Indian Rupee
  {
    locale: "en-CA",
    currency: "CAD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    conversion: 1.35,
    code: "ca",
  }, // English (Canada) - Canadian Dollar
  {
    locale: "en-AU",
    currency: "AUD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    conversion: 1.52,
    code: "au",
  }, // English (Australia) - Australian Dollar
  {
    locale: "en-SG",
    currency: "SGD",
    icon: "https://cdn.britannica.com/36/4036-050-37052A78/Flag-Singapore.jpg",
    conversion: 1.33,
    code: "sg",
  }, // English (Singapore) - Singapore Dollar
  {
    locale: "en-NZ",
    currency: "NZD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    conversion: 1.62,
    code: "nz",
  }, // English (New Zealand) - New Zealand Dollar
  {
    locale: "en-PH",
    currency: "PHP",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png",
    conversion: 56,
    code: "ph",
  }, // English (Philippines) - Philippine Peso
] as const;

export type LocaleAndCurrency = (typeof locales)[number];
export type LocaleType = LocaleAndCurrency["locale"];
