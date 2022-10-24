export type SignInData = {
  email: string;
  password: string;
  twoFaCode?: string;
  remember?: boolean;
};

export type SignUpData = {
  email: string;
  password: string;
  nickName: string;
  refCode?: string;
};
