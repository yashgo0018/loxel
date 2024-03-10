import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { GlobalContextProvider } from "./contexts/globalContext";
import router from "./pages/router";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import Web3ContextProvider from "./contexts/web3Context";
import ProgramContextProvider from "./contexts/programContext";
import { clusterApiUrl } from "@solana/web3.js";
import particleConnectConfig from "./config/particle";

const endpoint = clusterApiUrl("devnet");

export default function App() {
  console.log(particleConnectConfig)
  return (
    <GlobalContextProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]}>
          <WalletModalProvider>
            <Web3ContextProvider>
              <ProgramContextProvider>
                <ModalProvider options={particleConnectConfig}>
                  <RouterProvider router={router} />
                </ModalProvider>
              </ProgramContextProvider>
            </Web3ContextProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </GlobalContextProvider>
  );
}
