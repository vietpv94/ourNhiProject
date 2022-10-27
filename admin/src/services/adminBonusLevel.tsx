import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { IStakingLevelCondition } from "@Models/index";
import { CommonFilter } from "@Types/common";

const getBonusLevel = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/bonus-level", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getBonusLevel failed.");
  }
};

const getBonusLevelById = async (id: number) => {
  try {
    const { data } = await service.getById("admin/bonus-level", id);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getBonusLevelById failed.");
  }
};

const approveBonusLevel = async (id: number) => {
  try {
    const { data } = await service.update(`admin/bonus-level/${id}/approve`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "approveBonusLevel failed.");
  }
};

const rejectBonusLevel = async (id: number) => {
  try {
    const { data } = await service.update(`admin/bonus-level/${id}/reject`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "deleteLevelCondition failed.");
  }
};

export const adminBonusLevelServices = {
  getBonusLevel,
  getBonusLevelById,
  approveBonusLevel,
  rejectBonusLevel
};

export default adminBonusLevelServices