import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  overflow-y: auto;
`;

export const Header = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  border-radius: 16px;
  background: #ffffff;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  filter: drop-shadow(32px 19px 15px rgba(28, 46, 64, 0.01))
    drop-shadow(18px 11px 13px rgba(28, 46, 64, 0.02))
    drop-shadow(8px 5px 9px rgba(28, 46, 64, 0.03))
    drop-shadow(2px 1px 5px rgba(28, 46, 64, 0.04))
    drop-shadow(0px 0px 0px rgba(28, 46, 64, 0.04));
  & > .card {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 1px;
      height: 85px;
      background: #dde2e8;
    }
  }
`;

export const BinaryMLM = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > .title {
    font-weight: 600;
    font-size: 24px;
    color: #000000;
  }
`;

export const Board = styled.div`
  position: relative;
  width: 100%;
  min-height: 650px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border: 1px solid #00a3ff;
  border-radius: 16px;
`;

export const RewardHistory = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > .title {
      font-weight: 600;
      font-size: 24px;
      color: #000000;
    }
    & > .sort-by {
    }
    @media ${breakpoints.xs} {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }
  }
`;

export const BoxHistory = styled.div`
  width: 100%;
  padding: 20px 50px;
  background: #ffffff;
  border-radius: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  & > div > table {
    & > tbody {
      & > tr > td {
        & > .balanceProfit {
          color: #53ba95;
          font-weight: 400;
          font-size: 14px;
        }
        & > .token {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          & > img {
            width: 20px;
            height: 20px;
          }
          & > span {
            color: #4a65ef;
            font-weight: 500;
            font-size: 14px;
            text-transform: uppercase;
          }
        }
        & > .time {
          color: rgba(41, 45, 50, 0.5);
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;
