import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";

const getStakingDuration = async () => {
  try {
    const { data } = await nonAuthService.get(`staking/pack/duration`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get packs");
  }
};

const getStakingPack = async (duration?: number) => {
  try {
    const { data } = await nonAuthService.get(`staking/pack`, { duration });
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get packs");
  }
};

const getStakingPackValue = async () => {
  try {
    const { data } = await nonAuthService.get(`staking/pack/value`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get pack's value");
  }
};

const doStake = async (params: { packageId: number; stakeValue: number }) => {
  try {
    const { data } = await service.post(`staking`, params);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while trigger staking");
  }
};

const getStakingHistory = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get(`staking/history`, filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get staking history");
  }
};

const getDetailStakingHistory = async (id: number) => {
  try {
    const { data } = await service.get(`staking/history/${id}`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get detail staking history");
  }
};

const doUnStake = async (id: number) => {
  try {
    const { data } = await service.post(`staking/${id}/unstake`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while unstaking");
  }
};

const doHarvest = async (id: number) => {
  try {
    const { data } = await service.post(`staking/history/${id}/harvest`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while harvest");
  }
};

export const stakingServices = {
  getStakingDuration,
  getStakingPack,
  getStakingPackValue,
  doStake,
  getStakingHistory,
  getDetailStakingHistory,
  doUnStake,
  doHarvest
};

export default stakingServices;
