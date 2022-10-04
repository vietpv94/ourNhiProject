import { ACCOUNT_ACTION_TYPES } from '../constants/account';
import { Action } from './index';

export interface IAccountState {
  address: string;
  chainId: number;
  isLogin: boolean;
  name: "",
}

const defaultState: IAccountState = {
  address: "",
  chainId: 5,
  isLogin: false,
  name: "",
};

export const accountReducer = (
  state = defaultState,
  action: Action<IAccountState>
) => {
  switch (action.type) {
    case ACCOUNT_ACTION_TYPES.UPDATE_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};