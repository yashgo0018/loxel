import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { sleep } from "../../../utils";

interface PopupDrawerHolderProps {
  children?: React.ReactNode;
  className?: string;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopupDrawerHolder(props: PopupDrawerHolderProps) {
  const defaultHeight = window.innerHeight * 0.7; //70vh

  const [height, setHeight] = useState(defaultHeight);
  const [held, setHeld] = useState(false);

  function holdAction(event: React.MouseEvent) {
    event.preventDefault();
    setHeld(true);
    window.addEventListener("mousemove", mouseHeldAction);
    window.addEventListener("mouseup", releaseAction);
  }

  function mouseHeldAction(event: MouseEvent) {
    setHeight(window.innerHeight - event.clientY);
  }

  async function releaseAction() {
    window.removeEventListener("mousemove", mouseHeldAction);
    window.removeEventListener("mouseup", releaseAction);

    setHeld(false);
  }

  useEffect(() => {
    if (!held) {
      const threshold = defaultHeight / 3;
      if (height < threshold) {
        props.setHide(true);
      }
    }
  }, [height, held]);

  useEffect(() => {
    if (!held) {
      (async () => {
        await sleep(100);
        setHeight(defaultHeight);
      })();
    }
  }, [held]);

  return (
    <article
      className={twMerge(
        "absolute bottom-0 bg-background rounded-t-3xl border border-front/25",
        props.className,
        held && "duration-0"
      )}
      style={{ height: height }}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="flex justify-center p-4" onMouseDown={holdAction}>
        <figure className="h-1 rounded-full w-1/4 min-w-40 bg-front/50" />
      </div>
      <div className="flex flex-col overflow-y-scroll h-full scrollbar-none items-center">
        {props.children}
      </div>
    </article>
  );
}
