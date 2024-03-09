import React, { useEffect, useRef } from "react";

export default function useClickOutside(
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => any
) {
  const flag = useRef(false);

  function handleClick(e: Event) {
    if (
      flag.current &&
      ref.current &&
      !ref.current.contains(e.target as Node)
    ) {
      callback();
    }
  }

  useEffect(() => {
    if (!flag.current) {
      flag.current = true;
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
