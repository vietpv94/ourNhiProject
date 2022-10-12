import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";

const getCommissionHistory = async () => {
  try {
    const { data } = await service.get("commission-history");
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
