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

export function enable2FA() {
  return {
    type: ACCOUNT_ACTION.AUTHEN_ENABLED
  };
}git 
export function disable2FA() {
  return {
    type: ACCOUNT_ACTION.AUTHEN_DISABLED
  };
}

export function updateUser(param: any) {
  return {
    type: ACCOUNT_ACTION.UPDATE,
    payload: param
  };
}

export const loginSuccess = (param: any) => {
  return { type: ACCOUNT_ACTION.LOGIN_SUCCESS, payload: param };
};

export const logoutSuccess = () => {
  return { type: ACCOUNT_ACTION.LOGOUT };
};
