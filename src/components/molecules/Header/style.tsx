import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  gap: 50px;
  @media ${breakpoints.md} {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 24px;
  width: auto;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  & > li > a {
    color: #37373b;
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    &:hover,
    &.active {
      color: #00c2ff;
    }
  }
`;

export const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
`;
