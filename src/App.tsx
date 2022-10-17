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

function ProtectedRoute<T>(Component: React.ComponentType<any>) {
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

const App: FC = () => {
  const { i18n } = useTranslation();
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <>
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
    </>
  );
};

export default App;
