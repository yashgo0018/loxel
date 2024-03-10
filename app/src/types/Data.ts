export type TextureType = "wood" | "glass" | "metal" | "matte";

export interface PassData {
  textures: { primary: TextureType; secondary: TextureType };
  colors: {
    primary: string;
    secondary: string;
    text: { primary: string; secondary: string };
  };
  logo: { url: string };
  passName: string;
  userName: string;
  expiry: number;
  usage: { used: number; total: number };
}
