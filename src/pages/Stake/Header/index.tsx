import logo from "@Assets/images/Logo.png";
import { Button } from "@Components/atoms/Button";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { Badge } from "@Components/molecules/Badge";
import { Hamburger } from "@Components/molecules/Header/hamburger";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useMedia } from "react-use";
import { WalletSelector } from "../style";
import {
  Container,
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
    link: "/",
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
];
export function Header(props: IHeaderProps) {
  const [isLogin, setIsLogin] = React.useState(false);
  const isTablet = useMedia(breakpoints.xs);
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        {isTablet ? (
          <Hamburger />
        ) : (
          <Main>
            <LeftMenu>
              {dataMenu.map((item) => (
                <li key={`li-${item.id}`}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </LeftMenu>
            <RightMenu>
              <Badge num={10} />
              {isLogin ? (
                <Profile />
              ) : (
                <Button
                  customStyle={"height: 40px;"}
                  onClick={() => setIsLogin(true)}
                  type="blue"
                  text="Connect"
                />
              )}
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
