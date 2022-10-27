export type Token = {
  accessToken: string;
};
export type User = {
  email: string;
  password: string;
};

export interface RegisterUser extends User {
  refCode?: string;
}
