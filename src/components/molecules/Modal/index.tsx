import mask from "@Assets/images/molecules/card/mask.png";
import { CloseIcon } from "@Components/atoms/icon/close";
import { setModal } from "@Redux/actions/modal";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Close, Container, Mask, ModalWrapper } from "./style";
export interface IModalProps {}

export function withModal<T>(Component: React.ComponentType) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModal({ modal: "" }));
  };
  return (
    <ModalWrapper>
      <Container>
        <Mask src={mask} alt="mask" />
        <Mask className="right" src={mask} alt="mask" />
        <Close onClick={handleClose}>
          <CloseIcon
            color="#00A3FF"
            customStyle={{
              width: "20px",
              height: "20px",
            }}
          />
        </Close>
        <Component />
      </Container>
    </ModalWrapper>
  );
}
