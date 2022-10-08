import styled from "styled-components";

export const LockedStakingWrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Pool = styled.div`
  & > .label {
    color: #1e1e20;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    font-weight: 600;
    font-size: 14px;
    color: #8c8c92;
    & > .total {
      color: #1e1e20;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  grid-gap: 20px;
`;

export const GridWrapper = styled.div`
  overflow: auto;
  flex: 1;
  margin-top: 20px;
`;
