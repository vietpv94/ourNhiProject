import useHover from "@Hooks/useHover";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useMedia } from "react-use";
import { dataNavigation, DataItemNav } from './data';
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";
import { Dropdown, HeaderWrapper, ItemNav, Main, Navigation } from './style';

export interface IHeaderProps {}

export const ItemNavigation = (data: DataItemNav) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);
  return (
    <ItemNav ref={ref}>
      <span>{data.name}</span>
      <Dropdown style={{ display: `${isHover ? "flex" : "none"}` }}>
        {data.children?.map((item) => (
          <li>
            <span className="title">{item.name}</span>
            <span className="description">{item.description}</span>
          </li>
        ))}
      </Dropdown>
    </ItemNav>
  );
};
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
              return <ItemNavigation key={index} {...item}/>;
            })}
          </Navigation>
        ) : (
          <Hamburger toggle={toggle} setToggle={setToggle} />
        )}
      </Main>
    </HeaderWrapper>
  );
}
