import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import PopupDrawerHolder from "./components/PopupDrawerHolder";
import usePopoverDrawer from "../../hooks/usePopoverDrawer";

interface PopupDrawerProps {
  className?: string;
}

export default function PopupDrawer(props: PopupDrawerProps) {
  const [hide, setHide] = useState(true);

  const drawer = usePopoverDrawer();

  useEffect(() => {
    if (hide == true) {
      drawer.hide();
    }
  }, [hide]);

  useEffect(() => {
    if (drawer.element != null) setHide(false);
  }, [drawer.element]);

  return (
    <div
      className={twMerge(
        "bg-background/10 backdrop-blur-[2px] fixed z-[10001] top-0 left-0 w-[99.9%] h-full duration-200",
        drawer.element == null && "opacity-0 pointer-events-none",
        props.className
      )}
      onMouseDown={() => {
        setHide(true);
      }}
    >
      <PopupDrawerHolder
        className={twMerge(
          "w-full duration-300",
          hide && "translate-y-full opacity-0",
          drawer.element == null && "translate-y-full"
        )}
        setHide={setHide}
      >
        {drawer.element}
      </PopupDrawerHolder>
    </div>
  );
}
