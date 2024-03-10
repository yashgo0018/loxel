import { TextureType, getTextureImage } from "../config/textures";

export default function TextureOverlay(props: { type: TextureType }) {
  return (
    <img
      src={getTextureImage(props.type)}
      className="absolute-cover mix-blend-overlay saturate-0 object-cover opacity-10"
    />
  );
}
