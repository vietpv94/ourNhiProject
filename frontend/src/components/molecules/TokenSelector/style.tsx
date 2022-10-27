import styled from "styled-components";

export const TokenSelectorWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: max-content;
  display: flex;
  padding: 15px;
  background: #00a3ff;
  border-radius: 8px;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  & > .tokenImage {
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }
  & > .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      & > .name,
      .network {
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        & > .network {
          opacity: 0.5;
        }
      }
      & > .value {
        color: #ffffff;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
`;
