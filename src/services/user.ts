import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { Token, User } from "@Types/index";
import {
  SendMail,
  UserChangePassword,
  UserUpdateData,
  VerifyEmail,
  VerifyResetPass
} from "@Models/index";
const getProfile = async () => {
  try {
    const { data } = await service.get("user/me");
    console.log(data);
    
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

const getVerifyEmail = async (data: SendMail) => {
  try {
    const response = await nonAuthService.get(`user/verify`, data);
    return response;
  } catch (err) {
    console.log(err);
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

const changePassword = async (data: UserChangePassword) => {
  try {
    const response = await service.update("user/password", data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const resetPassword = async (data: SendMail) => {
  try {
    const response = await nonAuthService.post(`user/reset-pass`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const verifyResetPassword = async (data: VerifyResetPass) => {
  try {
    const response = await nonAuthService.post(`user/verify-reset-pass`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getQrCode2fa = async () => {
  try {
    const response = await nonAuthService.get(`user/qrcode-2fa`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const sendMailConfirmEnable2fa = async () => {
  try {
    const response = await nonAuthService.post(`user/send-mail-enable-2fa`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const enable2FA = async () => {
  try {
    const response = await nonAuthService.post(`user/enable-2fa`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const disable2FA = async () => {
  try {
    const response = await nonAuthService.post(`user/disable-2fa`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const sendKyc = async () => {
  try {
    const response = await nonAuthService.post(`user/kyc`);
    return response;
  } catch (err) {
    console.log(err);
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
  sendKyc
};

export default userServices;
