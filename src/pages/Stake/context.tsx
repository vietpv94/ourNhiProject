import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { Cluster, clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import { toast } from "react-toastify";

export const WalletContext: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  // You can also provide a custom RPC endpoint.
  const network = (process.env.REACT_APP_CHAIN || "devnet") as Cluster;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletWalletAdapter({ network: network as WalletAdapterNetwork }),
      new SolletExtensionWalletAdapter({
        network: network as WalletAdapterNetwork
      })
    ],
    [network]
  );  
  
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect
        onError={(error) => toast.error(error.message)}
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
