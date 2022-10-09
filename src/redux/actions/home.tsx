import { HOME_ACTION_TYPES } from "@Redux/constants/home";

export const openSideBar = (param: boolean) => {
  return {
    type: HOME_ACTION_TYPES.OPEN_SIDE_BAR,
    payload: param,
  };
};
