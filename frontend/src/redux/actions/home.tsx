import { HOME_ACTION_TYPES } from "@Constants/redux-actions/home";

export const openSideBar = (param: boolean) => {
  return {
    type: HOME_ACTION_TYPES.OPEN_SIDE_BAR,
    payload: param,
  };
};
