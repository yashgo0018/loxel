import "@solana/wallet-adapter-react-ui/styles.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import Web3ContextProvider from "./Web3";
import ProgramContextProvider from "./Program";

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const endpoint = clusterApiUrl("devnet");
  console.log(endpoint);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <Web3ContextProvider>
            <ProgramContextProvider>{children}</ProgramContextProvider>
          </Web3ContextProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
