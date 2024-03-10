import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Wrapper3dHover(props: {
  children?: React.ReactNode;
  className?: string;
}) {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [glarePos, setGlarePos] = useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent) {
    const el = wrapperRef.current;
    const { width, height, x, y } = el.getBoundingClientRect();

    const xVal = event.clientX - x;
    const yVal = event.clientY - y;

    setGlarePos({ x: width - xVal - width / 2, y: height - yVal - height / 2 });

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    el.style.transform = string;
  }

  function handleOut() {
    const el = wrapperRef.current;
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  }

  function handleDown() {
    const el = wrapperRef.current;
    el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  }

  function handleUp() {
    const el = wrapperRef.current;
    el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  }

  useEffect(() => {}, []);

  return (
    <div
      ref={wrapperRef}
      onMouseDown={handleDown}
      onMouseOut={handleOut}
      onMouseUp={handleUp}
      onMouseMove={handleMove}
      className={twMerge("relative overflow-hidden group", props.className)}
    >
      <div
        className="absolute bg-white/10 opacity-0 group-hover:opacity-100 size-1/2 z-[99] blur-3xl"
        style={{
          transition: "opacity 1000ms",
          top: glarePos.y,
          left: glarePos.x,
        }}
      />
      {props.children}
    </div>
  );
}
