import { Props } from "@Redux/reducers";
import { IAccountState } from "../reducers/account";
import { ACCOUNT_ACTION_TYPES } from '../constants/account';

export const updateAccount = (payload: Props<IAccountState>) => {
  return {
    type: ACCOUNT_ACTION_TYPES.UPDATE_INFO,
    payload,
  };
};

export const loginRequest = () => {
  return {
    type: ACCOUNT_ACTION_TYPES.LOGIN_REQUEST,
  };
}; 