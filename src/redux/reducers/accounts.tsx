import { ACCOUNT_ACTION } from "@Constants/redux-actions/account";
import { AnyAction } from "redux";

export const defaultState = {
  isLoggedIn: false,
  userId: "",
  email: "",
  ref: "",
  is2FAEnabled: false
};

const account = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACCOUNT_ACTION.AUTHEN_ENABLED:
      const params = action.payload;
      return {
        ...state,
        is2FAEnabled: true
      };
    case ACCOUNT_ACTION.AUTHEN_DISABLED:
      return {
        ...state,
        is2FAEnabled: false
      };
    case ACCOUNT_ACTION.LOGIN_SUCCESS:
      const user = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        userId: user.userId,
        email: user.email,
        ref: user.refCode,
        is2FAEnabled: user.active2fa
      };
    case ACCOUNT_ACTION.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
export default account;
