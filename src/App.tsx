import "./App.css";

import { FC } from "react";
import { HomePage } from "@Pages/Home";
import { NotFoundPage } from "@Pages/NotFoundPage";
import { Loading } from "@Components/molecules/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@Redux/reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const App: FC = () => {
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
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
