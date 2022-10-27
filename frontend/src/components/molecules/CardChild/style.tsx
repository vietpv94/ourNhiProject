import styled from "styled-components";

export const CardChildWrapper = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: #dde2e8;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  & > span {
    text-transform: capitalize;
    color: #4a65ef;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const Main = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  & > .text {
    color: #37373b;
    font-weight: 400;
    font-size: 14px;
  }
  &.active {
    background: #33B5FF;
    & > div > svg > path {
      fill: #4a65ef;
    }
  }
  &:hover {
    background: #ccedff;
    & > div > svg > path {
      fill: #4a65ef;
    }
  }
`;
