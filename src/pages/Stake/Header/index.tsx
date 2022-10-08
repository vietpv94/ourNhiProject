import { HeaderWrapper } from "@Components/Header/style";
import * as React from "react";
import { Logo, Main, LeftMenu, RightMenu } from "./style";
import logo from "@Assets/images/logo.png";
import { Badge } from "@Components/molecules/Badge";
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
  return (
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
        </RightMenu>
      </Main>
    </HeaderWrapper>
  );
}
