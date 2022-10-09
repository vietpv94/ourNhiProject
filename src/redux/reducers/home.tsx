import { HOME_ACTION_TYPES } from "@Redux/constants/home";

interface IHomeProps {
  isOpenSidebar: boolean;
}

const initialState = {
  isOpenSidebar: false,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.OPEN_SIDE_BAR:
      return {
        ...state,
        isOpenSidebar: action.payload,
      };
    default:
      return state;
  }
};
