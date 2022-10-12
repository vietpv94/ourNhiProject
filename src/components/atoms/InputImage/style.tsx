import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  min-width: 180px;
  aspect-ratio: 214/124;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 10px;
  & > .text {
    font-weight: 400;
    font-size: 10px;
    color: #8c8c92;
  }
`;

export const Box = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.43076px dashed #c0c0c0;
  border-radius: 4px;
  &.active {
    border: 1.43076px solid #00a3ff;
  }
  & > input {
    display: none;
  }
  & > .svg {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: -10px;
    right: -10px;
  }
  & > label {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  & > .center {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > div {
      width: 25px;
      height: 25px;
      background: #e6f6ff;
      border-radius: 4.19556px;
    }
    & > span {
      color: #00a3ff;
      font-weight: 400;
      font-size: 10.0153px;
    }
  }
  & > .preview-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const QRModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 274px;
  background: #ffffff;
  border: 1px solid #f8fafc;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 16px;
  display: flex;
  padding: 40px;
  padding-bottom: 10px;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  & > .title {
    color: #37373b;
    font-weight: 400;
    font-size: 16px;
  }
  & > svg {
    position: absolute;
    top: 14px;
    right: 10px;
  }
  & > .qr-code {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
  }
  & > .save {
    color: #00a3ff;
    font-weight: 500;
    font-size: 16px;
  }
`;
