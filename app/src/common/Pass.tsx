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
    <figure
      style={
        {
          "--A": data.colors.primary,
          "--B": data.colors.secondary,
          "--C": data.colors.text.primary,
          "--D": data.colors.text.secondary,
        } as React.CSSProperties
      }
    >
      <div
        className={twMerge(
          "relative rounded-lg aspect-[1.586] cursor-default select-none overflow-hidden bg-A",
          props.className,
        )}
      >
        <div className="absolute-cover z-30">
          <TextureOverlay type={data.textures.primary} />

          <div className="h-1/3 absolute bottom-0 w-full">
            <figure className="absolute-cover bg-B" />
            <TextureOverlay type={data.textures.secondary} />
          </div>

          <div className="h-1/3 relative px-3 pt-3 flex justify-between items-center">
            <figure className="h-full relative aspect-square overflow-hidden rounded-full">
              <img
                className="absolute-cover aspect-square object-cover"
                src={data.logo.url}
              />
              <div className="absolute-cover mix-blend-hue bg-B" />
            </figure>

            <div className="brightness-150 saturate-150 text-C">
              <h2 className="text-xl">{data.passName}</h2>
            </div>
          </div>
        </div>

        <div className="absolute w-full top-1/3 bottom-1/3 flex justify-center items-center text-C">
          <p>{data.userName}</p>
        </div>

        <div className="absolute-cover z-10"></div>
      </div>
    </figure>
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
