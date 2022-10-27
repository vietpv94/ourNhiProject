import { ACCOUNT_ACTION } from "@Constants/redux-actions/account";
import { SignInData } from "@Models/index";

export function loginRequest(credential: SignInData) {
  return {
    type: ACCOUNT_ACTION.LOGIN_REQUEST,
    credential
  };
}

export function logoutRequest() {
  return {
    type: ACCOUNT_ACTION.LOGOUT_REQUEST
  };
}

export const loginSuccess = (param?: any) => {
  return { type: ACCOUNT_ACTION.LOGIN_SUCCESS, payload: param };
};

export const logoutSuccess = () => {
  return { type: ACCOUNT_ACTION.LOGOUT };
};
