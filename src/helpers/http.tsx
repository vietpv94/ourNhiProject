import { logoutSuccess } from "@Redux/actions/accounts";
import { store } from "@Redux/reducers";
import { sessionServices } from "@Services/index";
import axios from "axios";
import {
  getLocalToken,
  removeToken,
  retryRefreshToken,
  setToken
} from "./util";

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
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue: any[] = [];
const processQueue = (error: any, token: any = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.shouldRetry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }
      originalRequest.shouldRetry = true;
      isRefreshing = true;
      return new Promise((resolve, reject) => {
        return retryRefreshToken(1)
          .then((data) => {
            setToken(data.accessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            processQueue(null, data.accessToken);
            resolve(axios(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
            removeToken();
            sessionServices.deleteAccountSession();

            store.dispatch(logoutSuccess());
            // TODO: Handle when can't refresh!
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
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
