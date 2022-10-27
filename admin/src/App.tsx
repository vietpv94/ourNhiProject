import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { FC } from "react";
import { HomePage } from "@Pages/Home";
import { NotFoundPage } from "@Pages/NotFoundPage";
import { Login } from "@Pages/Login";
import { Loading } from "@Components/molecules/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@Redux/reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";
import { UserManagement } from "@Pages/User";
import { TransactionManagement } from "@Pages/Transaction";
import { KycManagement } from "@Pages/Kyc";
import { StakingSessionManagement } from "@Pages/StakingSession";
import { SystemConfigManagement } from "@Pages/SystemConfig";
import { KYCDetail } from "@Pages/Kyc/detail";

function ProtectedRoute<T>(Component: React.ComponentType<any>) {
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

const App: FC = () => {
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <>
      {loading && <Loading />}
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - Lido Administration"
          defaultTitle="Lido Administration"
        >
          <meta name="description" content="Lido Administration" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="admin"
            element={ProtectedRoute(() => {
              return <HomePage />;
            })}
          >
            <Route path="" element={<UserManagement />} />
            <Route path="transaction" element={<TransactionManagement />} />
            <Route path="sys-conf" element={<SystemConfigManagement />} />
            <Route
              path="staking-session"
              element={<StakingSessionManagement />}
            />
            <Route path="kyc" element={<KycManagement />} />
            <Route path="kyc/:id" element={<KYCDetail />} />
          </Route>
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
    </>
  );
};

export default App;
