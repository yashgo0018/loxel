export type TextureType = "wood" | "glass" | "metal" | "matte";

export interface PassData {
  texture: TextureType;
  color: string;
}
