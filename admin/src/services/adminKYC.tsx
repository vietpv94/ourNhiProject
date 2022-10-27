import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";

const getKycRequest = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/kyc", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getKycRequest failed.");
  }
};

const getKycRequestById = async (id: number) => {
  try {
    const { data } = await service.get(`admin/kyc/${id}`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getSystemConfigByKey failed.");
  }
};

const rejectKycRequest = async (id: number) => {
  try {
    const { data } = await service.update(`admin/kyc/${id}/reject`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getSystemConfigByKey failed.");
  }
};

const approveKycRequest = async (id: number) => {
  try {
    const { data } = await service.update(`admin/kyc/${id}/approve`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getSystemConfigByKey failed.");
  }
};

export const adminKYCServices = {
  getKycRequest,
  getKycRequestById,
  rejectKycRequest,
  approveKycRequest
};

export default adminKYCServices;
