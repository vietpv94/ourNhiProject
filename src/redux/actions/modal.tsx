import { MODAL_TYPE_ACTION } from "@Redux/constants/modal";

export const setModal = (payload: { modal: string }) => ({
  type: MODAL_TYPE_ACTION.OPEN_MODAL,
  payload: payload,
});
