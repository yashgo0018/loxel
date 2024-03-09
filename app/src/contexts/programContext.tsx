import { createContext, useContext, useEffect, useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import { useWeb3Context } from "./web3Context";

interface IProgramContext {}

export const ProgramContext = createContext<IProgramContext>(
  {} as IProgramContext
);

export default function ProgramContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { providerInitialized } = useWeb3Context();

  useEffect(() => {
    if (!providerInitialized) return;
  }, [providerInitialized]);

  return (
    <ProgramContext.Provider value={{}}>{children}</ProgramContext.Provider>
  );
}

export const useProgramContext = () => useContext(ProgramContext);
