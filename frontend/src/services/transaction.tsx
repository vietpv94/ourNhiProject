import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";
export interface IWithdrawRequest {
  amount: number;
  currency: number;
  address: string;
}

const requestWithdraw = async (param: IWithdrawRequest) => {
  try {
    const { data } = await service.post("transaction/withdraw", param);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while requestWithdraw");
  }
};

const getTransactions = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("transaction", filter);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while requestWithdraw");
  }
};
export const transactionServices = {
  requestWithdraw,
  getTransactions
};

export default transactionServices;
