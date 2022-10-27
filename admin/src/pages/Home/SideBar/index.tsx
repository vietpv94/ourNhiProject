import React, { useRef } from "react";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { dataSideBar } from "./data";
import { LineSvg } from "./line";
import { ChildItem, ChildMenu, Item, Main, SideBarWrapper } from "./style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export interface ISideBarProps {}

export function SideBar(props: ISideBarProps) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const [activeChild, setActiveChild] = React.useState([dataSideBar[0].name]);
  const navigate = useNavigate();
  const handleActiveChild = (name: string, link: string) => {
    navigate(link);
    if (activeChild.includes(name)) {
      setActiveChild(activeChild.filter((item) => item !== name));
    } else {
      setActiveChild([...activeChild, name]);
    }
  };

  const isOpenSidebar = useSelector((state: any) => state.home.isOpenSidebar);
  return (
    <SideBarWrapper ref={ref} className={isOpenSidebar ? "active" : ""}>
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
              </div>
            </Item>
          </React.Fragment>
        ))}
      </Main>
      <div
        style={{
          padding: "20px"
        }}
      ></div>
    </SideBarWrapper>
  );
}
