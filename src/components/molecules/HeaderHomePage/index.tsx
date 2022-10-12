import { Button } from "@Components/atoms/Button";
import useHover from "@Hooks/useHover";
import { RootState } from "@Redux/reducers";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMedia } from "react-use";
import { dataNavigation, DataItemNav } from "./data";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";
import {
  Dropdown,
  HeaderWrapper,
  ItemNav,
  Main,
  MenuMobileWrapper,
  Navigation
} from "./style";

export interface IHeaderProps {}

export const ItemNavigation = (data: DataItemNav) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);
  return (
    <ItemNav ref={ref}>
      <span>{data.name}</span>
      <Dropdown style={{ display: `${isHover ? "flex" : "none"}` }}>
        {data.children?.map((item, index) => (
          <li key={`navigation-${index}`}>
            <span className="title">{item.name}</span>
            <span className="description">{item.description}</span>
          </li>
        ))}
      </Dropdown>
    </ItemNav>
  );
};

export const ItemMenuMobile = (data: DataItemNav) => {
  return (
    <div className="item">
      <span className="name">{data.name}</span>
      {data.children?.map((item, index) => (
        <div className="item-child" key={`menu-${index}`}>
          <span className="title">{item.name}</span>
          <span className="description">{item.description}</span>
        </div>
      ))}
    </div>
  );
};
export const MenuMobile = ({ toggle }: { toggle: boolean }) => {
  return (
    <MenuMobileWrapper className={toggle ? "active" : ""}>
      {dataNavigation.map((item, index) => (
        <ItemMenuMobile {...item} key={`menu-mobile-${index}`} />
      ))}
    </MenuMobileWrapper>
  );
};
export function Header(props: IHeaderProps) {
  const isMobile = useMedia(breakpoints.md);
  const isOpenSideBar = useSelector((state: any) => state.home.isOpenSidebar);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  const renderLoginBtn = useCallback(() => {
    return (
      isLoggedIn ?? (
        <Button
          customStyle={"height: 40px;"}
          onClick={() => {
            navigate("/login");
          }}
          type="blue"
          text="Login"
        />
      )
    );
  }, [isLoggedIn]);

  return (
    <HeaderWrapper className={isOpenSideBar ? "toggle" : ""}>
      <Main className="header">
        <Logo />
        {!isMobile ? (
          <>
            <Navigation>
              {dataNavigation.map((item, index) => {
                return <ItemNavigation key={`header-${index}`} {...item} />;
              })}
            </Navigation>
            {renderLoginBtn()}
          </>
        ) : (
          <Hamburger />
        )}
      </Main>
      {isMobile && <MenuMobile toggle={isOpenSideBar} />}
    </HeaderWrapper>
  );
}
