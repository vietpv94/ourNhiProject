import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  font-family: Roboto;

  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding-top: 20px;
  color: #fff;
  span {
    color: #00A3FF;
  }
`;
export const VerifyModal = styled.div`
  min-width: 400px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #27272a;
    margin-bottom: 32px;
  }
  .label {
    margin-bottom: 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #27272a;
  }
`;
