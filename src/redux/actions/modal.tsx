import { MODAL_TYPE_ACTION } from "@Constants/redux-actions/modal";
import { IModalState } from "@Redux/reducers/modal";

export const setModal = (payload: IModalState) => ({
  type: MODAL_TYPE_ACTION.OPEN_MODAL,
  payload: payload
});
