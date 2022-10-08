import { MODAL_TYPE_ACTION } from "@Redux/constants/modal";

interface IModalState {
  modal: string;
}

const initialState: IModalState = {
  modal: "",
};

export const modalReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case MODAL_TYPE_ACTION.OPEN_MODAL:
      return action.payload;
    default:
      return state;
  }
};
