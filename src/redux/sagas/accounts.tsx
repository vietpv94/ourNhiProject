import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  loginSuccess,
  logoutSuccess,
  enable2FA
} from "@Redux/actions/accounts";
import { sessionServices, authServices, userServices } from "@Services/index";
import { ACCOUNT_ACTION } from "@Constants/redux-actions/account";
import { SignInData } from "@Models/auth";
import { removeToken } from "@Helpers/util";
export const accountSagas = [
  takeLatest(ACCOUNT_ACTION.LOGIN_REQUEST, handleLoginRequest),
  takeLatest(ACCOUNT_ACTION.LOGOUT_REQUEST, logout)
];

function* handleLoginRequest(data: any): any {
  const body = data.credential;

  try {
    const { data, success } = yield call(authServices.login, {
      email: body.email,
      password: body.password,
      twoFaCode: body.twoFaCode,
      remember: body.remember
    } as SignInData);

    if (success) {
      if (data.is2FAEnabled) {
        yield put(enable2FA());
      } else {
        yield call(sessionServices.saveAccountSession, {
          accessToken: data.accessToken
        });

        const profileData = yield call(userServices.getProfile);
        console.log(profileData);

        yield put(loginSuccess(profileData.data));
      }
    } else {
      const message = document.getElementById("wrong-email-pass");
      message?.classList.add("active");
    }
  } catch (err) {
    console.log(err);
  }
}

function* logout() {
  try {
    yield call(authServices.logout);
    yield call(sessionServices.deleteAccountSession);
    yield call(removeToken);
    yield put(logoutSuccess());
  } catch (error) {
    console.log("error");
  }
}
