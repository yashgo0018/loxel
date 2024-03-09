import React, { useEffect, useState } from "react";
import { getCoords } from "../utils";

export default function usePosition(
  element: React.MutableRefObject<HTMLElement>
) {
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!flag) {
      setPos(getCoords(element.current));
      setFlag(true);
    }

    return () => {
      setFlag(false);
    };
  }, [flag]);

  return pos;
}
