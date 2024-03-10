export type TextureType = "wood" | "glass" | "metal" | "matte";

export interface PassData {
  textures: { primary: TextureType; secondary: TextureType };
  colors: {
    primary: string;
    secondary: string;
  };
  logo: { url: string };
  name: string;
}
