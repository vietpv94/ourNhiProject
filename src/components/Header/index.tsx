import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useMedia } from "react-use";
import { dataNavigation } from "./data";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";
import { HeaderWrapper, ItemNav, Main, Navigation } from "./style";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const [toggle, setToggle] = React.useState(false);
  const isMobile = useMedia(breakpoints.md);
  return (
    <HeaderWrapper>
      <Main>
        <Logo />
        {!isMobile ? (
          <Navigation>
            {dataNavigation.map((item, index) => {
              return <ItemNav key={index}>{item.name}</ItemNav>;
            })}
          </Navigation>
        ) : (
          <Hamburger toggle={toggle} setToggle={setToggle} />
        )}
      </Main>
    </HeaderWrapper>
  );
}
