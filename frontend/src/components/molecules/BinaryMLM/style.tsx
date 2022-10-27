import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: move;
  align-items: center;
  width: 200px;
  height: 187px;
  padding: 12px 0 25px 0;
`;

export const Header = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  height: 24px;
  width: 124px;
  transform: translateX(-50%);
  background: #4a65ef;
  border: 1px solid #ccedff;
  border-radius: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & > span {
    color: #ffffff;
    font-weight: 600;
    font-size: 7px;
  }
`;
export const Tools = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
`;

export const Level = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;
  border: 1px solid #33b5ff;
  border-top: none;
  padding: 7px 10px;
  & > .level {
    display: flex;
    align-items: center;
    gap: 5px;
    & > .content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      & > .label {
        color: #000000;
        font-weight: 600;
        font-size: 10.6068px;
      }
      & > .status {
        color: rgba(0, 0, 0, 0.3);
        font-weight: 400;
        font-size: 7.95508px;
      }
    }
  }
  & > .package {
    display: flex;
    align-items: center;
    gap: 5px;
    & > img {
      width: 17px;
      height: 17px;
    }
    & > .content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      & > .label {
        color: #000000;
        font-weight: 600;
        font-size: 10.6068px;
      }
      & > .value {
        color: #53ba95;
        font-weight: 400;
        font-size: 7.95508px;
      }
    }
  }
`;

export const LeftRight = styled.div`
  padding: 24px 10px 10px 10px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #4a65ef;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  gap: 30px;
  & > .left,
  & > .right {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 7px;
    & > .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > .label {
        color: #8c8c92;
        font-weight: 400;
        font-size: 14px;
      }
      & > .value {
        color: #37373b;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
  & > .left {
    &::after {
      content: "";
      position: absolute;
      right: -15px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  border: 1px solid #66c8ff;
  border-radius: 0 0 8px 8px;
  background: #e9f7ff;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 10px 0;
  & > span {
    color: #4a65ef;
    font-weight: 600;
    font-size: 14px;
  }
  & > .label {
    color: rgba(0, 0, 0, 0.3);
    font-weight: 400;
    font-size: 8px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Input = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 30px;
  border: 1px dashed #00a3ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #00a3ff;
    font-weight: 500;
    font-size: 10px;
  }
`;

export const ChooseWrapper = styled.div`
  border: 1.21384px solid #4a65ef;
  width: 100%;
  padding: 24px 10px 10px 10px;
  border-radius: 9.71069px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
