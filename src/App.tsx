import "./App.css";

import { FC } from "react";
import { HomePage } from "@Pages/Home";
import { NotFoundPage } from "@Pages/NotFoundPage";
import { Loading } from "@Components/molecules/Loading";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "@Redux/reducers";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "@Pages/Login";
import SignUp from "@Pages/SignUp";
import { Stake } from "@Pages/Stake";
import { DefiStaking } from "@Pages/Stake/DefiStaking";
import { router } from "./routers/routers";

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

const App: FC = () => {
  const { i18n } = useTranslation();
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <>
      {loading && <Loading />}
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
        >
          <meta name="description" content="React Boilerplate" />
        </Helmet>
        <Routes>
          {router.map((item, index) => {
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
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          {/* <Route path="dashboard" element={<ProtectedRoute />}>
            <Route path="" element={<Stake />}>
              <Route path="defi-staking" element={<DefiStaking />} />
            </Route>
          </Route> */}
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
    </>
  );
};

export default App;
