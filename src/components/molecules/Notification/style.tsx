import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  right: 0px;
  background: #ffffff;
  border: 1px solid #ccedff;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  width: 90vw;
  max-height: 600px;
  overflow-y: auto;
  max-width: 500px;
  z-index: 2;
  @media ${breakpoints.sm} {
    top: calc(100% - 10px);
  }
`;

export const Header = styled.div`
  background: #f8fafc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .total {
    font-weight: 400;
    font-size: 16px;
    & > .num {
      color: #000000;
      font-weight: 700;
      font-size: 18px;
    }
  }
  & > .view-all {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4a65ef;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.div`
  background: transparent;
  display: flex;
  gap: 16px;
  padding: 16px 40px 16px 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > .title {
    color: #000000;
    font-weight: 400;
    font-size: 14px;
  }
  & > .description {
    width: 100%;
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & > .time {
    color: #c1cbd7;
    font-weight: 400;
    font-size: 12px;
  }
`;
