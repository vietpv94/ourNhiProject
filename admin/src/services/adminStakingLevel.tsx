import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { IStakingLevel } from "@Models/stakingLevel";
import { CommonFilter } from "@Types/common";

const getLevel  = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/staking-level", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get getLevel failed.");
  }
};

const addLevel = async (param: IStakingLevel) => {
  try {
    const { data } = await service.post("admin/staking-level", param);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "addLevel failed.");
  }
};

const updateLevel = async (id: number, param: IStakingLevel) => {
  try {
    const { data } = await service.update(
      `admin/staking-level/${id}`,
      param
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updateLevel failed.");
  }
};

const deleteLevel = async (id: number) => {
  try {
    const { data } = await service.delete(`admin/staking-level`, id);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "deleteLevel failed.");
  }
};

export const adminStakingLevelServices = {
  getLevel ,
  addLevel ,
  updateLevel ,
  deleteLevel 
};

export default adminStakingLevelServices;
