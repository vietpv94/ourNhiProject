import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { TokenSelector } from "@Components/molecules/TokenSelector";
import * as React from "react";
import { dataSideBar } from "./data";
import { LineSvg } from "./line";
import { ChildItem, ChildMenu, Item, Main, SideBarWrapper } from "./style";

export interface ISideBarProps {}

export function SideBar(props: ISideBarProps) {
  const [activeChild, setActiveChild] = React.useState([dataSideBar[0].name]);
  const handleActiveChild = (name: string) => {
    if (activeChild.includes(name)) {
      setActiveChild(activeChild.filter((item) => item !== name));
    } else {
      setActiveChild([...activeChild, name]);
    }
  };
  return (
    <SideBarWrapper>
      <Main>
        {dataSideBar.map((item, index) => (
          <React.Fragment key={`sidebar-${index}`}>
            <Item onClick={() => handleActiveChild(item.name)}>
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
                  <ChildItem key={`sidebar-child-${index}`}>
                    <LineSvg />
                    <span className="name">{item.name}</span>
                  </ChildItem>
                ))}
            </ChildMenu>
          </React.Fragment>
        ))}
      </Main>
      <TokenSelector />
    </SideBarWrapper>
  );
}
