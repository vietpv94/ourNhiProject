import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { SignInData } from "@Models/auth";

const login = async (user: SignInData) => {
  try {
    const { data } = await service.post("admin/login", user);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Login failed.");
  }
};

const logout = async (): Promise<boolean> => {
  try {
    const { data } = await service.post<never, boolean>("admin/logout");
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Logout failed.");
  }
};

export const authServices = {
  logout,
  login
};

export default authServices;
