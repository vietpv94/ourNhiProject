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
import { SystemConfigDetail } from "@Pages/SystemConfig/detail";

import { KYCDetail } from "@Pages/Kyc/detail";
import { BonusManagement } from "@Pages/Bonus";
import { BonusDetail } from "@Pages/Bonus/detail";
import { PackageManagement } from "@Pages/Packages";
import { PackageDetail } from "@Pages/Packages/detail";
import { AddPackage } from "@Pages/Packages/add";
import { LevelConditionManagement } from "@Pages/LevelCondition";
import { LevelConditionDetail } from "@Pages/LevelCondition/detail";
import { AddLevelCondition } from "@Pages/LevelCondition/add";
import { UserDetail } from "@Pages/User/detail";

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
            <Route path="user" element={<UserManagement />} />
            <Route path="user/:id" element={<UserDetail />} />

            <Route path="transaction" element={<TransactionManagement />} />
            <Route path="sys-conf" element={<SystemConfigManagement />} />
            <Route path="sys-conf/:id" element={<SystemConfigDetail />} />

            <Route
              path="staking-session"
              element={<StakingSessionManagement />}
            />
            <Route path="kyc" element={<KycManagement />} />
            <Route path="kyc/:id" element={<KYCDetail />} />

            <Route path="bonus" element={<BonusManagement />} />
            <Route path="bonus/:id" element={<BonusDetail />} />

            <Route path="package" element={<PackageManagement />} />
            <Route path="package/:id" element={<PackageDetail />} />
            <Route path="package/add" element={<AddPackage />} />

            <Route
              path="level-condition"
              element={<LevelConditionManagement />}
            />
            <Route
              path="level-condition/:id"
              element={<LevelConditionDetail />}
            />
            <Route path="level-condition/add" element={<AddLevelCondition />} />
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
