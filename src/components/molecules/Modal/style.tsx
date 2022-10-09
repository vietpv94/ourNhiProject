import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  min-width: 350px;
  max-width: 95%;
  background: #ffffff;
  border: 1px solid #f8fafc;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 8px;
  overflow: hidden;
  padding: 50px 30px 30px 30px;
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Mask = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  top: 0;
  transform: translateX(-50%);
  &.right {
    left: 100%;
    top: unset;
    bottom: 0;
  }
`;
