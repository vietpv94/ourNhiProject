import logo from "@Assets/images/logo.png";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { Button } from "@Components/Button";
import { Badge } from "@Components/molecules/Badge";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import * as React from "react";
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
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <Main>
          <LeftMenu>
            {dataMenu.map((item) => (
              <li key={item.id}>
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
      </HeaderWrapper>
    </Container>
  );
}
