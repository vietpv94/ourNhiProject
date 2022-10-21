import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";

const getCommissionHistory = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("commission-history", filter);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while getting commission-history");
  }
};

const getCommissionHistoryDetail = async (id: number) => {
  try {
    const { data } = await service.get(`commission-history/${id}`);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while getting commission-history");
  }
};

export const commissionServices = {
  getCommissionHistory,
  getCommissionHistoryDetail
};

export default commissionServices;
