export type UserUpdateData = {
  nickName?: string;
  password?: string;
  avatar?: string;
  age?: number;
  address?: string;
};

export type UserChangePassword = {
  oldPassword: string;
  password: string;
};

export type SendMail = {
  email: string;
};

export type VerifyEmail = {
  verifyToken: string;
  email: string;
};

export type VerifyOTPResetPass = {
  otpCode: string;
  email: string;
};


export type VerifyResetPass = {
  verifyToken: string;
  password: string;
  email: string;
};

export type enable2FAData = {
  twoFACode: string;
};

export type disable2FAData = {
  password: string;
  twoFACode: string;
};

export type KYCData = {
  firstName: string;
  lastName: string;
  country: string;
  cardNumber: string;
  imageFront: string;
  imageBack: string;
};

export type SetBinaryChild = {
  fromId: number;
  email: string;
  type: number;
};
