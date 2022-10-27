import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";

const getSystemConfigs = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/system-config", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getSystemConfigs failed.");
  }
};

const getSystemConfigByKey = async (key: string) => {
  try {
    const { data } = await service.get(`admin/system-config/${key}`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getSystemConfigByKey failed.");
  }
};

const updateSystemConfigByKey = async (
  key: string,
  updateParam: {
    key: string;
    value: string;
    isPublic: boolean;
  }
) => {
  try {
    const { data } = await service.update(
      `admin/system-config/${key}`,
      updateParam
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getSystemConfigByKey failed.");
  }
};

const updateSystemConfig = async (updateParam: {
  key: string;
  value: string;
  isPublic: boolean;
}) => {
  try {
    const { data } = await service.post("admin/system-config", updateParam);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updateSystemConfig failed.");
  }
};

const deleteSystemConfigByKey = async (key: string) => {
  try {
    const { data } = await service.delete(`admin/system-config`, key);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "deleteSystemConfigByKey failed.");
  }
};

export const adminSystemConfigServices = {
  getSystemConfigs,
  updateSystemConfig,
  getSystemConfigByKey,
  updateSystemConfigByKey,
  deleteSystemConfigByKey
};

export default adminSystemConfigServices;
