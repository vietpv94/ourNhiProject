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
        background-color: rgb(239, 242, 246);
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
  position: relative;
  align-items: center;
  height: 100%;
`;

export const ItemNav = styled.div`
  cursor: pointer;
  padding: 10px 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    color: rgb(39, 56, 82);
    font-weight: 700;
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  background-color: rgb(43, 48, 54);
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 12px;
  border-radius: 16px;
  /* & > li {
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
  } */
`;

export const MenuMobileWrapper = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  transform: translateX(-100%);
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0 30px 30px 30px;
  background-color: rgb(239, 242, 246);
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
  cursor: pointer;
`;

export const ItemWrapper = styled.li<{ type?: number }>`
  padding: 16px;
  display: flex;
  flex-direction: ${({ type }) => (type === 1 ? "row" : "column")};
  align-items: ${({ type }) => (type === 1 ? "center" : "flex-start")};
  width: 100%;
  gap: 20px;
  & > div {
    display: flex;
    flex-direction: column;
    & > .title {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: rgb(255, 255, 255);
    }
    & > .description {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  & > .icon {
    width: ${({ type }) => (type === 1 ? "40px" : "30px")};
    height: ${({ type }) => (type === 1 ? "40px" : "30px")};
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
  }
`;

export const Type3 = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  grid-gap: 20px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  background-color: rgb(43, 48, 54);
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 12px;
  border-radius: 16px;
  & > .main {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 32px;
    border-radius: 10px;
    background: rgb(52, 52, 61);
    cursor: pointer;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & > .title {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: rgb(255, 255, 255);
      }
      & > .description {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    & > .icon {
      width: 40px;
      height: 40px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
    }
  }
  & > .list {
    flex: 1;
    display: flex;
    flex-direction: column;
    & > .item {
      padding: 10px 16px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: rgb(255, 255, 255);
      border-radius: 10px;
      &:hover {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
    }
  }
`;

export const MobileWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 16px;
  border-radius: 16px;
`;

export const MobileType3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  margin-top: 20px;
  & > .main {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 32px;
    border-radius: 10px;
    background: rgba(0, 10, 61, 0.04);
    cursor: pointer;
    gap: 20px;
    margin-bottom: 10px;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & > .title {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: rgb(39, 56, 82);
      }
      & > .description {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: rgb(122, 138, 160);
      }
    }
    & > .icon {
      width: 40px;
      height: 40px;
    }
  }
  & > .list {
    flex: 1;
    display: flex;
    flex-direction: column;
    & > .item {
      padding: 10px 16px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: rgb(39, 56, 82);
      border-radius: 10px;
    }
  }
`;
