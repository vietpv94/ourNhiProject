import { setToken } from "@Helpers/util";
import { setAccessToken } from "@Redux/actions/accessToken";
import { RootState, store } from "@Redux/reducers";

function saveAccountSession(data: { accessToken: string }) {
  const { accessToken } = data;
  setToken(accessToken);
  store.dispatch(setAccessToken(accessToken));
}

function getAccessToken() {
  const { accessToken }: RootState = store.getState();
  // if( !account.isLoggedIn) return;
  return accessToken;
}

function deleteAccountSession() {
  store.dispatch(setAccessToken(""));
}

export const sessionServices = {
  getAccessToken,
  saveAccountSession,
  deleteAccountSession
};

export default sessionServices;
