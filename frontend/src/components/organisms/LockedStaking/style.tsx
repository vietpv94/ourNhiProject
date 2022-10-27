import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const LockedStakingWrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  @media ${breakpoints.sm} {
    flex-direction: column-reverse;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const Pool = styled.div`
  & > .label {
    color: #4a65ef;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    font-weight: 600;
    font-size: 14px;
    color: #8c8c92;
    & > .total {
      color: #4a65ef;
    }
  }
  @media ${breakpoints.sm} {
    width: 100%;
    display: flex;
    justify-content: space-between;
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

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 20px;
`;
