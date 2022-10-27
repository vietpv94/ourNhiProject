import { Flex } from "@Components/molecules/box";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  font-family: SF Pro Display;

  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #37373B;
  span {
    color: #00a3ff;
  }
`;
export const Social = styled(Flex)`
  padding: 36px 0px;
  img {
    cursor: pointer;
  }
`;
