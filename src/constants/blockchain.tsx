import { ethers } from "ethers";

const TESTNET_PROVIDER = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/"
);

const MAIN_PROVIDER = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/"
);
const isMainnet = process.env.REACT_APP_CHAIN === "mainnet";
export const PROVIDER = isMainnet ? MAIN_PROVIDER : TESTNET_PROVIDER;

let web3Provider;
if (window.ethereum) {
  web3Provider = new ethers.providers.Web3Provider(window.ethereum, "any");
} else {
  web3Provider = PROVIDER;
}

export const WEB3_PROVIDER = web3Provider;
const contractAddress = isMainnet
  ? ""
  : "0x28B3D24CEc156352B8585d92cC51f1a56Fd492A5";

const baseTokenAddress = isMainnet
  ? "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  : "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";
export const NETWORK = {
  PROVIDER,
  contractAddress,
  baseTokenAddress,
  limit:
    "115792089237316195423570985008687907853269984665640564039457584007913129639935"
};
