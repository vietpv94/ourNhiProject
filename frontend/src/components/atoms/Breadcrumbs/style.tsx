import styled from "styled-components";
export const BreadcrumbsWrapper = styled.div`
  color: #d8d8f3;
  font-weight: 500;
  font-size: 20px;
  text-transform: capitalize;
  display: flex;
  gap: 20px;
  align-items: center;
  & > div {
    display: flex;
    gap: 20px;
    align-items: center;
    & > .item {
      display: flex;
      gap: 10px;
      align-items: baseline;
      color: #4a65ef;
      cursor: pointer;
      & > svg{
        width: 18px;
        height: 18px;
      }
    }
  }
`;
