import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { Token, User } from "@Types/index";
import {
  enable2FAData,
  KYCData,
  SendMail,
  SetBinaryChild,
  UserChangePassword,
  UserUpdateData,
  VerifyEmail,
  VerifyOTPResetPass,
  VerifyResetPass
} from "@Models/index";
import { GetChildFilter } from "@Types/common";
const getProfile = async () => {
  try {
    const { data } = await service.get("user/me");
    return handleResponse(data);
  } catch (err) {
    console.log(err);
    return handleError(err, "Error while get profile");
  }
};

const updateProfile = async (params: { data: UserUpdateData }) => {
  try {
    const response = await service.update("user", params.data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getVerifyEmail = async (verifyData: SendMail) => {
  try {
    const {data} = await nonAuthService.get(`user/verify`, verifyData);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get verify code");
  }
};

const verifyCode = async (verifyData: VerifyEmail) => {
  try {
    const { data } = await nonAuthService.post(`user/verify`, verifyData);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while verify code");
  }
};

const changePassword = async (passwordData: UserChangePassword) => {
  try {
    const { data } = await service.update("user/password", passwordData);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while change password");
  }
};

const resetPassword = async (mail: SendMail) => {
  try {
    const { data } = await nonAuthService.post(`user/reset-pass`, mail);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while reset password reset password");
  }
};

const verifyOTPResetPassword = async (
  resetOTPPasswordData: VerifyOTPResetPass
) => {
  try {
    const { data } = await nonAuthService.post(
      `user/verify-otp-reset-pass`,
      resetOTPPasswordData
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while verify password");
  }
};

const verifyResetPassword = async (resetPasswordData: VerifyResetPass) => {
  try {
    const { data } = await nonAuthService.post(
      `user/verify-reset-pass`,
      resetPasswordData
    );
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while verify password");
  }
};

const getQrCode2fa = async () => {
  try {
    const { data } = await service.get(`user/qrcode-2fa`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while  get qrcode");
  }
};

const sendMailConfirmEnable2fa = async () => {
  try {
    const { data } = await service.post(`user/send-mail-enable-2fa`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while send mail");
  }
};

const enable2FA = async (params: enable2FAData) => {
  try {
    const { data } = await service.post(`user/enable-2fa`, params);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while enable2FA");
  }
};

const disable2FA = async () => {
  try {
    const { data } = await service.post(`user/disable-2fa`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while disable2FA");
  }
};

const sendKyc = async (params: FormData) => {
  try {
    const { data } = await service.post(`user/kyc`, params);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while sending kyc");
  }
};

const getDashboard = async () => {
  try {
    const { data } = await service.get("user/dashboard");
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while sending kyc");
  }
};

const getUserLevel = async () => {
  try {
    const { data } = await service.get("user/level");
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while sending kyc");
  }
};

const getUserChild = async (filter: GetChildFilter) => {
  try {
    const { data } = await service.get(`user/child`, filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while getting user child");
  }
};

const getChildDetail = async (email: string) => {
  try {
    const { data } = await service.get(`user/child/${email}`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while getting detail child");
  }
};

const setBinaryChild = async (child: SetBinaryChild) => {
  try {
    const { data } = await service.post("user/child", child);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while setting binary child");
  }
};

const getBinaryChild = async (filter: GetChildFilter) => {
  try {
    const { data } = await service.get(`user/child/binary`, filter);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while get binary child");
  }
};

const getUserChildSummary = async () => {
  try {
    const { data } = await service.get(`user/child/summary`);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while get user summary");
  }
};

const getBinaryDashboard = async () => {
  try {
    const { data } = await service.get(`user/child/binary/summary`);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while get binary summary");
  }
};

const getChildBinaryTree = async (params?: { from?: string }) => {
  try {
    const { data } = await service.get(`user/child/binary/tree`, params);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while get binary tree");
  }
};

const getUserParent = async () => {
  try {
    const { data } = await service.get(`user/parent`);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while getting parent");
  }
};

const getUserTree = async () => {
  try {
    const { data } = await service.get(`user/tree`);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while getting tree user");
  }
};

export const userServices = {
  getProfile,
  updateProfile,
  getVerifyEmail,
  verifyCode,
  changePassword,
  resetPassword,
  verifyResetPassword,
  getQrCode2fa,
  sendMailConfirmEnable2fa,
  enable2FA,
  disable2FA,
  sendKyc,
  getUserChild,
  getBinaryChild,
  getUserParent,
  getUserTree,
  setBinaryChild,
  getDashboard,
  getUserLevel,
  getUserChildSummary,
  getChildDetail,
  getBinaryDashboard,
  verifyOTPResetPassword,
  getChildBinaryTree
};

export default userServices;
