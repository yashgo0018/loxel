import { PassData } from "../types";

export const serverUrl = "https://127.0.0.1:9000";

export const cardAspectRatio = 1.586;

export const passPlaceholderData: PassData = {
  passName: "Shoppers Black",
  userName: "Spandan Barve",
  colors: {
    primary: "#11211B",
    secondary: "#a67c00",
    text: { primary: "#ffffff", secondary: "#000000" },
  },
  textures: { primary: "matte", secondary: "glass" },
  logo: {
    url: "https://watcher.guru/news/wp-content/uploads/2023/12/avax-800x450.jpg.webp",
  },
  expiry: 1830066943000,
  usage: { total: 10, used: 6 },
};
