import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";

const getListTransaction = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/transaction", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get ListTransaction failed.");
  }
};

const rejectedTransaction = async (id: number) => {
  try {
    const { data } = await service.post(`admin/transaction/${id}/reject`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "rejectedTransaction failed.");
  }
};

const approveTransaction = async (id: number) => {
  try {
    const { data } = await service.post(`admin/transaction/${id}/approve`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "approveTransaction failed.");
  }
};

export const adminTransactionServices = {
  getListTransaction,
  rejectedTransaction,
  approveTransaction
};

export default adminTransactionServices;