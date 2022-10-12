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

export type VerifyResetPass = {
  verifyToken: string;
  password: string;
};

export type enable2FAData = {
  password: string;
  verifyCode: string;
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
  userId: number;
  type: number;
};
