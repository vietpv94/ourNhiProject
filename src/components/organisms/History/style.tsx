import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const HistoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #3f3f3f;
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
  @media ${breakpoints.sm} {
    padding: 10px 20px;
  }
  @media ${breakpoints.xs} {
    padding: 10px 15px;
  }
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
  @media ${breakpoints.sm} {
    padding: 10px 20px;
  }
  @media ${breakpoints.xs} {
    padding: 10px 15px;
  }
  & > div > table {
    & > tbody {
      & > tr > td {
        & > div {
          height: 20px;
          display: flex;
          align-items: center;
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

export const BoxTransaction = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px 50px;
  background: #ffffff;
  border-radius: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  @media ${breakpoints.sm} {
    padding: 10px 20px;
  }
  @media ${breakpoints.xs} {
    padding: 10px 15px;
  }
  & > div > table {
    & > thead {
      & > tr {
        & > th {
          min-width: 120px;
        }
        & > th:first-child {
          min-width: 50px;
          max-width: 100px;
        }
        & > th:last-child {
          padding-right: 10px;
        }
      }
    }
    & > tbody {
      & > tr {
        & > td {
          min-width: 120px;
          padding: unset;
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
            @media ${breakpoints.xs} {
              height: 28px;
              width: 80px;
            }
          }
        }
        & > td:first-child {
          min-width: 50px;
          max-width: 100px;
        }
        & > td:last-child {
          padding-right: 10px;
        }
      }
    }
  }
`;
