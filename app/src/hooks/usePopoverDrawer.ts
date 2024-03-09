import React from "react";
import useGlobalContext from "../contexts/globalContext";

export default function usePopoverDrawer() {
  const globalContext = useGlobalContext();

  function show(element: React.ReactNode | null) {
    globalContext.popupDrawerState.setter(element);
  }

  function hide() {
    globalContext.popupDrawerState.setter(null);
  }

  return { show, hide, element: globalContext.popupDrawerState.value };
}
