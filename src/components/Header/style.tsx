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
  color: #2a3751;
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
  margin: 0 20px;
`;
