import { LOADING_ACTION_TYPES } from "@Constants/redux-actions/loading";

export const loadingReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case LOADING_ACTION_TYPES.LOADING:
      return true;
    case LOADING_ACTION_TYPES.UNLOADING:
      return false;
    default:
      return state;
  }
};

export default {
  loadingReducer
};
