import "./App.css";

import { FC } from "react";
import { HomePage } from "@Pages/Home";
import { NotFoundPage } from "@Pages/NotFoundPage";
import { Loading } from "@Components/molecules/Loading";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "@Redux/reducers";
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

import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "@Pages/Login";
import SignUp from "@Pages/SignUp";
import { Stake } from "@Pages/Stake";
import { dashboardRoutes } from "./routers/routers";
import { Profile } from "@Pages/Profile";
import { PersonalInformation } from "@Pages/Profile/Information";
import { FAQ } from "@Pages/FAQ";
import { Notification } from "@Pages/Notification";
import { ForgotPassword } from "@Pages/ForgotPassword";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function ProtectedRoute<T>(Component: React.ComponentType<any>) {
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

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

const App: FC = () => {
  const { i18n } = useTranslation();
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <WalletContext>
      {loading && <Loading />}
      <BrowserRouter>
        <Helmet
          titleTemplate="%s | Lido"
          defaultTitle="Liquidity for staked assets"
        >
          <meta name="description" content="Liquidity for staked assets" />
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route
            path="stake"
            element={ProtectedRoute(() => {
              return <Stake />;
            })}
          >
            {dashboardRoutes.map((item, index) => {
              return (
                <Route
                  key={`router-${index}`}
                  path={item.path}
                  element={<item.component />}
                >
                  {item.children &&
                    item.children.map((child, index) => {
                      return (
                        <Route
                          key={`router-child-${index}`}
                          path={child.path}
                          element={<child.component />}
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Route>
          <Route
            path="profile"
            element={ProtectedRoute(() => {
              return <Profile />;
            })}
          >
            <Route path="" element={<PersonalInformation />}></Route>
          </Route>
          <Route
            path="notifications"
            element={ProtectedRoute(() => {
              return <Notification />;
            })}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </WalletContext>
  );
};

export default App;
