import React from "react";
import { PassData, TextureType } from "../types";
import { twMerge } from "tailwind-merge";

interface PassProps {
  className?: string;
  data: PassData;
}

export default function Pass(props: PassProps) {
  const { data } = props;

  return (
    <div
      className={twMerge(
        "relative rounded-lg aspect-[1.586] cursor-default select-none overflow-hidden",
        props.className,
      )}
      style={{ background: data.colors.primary }}
    >
      <div className="absolute-cover z-30">
        <TextureOverlay type={data.textures.primary} />

        <div className="h-1/3 absolute bottom-0 w-full">
          <figure
            className="absolute-cover"
            style={{ background: data.colors.secondary }}
          />
          <TextureOverlay type={data.textures.secondary} />
        </div>

        <div className="h-1/3 aspect-square relative top-3 left-3 ">
          <img
            className="rounded-full absolute-cover aspect-square object-cover"
            src={data.logo.url}
          />
        </div>
      </div>

      <div className="absolute-cover z-10"></div>
    </div>
  );
}

function TextureOverlay(props: { type: TextureType }) {
  return (
    <img
      src={getTextureImage(props.type)}
      className="absolute-cover mix-blend-overlay saturate-0 object-cover opacity-30"
    />
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
