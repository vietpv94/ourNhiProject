import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persister } from "@Redux/reducers";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";
import { Loading } from "@Components/molecules/Loading";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <HelmetProvider>
          <App />
          {/* <Loading /> */}
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
