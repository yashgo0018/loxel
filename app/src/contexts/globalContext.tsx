import React, { ReactNode, createContext, useContext, useState } from "react";
import { LocaleAndCurrency, locales } from "../config";

interface GlobalContextType {
  modalState: {
    modal: ReactNode;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
  popupDrawerState: {
    value: ReactNode;
    setter: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
  localeState: {
    value: LocaleAndCurrency;
    set: React.Dispatch<React.SetStateAction<LocaleAndCurrency>>;
  };
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ReactNode>();
  const [popupDrawer, setPopupDrawer] = useState<ReactNode>();
  const [locale, setLocale] = useState<LocaleAndCurrency>(locales[0]);

  const value = {
    modalState: { modal, setModal },
    popupDrawerState: { value: popupDrawer, setter: setPopupDrawer },
    localeState: { value: locale, set: setLocale },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
