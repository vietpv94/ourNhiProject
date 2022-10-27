import { ACCOUNT_ACTION } from "@Constants/redux-actions/account";
import { AnyAction } from "redux";

export const defaultState = {
  isLoggedIn: false
};

const account = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACCOUNT_ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case ACCOUNT_ACTION.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
export default account;
