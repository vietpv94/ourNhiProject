import { Flex } from "@Components/molecules/box";
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
  color: #e83e8c;
}
`;
export const Social = styled(Flex)`
padding: 36px 0px;
img {
  cursor: pointer;
}
`;