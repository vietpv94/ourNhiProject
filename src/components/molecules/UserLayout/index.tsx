import React from "react";
import styled from "styled-components";
import Logo from "@Assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import { breakpoints } from "@Utils/theme";
import { Header } from "../HeaderHomePage";

import beach from "@Assets/images/login/background.png";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: ${`url(${beach})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  overflow: hidden;
  min-height: 100vh;
  &::before {
    content: "";
    position: absolute;
    width: 345px;
    height: 345px;
    background: #00a3ff;
    filter: blur(409px);
    left: 200px;
    bottom: 100px;
    @media ${breakpoints.sm} {
      display: none;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 345px;
    height: 345px;
    background: #00a3ff;
    filter: blur(409px);
    right: 100px;
    top: 200px;

    @media ${breakpoints.sm} {
      display: none;
    }
  }
`;
const LogoWrapper = styled(NavLink)`
  width: 200px;
  position: absolute;
  top: 40px;
  left: 44px;
  img {
    max-width: 100%;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 47px;
    text-align: center;
    color: #3f3f3f;
    margin-bottom: 24px;
    white-space: pre-line;
    @media ${breakpoints.sm} {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 32px;
    }
  }
`;

export interface IUserLayoutProps {
  children: React.ReactNode;
  heading: string;
}

export const UserLayout: React.FC<IUserLayoutProps> = ({
  children,
  heading
}) => {
  return (
    <Wrapper id="container">
      <Header />
      <Content>
        <h1>{heading}</h1>
        {children}
      </Content>
    </Wrapper>
  );
};
