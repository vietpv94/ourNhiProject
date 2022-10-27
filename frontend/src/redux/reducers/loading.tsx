import { LOADING_ACTION_TYPES } from "@Constants/redux-actions/loading";

const initialState = {
  show: false,
};
export const loadingReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case LOADING_ACTION_TYPES.LOADING:
      return {
        ...state,
        show: true,
      };
    case LOADING_ACTION_TYPES.UNLOADING:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default {
  loadingReducer,
};
