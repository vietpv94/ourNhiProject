import { ACCESS_TOKEN } from "@Constants/redux-actions/accessToken";
import { AnyAction } from "@reduxjs/toolkit";

const accessToken = (state = "", action: AnyAction ) => {
  switch (action.type) {
    case ACCESS_TOKEN.SET_ACCESS_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
export default accessToken;
