import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { SignUpData, SignInData } from "@Models/index";
import { Token, User } from "@Types/index";

const register = async (user: SignUpData): Promise<Token> => {
  try {
    const { data } = await service.post<User, Token>("auth/signup", user);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "SignUp failed.");
  }
};

const login = async (user: SignInData): Promise<Token> => {
  try {
    const { data } = await service.post<User, Token>("auth/sign-in", user);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Login failed.");
  }
};

const logout = async (): Promise<boolean> => {
  try {
    const { data } = await service.post<never, boolean>("auth/logout");
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Logout failed.");
  }
};

const refreshToken = async (): Promise<Token> => {
  // Reason disable: Throw error for retryRefreshToken catch
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await service.post<never, Token>("auth/refresh-token");
    if (data.success) return data.data;
    throw new Error();
  } catch (err) {
    throw err;
  }
};

const verify2FA = async (params: any) => {
  try {
    const response = await nonAuthService.get("auth/2fa", params);
    const { status } = response;
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject({ error: true, data: "exception" });
  }
};

export const authServices = {
  refreshToken,
  logout,
  login,
  register,
  verify2FA
};

export default authServices;
