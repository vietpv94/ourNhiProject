import logo from "@Assets/images/Logo.png";
import { breakpoints } from "@Utils/theme";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import {
  Container,
  HeaderWrapper,
  LeftMenu,
  Logo,
  Main,
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
    link: "/admin"
  }
];
export function Header(props: IHeaderProps) {

  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <Main>
          <LeftMenu>
            {dataMenu.map((item) => (
              <Link key={`li-${item.id}`} to={item.link}>
                {item.name}
              </Link>
            ))}
          </LeftMenu>
        </Main>
      </HeaderWrapper>
    </Container>
  );
}
