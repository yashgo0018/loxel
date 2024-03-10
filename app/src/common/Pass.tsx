import React, { useEffect, useRef, useState } from "react";
import { PassData } from "../types";
import { twMerge } from "tailwind-merge";
import FormattedDate from "./FormattedDate";
import { TextureType, getTextureImage } from "../config/textures";
import TextureOverlay from "./TextureOverlay";
import { cardAspectRatio } from "../config";

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

  const [width, setWidth] = useState(0);

  const containerRef = useRef() as React.MutableRefObject<HTMLElement>;

  function getFontSize(x: number) {
    return width * (x / 100);
  }

  useEffect(() => {
    if (width == 0) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <figure
      ref={containerRef}
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
          "relative rounded-lg cursor-default select-none overflow-hidden bg-A font-dots border border-front/10",
          props.className,
        )}
        style={{ height: width / cardAspectRatio }}
      >
        <div className="absolute-cover z-30">
          <TextureOverlay type={data.textures.primary} />

          <div className="h-1/3 absolute bottom-0 w-full tracking-tight font-geist text-sm" style={{
            fontSize : getFontSize(3.6)
          }}>
            <figure className="absolute-cover bg-B" />
            <TextureOverlay type={data.textures.secondary} />
            <p className="absolute top-1/2 -translate-y-1/2 right-5 text-D font-medium text-center flex gap-x-1">
              Expires : <FormattedDate timestamp={data.expiry} />
            </p>

            <p className="absolute top-1/2 -translate-y-1/2 left-5 text-D font-medium text-center flex gap-x-1">
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
                alt="preview"
              />
              <div className="absolute-cover mix-blend-hue bg-B rounded-full" />
            </figure>

            <div className="text-C">
              <h2
                className="text-xl font-extralight tracking-wider uppercase"
                style={{ ...embossStyle, 
                  fontSize: getFontSize(5.5)
                 }}
              >
                {data.passName}
              </h2>
            </div>
          </div>
        </div>

        <div className="absolute w-full top-1/3 bottom-1/3 flex justify-center items-center text-C z-30">
          <p
            className="text-2xl font-extralight tracking-wider text-front"
            style={{ ...embossStyle, 
              fontSize : getFontSize(6.4)
             }}
          >
            {data.userName}
          </p>
        </div>
      </div>
    </figure>
  );
}
