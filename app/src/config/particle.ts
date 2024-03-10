import { WalletEntryPosition } from "@particle-network/auth";
import { Solana, SolanaDevnet, SolanaTestnet } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";

const particleConnectConfig = {
  projectId: process.env.REACT_APP_PARTICLE_PROJECT_ID,
  clientKey: process.env.REACT_APP_PARTICLE_CLIENT_KEY,
  appId: process.env.REACT_APP_PARTICLE_APP_ID,
  chains: [Solana, SolanaDevnet, SolanaTestnet],
  particleWalletEntry: {
    displayWalletEntry: true,
    defaultWalletEntryPosition: WalletEntryPosition.BR,
    supportChains: [Solana, SolanaDevnet, SolanaTestnet],
    customStyle: {},
  },
  securityAccount: {
    promptSettingWhenSign: 1,
    promptMasterPasswordSettingWhenLogin: 1,
  },
  wallets: evmWallets({
    projectId: "d80820321898edad271be12e8a54f5d5",
    showQrModal: false,
  }),
};

export default particleConnectConfig;
