import { setToken } from "@Helpers/util";
import { setAccessToken } from "@Redux/actions/accessToken";
import { RootState, store } from "@Redux/reducers";

function saveAccountSession(data: { accessToken: string }) {
  const { accessToken } = data;
  setToken(accessToken);
  store.dispatch(setAccessToken(accessToken));
}

function deleteAccountSession() {
  store.dispatch(setAccessToken(""));
}

export const sessionServices = {
  saveAccountSession,
  deleteAccountSession
};

export default sessionServices;
