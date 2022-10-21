import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: sticky;
  top: calc(80px + 20px);
  left: 0;
  min-width: 300px;
  height: 100%;
  background: #fefefe;
  border: 1px solid #dde2e8;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  @media ${breakpoints.sm} {
    position: fixed;
    top: 0;
    left: unset;
    z-index: 2;
    right: -100%;
    &.active {
      right: 0;
    }
    transition: right 0.7s ease-in-out;
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  width: 100%;
  background: #e6f6ff;
  position: relative;
  padding: 20px;
  gap: 10px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #99daff;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const Item = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  & > .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > .name {
      color: #37373b;
      font-weight: 400;
      font-size: 16px;
    }
  }
  &:hover,
  &.active {
    & > .right {
      & > .name {
        color: #00a3ff;
      }
    }
    & svg {
      & > path {
        stroke: #00a3ff;
      }
    }
  }
`;

export const ChildMenu = styled.div``;

export const ChildItem = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  position: relative;
  gap: 10px;
  height: 20px;
  align-items: center;
  margin-left: 20px;
  padding: 20px 0;
  & > .name {
    color: #37373b;
    font-weight: 400;
    font-size: 16px;
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -2px;
    width: 1px;
    height: 100%;
    background: #37373b;
  }
  &:hover,
  &.active {
    & > .name {
      color: #00a3ff;
    }
    & svg {
      & > path {
        stroke: #00a3ff;
        fill: #00a3ff;
      }
    }
    &::before {
      background: #00a3ff;
    }
  }
`;
