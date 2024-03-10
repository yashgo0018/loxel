import React, { useEffect, useRef, useState } from "react";
import { PassData } from "../types";
import { twMerge } from "tailwind-merge";
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

export default function Coupon(props: PassProps) {
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
          "relative cursor-default select-none overflow-hidden bg-A font-dots",
          props.className,
        )}
        style={{ height: width / cardAspectRatio }}
      >
        <div>
          <div className="w-[2vw] aspect-square bg-background rounded-full top-0 z-40 absolute -left-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-8 z-40 absolute -left-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-16 z-40 absolute -left-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-64 z-40 absolute -left-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-48 z-40 absolute -left-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-56 z-40 absolute -left-6" />
        </div>

        <div>
          <div className="w-[2vw] aspect-square bg-background rounded-full top-0 z-40 absolute -right-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-8 z-40 absolute -right-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-16 z-40 absolute -right-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-64 z-40 absolute -right-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-48 z-40 absolute -right-6" />
          <div className="w-[2vw] aspect-square bg-background rounded-full top-56 z-40 absolute -right-6" />
        </div>

        <div className="w-[4vw] aspect-square bg-background rounded-full top-28 z-40 absolute -left-8" />
        <div className="w-[4vw] aspect-square bg-background rounded-full top-28 z-40 absolute -right-8" />

        <div className="absolute-cover z-30">
          <TextureOverlay type={data.textures.primary} />

          <div className="h-1/3 relative px-3 pt-3 flex flex-col items-center">
            <div className="mix-blend-hue bg-B rounded-full p-3">
              <div className="text-C">
                <h2
                  className="text-xl font-extralight tracking-wider uppercase"
                  style={{ ...embossStyle, fontSize: getFontSize(6) }}
                >
                  {data.passName}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full top-1/3 bottom-10 flex justify-center items-center text-C z-30">
          <textarea
            className="text-2xl font-extralight tracking-wider text-front bg-transparent text-center resize-none h-max scrollbar-none w-full"
            disabled
            readOnly
            style={{ ...embossStyle, fontSize: getFontSize(4.5) }}
          >
            {data.userName}
          </textarea>
        </div>
      </div>
    </figure>
  );
}
