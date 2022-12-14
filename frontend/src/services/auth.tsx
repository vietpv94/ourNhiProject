import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { SignUpData, SignInData } from "@Models/index";
import { Token, User } from "@Types/index";

const register = async (user: SignUpData) => {
  try {
    const { data } = await service.post("auth/signup", user);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "SignUp failed.");
  }
};

const login = async (user: SignInData) => {
  try {
    const { data } = await service.post("auth/sign-in", user);
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

const check2FA = async (params: { email: string }) => {
  try {
    const { data } = await nonAuthService.get("auth/2fa", params);

    return handleResponse(data);
  } catch (error) {
    return handleError(error, "error happen while checking 2fa");
  }
};

export const authServices = {
  refreshToken,
  logout,
  login,
  register,
  check2FA
};

export default authServices;
