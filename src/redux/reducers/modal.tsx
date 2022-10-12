import { MODAL_TYPE_ACTION } from "@Constants/redux-actions/modal";

export interface IModalState {
  modal: string;
  data?: any;
}

const initialState: IModalState = {
  modal: "",
};

export const modalReducer = (
  state = initialState,
  action: { type: string; payload: IModalState }
) => {
  switch (action.type) {
    case MODAL_TYPE_ACTION.OPEN_MODAL:
      return action.payload;
    default:
      return state;
  }
};
