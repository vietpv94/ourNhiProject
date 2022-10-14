import logo from "@Assets/images/Logo.png";
import { Button } from "@Components/atoms/Button";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { Badge } from "@Components/molecules/Badge";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { Link, Navigate } from "react-router-dom";
import { useMedia } from "react-use";
import { WalletSelector } from "../../../pages/Stake/style";
import { Hamburger } from "../HeaderHomePage/hamburger";
import {
  Container,
  Flex,
  HeaderWrapper,
  LeftMenu,
  Logo,
  Main,
  RightMenu,
} from "./style";
export interface IHeaderProps {}

interface IMenuItem {
  id: number;
  name: string;
  link: string;
}
const dataMenu: IMenuItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/stake",
  },
  {
    id: 2,
    name: "marketing",
    link: "/marketing",
  },
  {
    id: 3,
    name: "support",
    link: "/support",
  },
  {
    id: 4,
    name: "FAQ",
    link: "/faq",
  },
];
export function Header(props: IHeaderProps) {
  const isTablet = useMedia(breakpoints.sm);
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        {isTablet ? (
          <Flex>
            <Badge num={10} />
            <Hamburger />
          </Flex>
        ) : (
          <Main>
            <LeftMenu>
              {dataMenu.map((item) => (
                <Link key={`li-${item.id}`} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </LeftMenu>
            <RightMenu>
              <Badge num={10} />
              <Profile />
              <WalletSelector>
                <WalletIcon color="#00a3ff" />
              </WalletSelector>
              <LanguageSelector />
            </RightMenu>
          </Main>
        )}
      </HeaderWrapper>
    </Container>
  );
}
