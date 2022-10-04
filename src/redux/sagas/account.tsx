import { store } from "@Redux/reducers";
import { ethers } from "ethers";
import { takeLatest } from "redux-saga/effects";
import { NETWORK, WEB3_PROVIDER } from "../../constants/blockchain";
import { updateAccount } from "../actions/account";
import { ACCOUNT_ACTION_TYPES } from '../constants/account';

const bcConfig = NETWORK;

let provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider;
if (window.ethereum) {
  provider = WEB3_PROVIDER;
} else {
  if (store.getState().account.chainId === 5) provider = bcConfig.PROVIDER;
  else provider = bcConfig.PROVIDER;
}

export const accountSagas = [
  takeLatest(ACCOUNT_ACTION_TYPES.LOGIN_REQUEST, handleLoginRequest),
];

function* handleLoginRequest() {
  try {
    if (window.ethereum) {
      let address = "";
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((res: any) => {
          address = res[0];
          provider.getNetwork().then((res) => {
            store.dispatch(
              updateAccount({
                address,
                chainId: res.chainId,
              })
            );
            console.log("Login Success", {
              address,
              chainId: res.chainId,
              isLogin: true,
            });
          });
        });
    }
  } catch (error) {}
}
