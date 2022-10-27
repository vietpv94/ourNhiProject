import { all } from "redux-saga/effects";
import { accountSagas } from "./accounts";
export default function* rootSaga() {
  yield all([
    // ...sagas
    ...accountSagas
  ]);
}
