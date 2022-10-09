import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";

const getStakingPack = async () => {
  try {
    const { data } = await nonAuthService.get(`staking/pack`);
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

const doStake = async () => {
  try {
    const { data } = await service.post(`staking`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while trigger staking");
  }
};

const getStakingHistory = async () => {
  try {
    const { data } = await service.get(`staking/history`);
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
    const { data } = await service.post(`staking/history/${id}/unstake`);
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
  getStakingPack,
  getStakingPackValue,
  doStake,
  getStakingHistory,
  getDetailStakingHistory,
  doUnStake,
  doHarvest
};

export default stakingServices;
