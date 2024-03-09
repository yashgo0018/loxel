import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { createContext, useContext, useEffect, useState } from "react";
import * as anchor from "@coral-xyz/anchor";

interface IWeb3Context {
  providerInitialized: boolean;
}

export const Web3Context = createContext<IWeb3Context>({} as IWeb3Context);

export default function Web3ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const [providerInitialized, setProviderInitialized] = useState(false);

  useEffect(() => {
    if (!wallet) return;

    let provider: anchor.AnchorProvider;

    try {
      provider = anchor.getProvider() as anchor.AnchorProvider;
      console.log(provider);
    } catch (err) {
      provider = new anchor.AnchorProvider(connection, wallet, {});
      anchor.setProvider(provider);
    }

    setProviderInitialized(true);
  }, [wallet, connection]);

  return (
    <Web3Context.Provider value={{ providerInitialized }}>
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3Context = () => useContext(Web3Context);
