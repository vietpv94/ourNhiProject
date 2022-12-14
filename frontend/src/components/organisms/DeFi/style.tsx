import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const DefiWrapper = styled.div`
  margin-top: 20px;
  height: 100%;
  background: #ffffff;
  border: 1px solid #dde2e8;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 16px;
  display: flex;
  width: 100%;
  overflow-y: auto;
  & > .container {
    width: 100%;
    display: flex;
    min-height: 100%;
    height: max-content;
  }
  @media ${breakpoints.sm} {
    background: transparent;
    border: none;
    & > .container {
      flex-direction: column;
      & > div {
        width: 100%;
      }
    }
  }
`;

export const Left = styled.div`
  width: 55%;
  background: #f8fafc;
  border-radius: 16px;
  & > .duration {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
    & > .num {
      width: 100%;
      & > div {
        width: 100%;
      }
    }
  }
  @media ${breakpoints.sm} {
    background: transparent;
  }
`;
export const Right = styled.div`
  width: 45%;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const Title = styled.div`
  position: relative;
  color: #37373b;
  font-weight: 600;
  font-size: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: max-content;
  gap: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dde2e8;
`;

export const Warning = styled.div`
  background: rgba(242, 180, 20, 0.15);
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  & > .description {
    flex: 1;
    color: #37373b;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Token = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  & > .icon {
    width: 30px;
    height: 30px;
  }
  & > .name {
    color: #37373b;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
export const Subscription = styled.div`
  padding: 20px 20px 0 20px;
  & > .label {
    color: #1e1e20;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Input = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ccedff;
  border-radius: 4px;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #37373b;
    &:placeholder {
      color: #8c8c92a1;
    }
  }
`;

export const TokenInput = styled(Token)`
  position: relative;
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: flex-end;
    cursor: pointer;
    & > img {
      width: 15px;
      height: 15px;
    }
    & > .name {
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

export const Available = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px 20px;
  & > .label {
    color: #9a9a9a;
    font-weight: 400;
    font-size: 12px;
  }
  & > .amount {
    color: #37373b;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const LockedAmount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  & > .title {
    font-weight: 400;
    font-size: 14px;
    color: #1e1e20;
  }
`;

export const Item = styled.div`
  & > span {
    font-weight: 400;
    font-size: 14px;
  }
  & > .label {
    color: #8c8c92;
  }
  & > .amount {
    color: #1e1e20;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Term = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  background: #f4f6f8;
  border-radius: 8px;
  padding: 15px;
`;

export const ItemTerm = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  & > .text {
    flex: 1;
    line-height: 16px;
    font-weight: 400;
    font-size: 12px;
    color: #37373b;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: #fff;
  border: 1px solid #c1cbd7;
  border-radius: 8px;
  width: max-content;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  & > li {
    width: 100%;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    & > img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 0.5px solid #00a3ff;
      border-radius: 100px;
      cursor: pointer;
    }
    & > span {
      color: #37373b;
    }
    &:hover {
      background: #e6f6ff;
    }
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  padding: 10px;
  background: #f8fafc;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 1;
  & > span {
    color: #37373b;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
  }
  &:after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f8fafc;
  }
  @media ${breakpoints.sm} {
    left: 0;
    transform: translateX(0);
    &:after {
      left: 10%;
      transform: translateX(0%);
    }
  }
`;
