import { createContext, useContext, useEffect, useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import { useWeb3Context } from "./web3Context";
import LoxelIdl from "../idl/loxel.json";

interface IProgramContext {
  program: anchor.Program<anchor.Idl> | null;
}

export const ProgramContext = createContext<IProgramContext>(
  {} as IProgramContext,
);

export default function ProgramContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { providerInitialized } = useWeb3Context();
  const [program, setProgram] = useState<anchor.Program<anchor.Idl> | null>(
    null,
  );

  useEffect(() => {
    if (!providerInitialized) return;

    const provider = anchor.getProvider();

    const program = new anchor.Program(
      LoxelIdl as anchor.Idl,
      LoxelIdl.metadata.address,
      provider,
    );
    setProgram(program);
  }, [providerInitialized]);

  return (
    <ProgramContext.Provider value={{ program }}>
      {children}
    </ProgramContext.Provider>
  );
}

export const useProgramContext = () => useContext(ProgramContext);
