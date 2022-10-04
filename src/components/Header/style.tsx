import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  z-index: 9999;
  padding: 0 20px;
`;

export const Main = styled.main`
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
  margin: 0 20px;
  padding: 10px 20px;
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
  width: 280px;
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
