import React from "react";
import { PassData } from "../types";
import { twMerge } from "tailwind-merge";
import FormattedDate from "./FormattedDate";
import { getTypedKeys } from "../utils";
import { TextureType, getTextureImage } from "../config/textures";

interface PassProps {
  className?: string;
  data: PassData;
}

const embossStyle = {
  textShadow:
    "-2px 2px 2px rgba(0, 0, 0, 0.8), 1px -1px 3px rgba(255, 255, 255, 0.9)",
};

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
          "relative rounded-lg aspect-[1.586] cursor-default select-none overflow-hidden bg-A font-dots",
          props.className,
        )}
      >
        <div className="absolute-cover z-30">
          <TextureOverlay type={data.textures.primary} />

          <div className="h-1/3 absolute bottom-0 w-full tracking-tight font-geist">
            <figure className="absolute-cover bg-B" />
            <TextureOverlay type={data.textures.secondary} />
            <p className="absolute top-1/2 -translate-y-1/2 right-5 text-D font-medium text-center flex gap-x-1 text-sm">
              Expires : <FormattedDate timestamp={data.expiry} />
            </p>

            <p className="absolute top-1/2 -translate-y-1/2 left-5 text-D font-medium text-center flex gap-x-1 text-sm">
              Usages left : {data.usage.used} / {data.usage.total}
            </p>
          </div>

          <div className="h-1/3 relative px-3 pt-3 flex justify-between items-center">
            <figure
              className="h-full relative aspect-square rounded-full"
              style={{
                filter: `drop-shadow(-3px 3px 2px rgba(0, 0, 0, 0.5)) drop-shadow(2px -2px 4px rgba(255, 255, 255, 0.15))`,
              }}
            >
              <img
                className="absolute-cover aspect-square object-cover rounded-full"
                src={data.logo.url}
              />
              <div className="absolute-cover mix-blend-hue bg-B rounded-full" />
            </figure>

            <div className="text-C">
              <h2
                className="text-xl font-extralight tracking-wider uppercase"
                style={{ ...embossStyle }}
              >
                {data.passName}
              </h2>
            </div>
          </div>
        </div>

        <div className="absolute w-full top-1/3 bottom-1/3 flex justify-center items-center text-C z-30">
          <p
            className="text-2xl font-extralight tracking-wider text-front"
            style={{ ...embossStyle }}
          >
            {data.userName}
          </p>
        </div>
      </div>
    </figure>
  );
}

function TextureOverlay(props: { type: TextureType }) {
  return (
    <img
      src={getTextureImage(props.type)}
      className="absolute-cover mix-blend-overlay saturate-0 object-cover opacity-10"
    />
  );
}
