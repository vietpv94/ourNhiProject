import axios, { AxiosError } from "axios";
import moment from "moment";
import { authServices } from "@Services/index";
import { IResponse, Token } from "../types";

// TODO: Consider choose where store token (local, session, cookie) in the future
export function getLocalToken(): string | null {
  const token = window.localStorage.getItem("Authorization");
  return token;
}

export function setToken(token: string): boolean {
  window.localStorage.setItem("Authorization", token);
  return true;
}

export function removeToken() {
  const logoutEventName = "user-logout";
  window.localStorage.removeItem("Authorization");
  window.localStorage.setItem(logoutEventName, moment().format());
  return true;
}

export function handleError(error: unknown, mess: string): any {
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError<unknown>;
    if (serverError && serverError.response) {
      return serverError.response.data;
    }
  }
  return { message: mess };
}

export function handleResponse<T>(data: IResponse<T>): T {
  if (data.success) return data as unknown as T;
  return { errorMsg: data.message } as unknown as T;
}

export function handleResponseCommission<T>(data: IResponse<T>): T {
  if (data.success) return data as unknown as T;
  return { errorMsg: data.message } as unknown as T;
}
export async function retryRefreshToken(numberTry: number): Promise<Token> {
  let keepTrying = 0;
  let lastErr = null;
  do {
    try {
      const result = await authServices.refreshToken();
      keepTrying = numberTry;
      return result;
    } catch (err) {
      keepTrying += 1;
      lastErr = err;
    }
  } while (keepTrying < numberTry);
  throw lastErr;
}
