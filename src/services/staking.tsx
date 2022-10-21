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

const initStaking = async (param: { packageId: number; address: string }) => {
  try {
    const { data } = await service.post(`staking/init`, param);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while init staking");
  }
};

const initStakingDefi = async (param: {
  stakeValue: number;
  duration: number;
  currency: number;
  address: string;
}) => {
  try {
    const { data } = await service.post(`staking/defi/init`, param);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while init defi staking");
  }
};

const doStakeDefi = async (param: {
  stakeValue: number;
  duration?: number;
  currency: number;
  address?: string;
  depositId?: number;
  signature?: any;
}) => {
  try {
    const { data } = await service.post(`staking/defi`, param);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while trigger staking");
  }
};

const doStake = async (params: {
  packageId: number;
  stakeValue?: number;
  address?: string;
  depositId?: number;
  signature?: any;
}) => {
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

const getStakingPayout = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get(`staking/profit`, filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get Staking Payout");
  }
};

const getStakingDefiDuration = async () => {
  try {
    const { data } = await service.get(`staking/defi/duration`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get getStakingDefiDuration");
  }
};

const getSolPrice = async () => {
  try {
    const { data } = await service.get(`price`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get price");
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
  doHarvest,
  getStakingPayout,
  getStakingDefiDuration,
  initStaking,
  initStakingDefi,
  doStakeDefi,
  getSolPrice
};

export default stakingServices;
