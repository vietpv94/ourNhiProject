import React, { useRef } from "react";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { Badge } from "@Components/molecules/Badge";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import { TokenSelector } from "@Components/molecules/TokenSelector";
import { breakpoints } from "@Utils/theme";
import { useMedia } from "react-use";
import { WalletSelector } from "../style";
import { dataSideBar } from "./data";
import { LineSvg } from "./line";
import {
  ChildItem,
  ChildMenu,
  Item,
  Main,
  SideBarHeader,
  SideBarWrapper,
} from "./style";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { openSideBar } from "@Redux/actions/home";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@Components/atoms/Button";

export interface ISideBarProps {}

export function SideBar(props: ISideBarProps) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const [isLogin, setIsLogin] = React.useState(false);
  const [activeChild, setActiveChild] = React.useState([dataSideBar[0].name]);
  const navigate = useNavigate();
  const handleActiveChild = (name: string, link: string) => {
    navigate(link);
    if (isMobile) {
      dispatch(openSideBar(false));
    }
    if (activeChild.includes(name)) {
      setActiveChild(activeChild.filter((item) => item !== name));
    } else {
      setActiveChild([...activeChild, name]);
    }
  };
  const isMobile = useMedia(breakpoints.sm);
  useOnClickOutside(ref, () => {
    if (isMobile) {
      dispatch(openSideBar(false));
    }
  });
  const isOpenSidebar = useSelector((state: any) => state.home.isOpenSidebar);
  return (
    <SideBarWrapper
      ref={ref}
      className={isOpenSidebar && isMobile ? "active" : ""}
    >
      {isMobile && (
        <SideBarHeader>
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
        </SideBarHeader>
      )}
      <Main>
        {dataSideBar.map((item, index) => (
          <React.Fragment key={`sidebar-${index}`}>
            <Item
              className={pathname.includes(item.link) ? "active" : ""}
              onClick={() => handleActiveChild(item.name, item.link)}
            >
              {item.icon}
              <div className="right">
                <span className="name">{item.name}</span>
                {item.children && (
                  <ArrowIcon
                    direction={activeChild.includes(item.name) ? "up" : "down"}
                    style="outline"
                  />
                )}
              </div>
            </Item>
            <ChildMenu>
              {item.children &&
                activeChild.includes(item.name) &&
                item.children.map((item, index) => (
                  <ChildItem
                    key={`sidebar-child-${index}`}
                    className={pathname.includes(item.link) ? "active" : ""}
                    onClick={() => handleActiveChild(item.name, item.link)}
                  >
                    <LineSvg />
                    <span className="name">{item.name}</span>
                  </ChildItem>
                ))}
            </ChildMenu>
          </React.Fragment>
        ))}
      </Main>
      <div
        style={{
          padding: "20px",
        }}
      >
        <TokenSelector />
      </div>
    </SideBarWrapper>
  );
}
