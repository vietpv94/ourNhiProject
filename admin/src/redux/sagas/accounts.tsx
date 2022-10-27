import { call, put, takeLatest } from "@redux-saga/core/effects";
import { loginSuccess, logoutSuccess } from "@Redux/actions/accounts";
import { sessionServices, authServices } from "@Services/index";
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
      username: body.username,
      password: body.password,
      remember: body.remember
    } as SignInData);

    if (success) {
      yield call(sessionServices.saveAccountSession, {
        accessToken: data.accessToken
      });

      yield put(loginSuccess());
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
    yield call(sessionServices.deleteAccountSession);
    yield call(removeToken);
     yield put(logoutSuccess());
    console.log("error");
  }
}
