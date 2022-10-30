import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  & > table {
    flex: 1;
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
    & > thead {
      display: flex;
      width: 100%;
      padding-bottom: 10px;
      table-layout: fixed;
      & > tr {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        & > th {
          flex: 1;
          padding: 10px 0;
          color: #8c8c92;
          text-transform: capitalize;
          text-align: center;
          color: #4a65ef;
          font-weight: 400;
          font-size: 14px;
          min-width: 120px;
        }
        & > th:first-child {
          text-align: left;
          width: 20px
        }
      }
    }
    & > tbody {
      padding-right: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      flex: 1;
      & > tr {
        display: flex;
        width: 100%;
        position: relative;
        padding: 10px 0;
        table-layout: fixed;
        justify-content: center;
        align-items: center;
        & > td {
          flex: 1;
          padding: 10px 0;
          color: #37373b;
          text-transform: capitalize;
          text-align: center;
          font-weight: 500;
          font-size: 14px;
          min-width: 120px;
        }
        & > td:first-child {
          text-align: left;
        }
        & > td:last-child {
          text-align: right;
        }
        &::after {
          content: "";
          width: 100%;
          height: 1px;
          background: #e5e5e5;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        @media ${breakpoints.sm} {
          width: max-content;
        }
      }
    }
  }
  .pagination-bar {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Footer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
  }
  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > span {
      width: 100%;
      text-align: center;
    }
    & > div {
      width: 100%;
      & > ul {
        justify-content: center;
      }
    }
  }
`;
