import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
  z-index: 9999;
  @media ${breakpoints.md} {
    &.toggle {
      position: sticky;
      & > .header {
        background-color: #fff;
      }
    }
  }
`;

export const Main = styled.main`
  padding: 0 20px;
  display: flex;
  align-items: center;
  max-width: 1360px;
  min-width: 320px;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ItemNav = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 30px;
  & > span {
    color: rgb(39, 56, 82);
    font-weight: 700;
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  background-color: rgb(43, 48, 54);
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 12px;
  border-radius: 8px;
  & > li {
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > span {
      text-transform: capitalize;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: rgb(255, 255, 255);
      white-space: nowrap;
    }
    & > .description {
      margin-top: 2px;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: rgb(255, 255, 255);
      white-space: nowrap;
      opacity: 0.8;
    }
    &:hover {
      & > span {
        opacity: 0.5;
      }
    }
  }
`;

export const MenuMobileWrapper = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  transform: translateX(-100%);
  width: 100%;
  height: calc(100vh - 80px);
  padding: 30px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-x: auto;
  transition: all 0.3s ease-in-out;
  & > .item {
    display: flex;
    flex-direction: column;
    & > .name {
      font-weight: 700;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: rgb(39, 56, 82);
      opacity: 0.3;
    }

    & > .item-child {
      display: flex;
      flex-direction: column;
      & > .title {
        margin-top: 20px;
        font-size: 14px;
        line-height: 22px;
        color: rgb(39, 56, 82);
        white-space: nowrap;
        cursor: pointer;
      }
      & > .description {
        margin-top: 4px;
        font-size: 12px;
        line-height: 20px;
        color: rgb(122, 138, 160);
        opacity: 1;
      }
    }
  }
  &.active {
    transform: translateX(0);
  }
`;
export const LogoImage = styled.img`
  height: 24px;
  width: auto;
`;
