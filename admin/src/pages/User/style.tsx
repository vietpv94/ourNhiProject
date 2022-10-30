import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const AdminWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #3f3f3f;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-weight: 200;
  font-size: 16px;
  color: #3f3f3f;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .left {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
  }
  @media ${breakpoints.sm} {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const Box = styled.div`
  margin-top: 20px;
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
        & > .package {
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
        & > .dateOfRegistration {
          color: rgba(41, 45, 50, 0.5);
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;

export const BoxPayout = styled.div`
  margin-top: 20px;
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
        & > .time {
          color: rgba(41, 45, 50, 0.5);
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;

export const BoxUsers = styled.div`
  margin-top: 20px;
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
        & > .walletAddress {
          color: rgba(41, 45, 50, 0.5);
        }
        & > .time {
          color: rgba(41, 45, 50, 0.5);
          font-weight: 500;
          font-size: 14px;
        }
        & > .status {
          margin: auto;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          width: 120px;
          &.success {
            color: #53ba95;
            background: rgba(83, 186, 149, 0.3);
          }
          &.pending {
            color: #ff9900;
            background: rgba(255, 224, 130, 0.3);
          }
          &.failed {
            color: #ff6482;
            background: rgba(255, 100, 130, 0.3);
          }
        }
      }
    }
  }
`;
