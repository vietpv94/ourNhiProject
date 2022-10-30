import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { SignInData } from "@Models/auth";
import { CommonFilter } from "@Types/common";

const getListUser = async (filter?: CommonFilter) => {
  try {
    const { data } = await service.get("admin/user", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get user failed.");
  }
};

const getDetailUser = async (id: number) => {
  try {
    const { data } = await service.get(`admin/user/${id}`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get detail user failed.");
  }
};

const updateUser = async (
  id: number,
  updateData: { email?: string; nickName?: string; active?: boolean }
) => {
  try {
    const { data } = await service.update(`admin/user/${id}`, updateData);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updateUser failed.");
  }
};

const updateUserBalance = async (
  id: number,
  updateData: { balance: string }
) => {
  try {
    const { data } = await service.update(
      `admin/user/${id}/balance`,
      updateData
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updateUserBalance failed.");
  }
};

const updateUserLevel = async (id: number, updateData: { balance: string }) => {
  try {
    const { data } = await service.update(`admin/user/${id}/level`, updateData);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "updateUserLevel failed.");
  }
};

const getUserTx = async (id: number, filter?: CommonFilter) => {
  try {
    const { data } = await service.get(`admin/user/${id}/transaction`, filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getUserTx failed.");
  }
};

const getUserCommission = async (id: number, filter?: CommonFilter) => {
  try {
    const { data } = await service.get(`admin/user/${id}/commission`, filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getUserCommission failed.");
  }
};

const getUserStaking = async (id: number, filter?: CommonFilter) => {
  try {
    const { data } = await service.get(`admin/user/${id}/staking`, filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getUserStaking failed.");
  }
};

const getUserStakingProfit = async (id: number, filter?: CommonFilter) => {
  try {
    const { data } = await service.get(
      `admin/user/${id}/staking-profit`,
      filter
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "getUserStakingProfit failed.");
  }
};

export const userServices = {
  getListUser,
  getDetailUser,
  updateUser,
  updateUserBalance,
  updateUserLevel,
  getUserTx,
  getUserCommission,
  getUserStaking,
  getUserStakingProfit,
};

export default userServices;
