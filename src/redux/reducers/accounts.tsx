import { ACCOUNT_ACTION } from "@Constants/redux-actions/account";
import { AnyAction } from "redux";

export const defaultState = {
  isLoggedIn: false,
  userId: "",
  email: "",
  ref: "",
  is2FAEnabled: false,
  kycStatus: 0,
  balance: 0,
  level: 0,
  nickName: "Lido User"
};

const account = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACCOUNT_ACTION.AUTHEN_ENABLED:
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
        userId: user.id,
        email: user.email,
        ref: user.refCode,
        is2FAEnabled: user.active2fa,
        kycStatus: user.kycStatus,
        balance: user.balance,
        level: user.level,
        nickName: user.nickName
      };
    case ACCOUNT_ACTION.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
export default account;
