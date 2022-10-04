import { all } from "redux-saga/effects";
import { accountSagas } from './account';
export default function* rootSaga() {
  yield all([
    ...accountSagas
  ]);
}
