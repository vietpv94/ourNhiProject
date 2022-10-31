import { Button } from "@Components/atoms/Button";
import { TwitterIcon } from "@Components/atoms/JoinCommunity/icon/twitter";
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
  ItemWrapper,
  Main,
  MenuMobileWrapper,
  MobileType3,
  MobileWrapper,
  Navigation,
  Type3,
} from "./style";
import { TwitterLogo } from "./twtter";

export interface IHeaderProps {}

export const ItemNavigation = (data: DataItemNav) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);
  return (
    <ItemNav ref={ref}>
      <span>{data.name}</span>
      {data.type !== 3 ? (
        <Dropdown style={{ display: `${isHover ? "grid" : "none"}` }}>
          {data.children?.map((item, index) => (
            <ItemWrapper
              type={item?.type}
              key={`menu-${index}`}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            >
              <img src={item.icon} alt="" className="icon" />
              <div>
                <span className="title">{item.name}</span>
                <span className="description">{item.description}</span>
              </div>
            </ItemWrapper>
          ))}
        </Dropdown>
      ) : (
        <Type3 style={{ display: `${isHover ? "flex" : "none"}` }}>
          {data?.children && (
            <>
              <div className="main">
                <img
                  src={data?.children && data?.children[0].icon}
                  alt=""
                  className="icon"
                />
                <div>
                  <span className="title">{data?.children[0].name}</span>
                  <span className="description">
                    {data?.children[0].description}
                  </span>
                </div>
              </div>
              <div className="list">
                {data?.children &&
                  data?.children?.map((item, index) => {
                    if (index === 0) return null;
                    return (
                      <div
                        className="item"
                        key={`menu-type3-${index}`}
                        onClick={() => {
                          window.open(item.link, "_blank");
                        }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </Type3>
      )}
    </ItemNav>
  );
};

export const ItemMenuMobile = (data: DataItemNav) => {
  return (
    <div className="item">
      <span className="name">{data.name}</span>
      {data.type !== 3 ? (
        <MobileWrapper
          style={data.name !== "networks" ? { gridTemplateColumns: "1fr" } : {}}
        >
          {data.children?.map((item, index) => (
            <ItemWrapper
              type={item?.type}
              key={`menu-${index}`}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            >
              <img src={item.icon} alt="" className="icon" />
              <div>
                <span
                  className="title"
                  style={{
                    color: "rgb(39, 56, 82)",
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    color: "rgb(122, 138, 160)",
                  }}
                  className="description"
                >
                  {item.description}
                </span>
              </div>
            </ItemWrapper>
          ))}
        </MobileWrapper>
      ) : (
        <MobileType3>
          {data?.children && (
            <>
              <div className="main">
                <img
                  src={data?.children && data?.children[0].icon}
                  alt=""
                  className="icon"
                />
                <div>
                  <span className="title">{data?.children[0].name}</span>
                  <span className="description">
                    {data?.children[0].description}
                  </span>
                </div>
              </div>
              <div className="list">
                {data?.children &&
                  data?.children?.map((item, index) => {
                    if (index === 0) return null;
                    return (
                      <div
                        className="item"
                        key={`menu-type3-${index}`}
                        onClick={() => {
                          window.open(item.link, "_blank");
                        }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </MobileType3>
      )}
    </div>
  );
};
export const MenuMobile = ({ toggle }: { toggle: boolean }) => {
  return (
    <>
      <MenuMobileWrapper className={toggle ? "active" : ""}>
        <Button
          type="blue"
          customStyle="padding: 10px 15px;
border-radius: 10px; width: 100%;"
        >
          <TwitterLogo />
          <span
            style={{
              marginLeft: "10px",
            }}
          >
            Join Twitter
          </span>
        </Button>{" "}
        {dataNavigation.map((item, index) => (
          <ItemMenuMobile {...item} key={`menu-mobile-${index}`} />
        ))}
      </MenuMobileWrapper>
    </>
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

  function reloadPage() {
    window.location.reload();
  }

  return (
    <HeaderWrapper className={isOpenSideBar ? "toggle" : ""}>
      <Main className="header">
        <Logo onClick={reloadPage} />
        {!isMobile ? (
          <>
            <Navigation>
              {dataNavigation.map((item, index) => {
                return <ItemNavigation key={`header-${index}`} {...item} />;
              })}
            </Navigation>
            <Button
              type="blue"
              customStyle="padding: 10px 15px;
    border-radius: 10px;"
            >
              <TwitterLogo />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                Join Twitter
              </span>
            </Button>
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
