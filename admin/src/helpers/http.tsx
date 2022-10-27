import { logoutSuccess } from "@Redux/actions/accounts";
import { store } from "@Redux/reducers";
import { sessionServices } from "@Services/index";
import axios from "axios";
import { getLocalToken, removeToken } from "./util";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    chain: process.env.REACT_APP_CHAIN || "devnet"
  },
  withCredentials: true
});

httpClient.interceptors.request.use(
  (config) => {
    const token = getLocalToken();
    const auth = token ? `Bearer ${token}` : "";
    if (config.headers) {
      config.headers.Authorization = auth;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.shouldRetry) {
      removeToken();
      sessionServices.deleteAccountSession();

      store.dispatch(logoutSuccess());
    }
    return Promise.reject(error);
  }
);

export const nonAuthHttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    chain: process.env.REACT_APP_CHAIN || "devnet"
  }
});

export default httpClient;
