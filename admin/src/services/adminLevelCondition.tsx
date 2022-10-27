import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { IStakingLevelCondition } from "@Models/index";
import { CommonFilter } from "@Types/common";

const getLevelCondition  = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/level-condition", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get getLevelCondition failed.");
  }
};

const addLevelCondition = async (param: IStakingLevelCondition) => {
  try {
    const { data } = await service.post("admin/level-condition", param);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "addLevelCondition failed.");
  }
};

const updateLevelCondition = async (id: number, param: IStakingLevelCondition) => {
  try {
    const { data } = await service.update(
      `admin/level-condition/${id}`,
      param
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updateLevelCondition failed.");
  }
};

const deleteLevelCondition = async (id: number) => {
  try {
    const { data } = await service.delete(`admin/level-condition`, id);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "deleteLevelCondition failed.");
  }
};

export const adminStakingLevelConditionServices = {
  getLevelCondition ,
  addLevelCondition ,
  updateLevelCondition ,
  deleteLevelCondition 
};

export default adminStakingLevelConditionServices;
