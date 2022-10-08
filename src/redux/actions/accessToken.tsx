import { ACCESS_TOKEN } from "@Constants/redux-actions/accessToken";

export function setAccessToken(accessToken: string) {
  return {
    type: ACCESS_TOKEN.SET_ACCESS_TOKEN,
    payload: accessToken
  };
}
