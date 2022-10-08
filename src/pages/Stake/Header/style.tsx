import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  & > li {
    color: #37373b;
    font-weight: 600;
    font-size: 16px;
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
`;
