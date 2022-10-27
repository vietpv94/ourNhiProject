import { LOADING_ACTION_TYPES } from "@Constants/redux-actions/loading";

export const loading = () => {
  return {
    type: LOADING_ACTION_TYPES.LOADING
  };
};

export const unloading = () => {
  return {
    type: LOADING_ACTION_TYPES.UNLOADING
  };
};
