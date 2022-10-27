import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { IStakingPackage } from "@Models/package";
import { CommonFilter } from "@Types/common";

const getPackage = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/fixed-staking-package", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get getPackage failed.");
  }
};

const addPackage = async (param: IStakingPackage) => {
  try {
    const { data } = await service.post("admin/fixed-staking-package", param);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "addPackage failed.");
  }
};

const updatePackage = async (id: number, param: IStakingPackage) => {
  try {
    const { data } = await service.update(
      `admin/fixed-staking-package/${id}`,
      param
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updatePackage failed.");
  }
};

const deletePackage = async (id: number) => {
  try {
    const { data } = await service.delete(`admin/fixed-staking-package`, id);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "deletePackage failed.");
  }
};

export const adminPackageServices = {
  getPackage,
  addPackage,
  updatePackage,
  deletePackage
};

export default adminPackageServices;
