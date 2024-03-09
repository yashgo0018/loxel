import React from "react";
import { PassData, TextureType } from "../types";
import { twMerge } from "tailwind-merge";

interface PassProps {
  className?: string;
}

export default function Pass(props: PassProps) {
  const data: PassData = {
    texture: "glass",
    color: "#B2022F",
  };

  return (
    <div
      className={twMerge(
        "relative rounded-lg aspect-[1.586] cursor-default select-none",
        props.className
      )}
      style={{ background: data.color }}
    >
      <img
        src={getTextureImage(data.texture)}
        className="absolute-cover mix-blend-overlay opacity-30 z-30"
      />
    </div>
  );
}

function getTextureImage(txt: TextureType) {
  if (txt === "matte")
    return "https://img.freepik.com/free-photo/plain-backdrop-decorative-gray-textured_1136-349.jpg";

  if (txt === "glass")
    return "https://static.vecteezy.com/system/resources/thumbnails/009/578/675/small/realistic-blurred-natural-light-windows-palm-leaves-shadow-overlay-on-wall-paper-or-frames-texture-abstract-background-summer-spring-autumn-for-product-presentation-podium-and-mockup-seasonal-vector.jpg";

  if (txt === "metal") return "";

  if (txt === "wood")
    return "https://www.textures4photoshop.com/tex/thumbs/seamless-wood-grain-background-thumb30.jpg";
  return "  ";
}
