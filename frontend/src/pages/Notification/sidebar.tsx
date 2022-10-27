import * as React from "react";
import { DataSidebar } from ".";
import { ItemSideBar, SidebarWrapper } from "./style";

export interface ISidebarProps {
  selectedSidebar: number;
  setSelectedSidebar: (selected: number) => void;
  data: DataSidebar[];
}

export function Sidebar({
  selectedSidebar,
  setSelectedSidebar,
  data,
}: ISidebarProps) {
  return (
    <SidebarWrapper>
      {data.map((item) => {
        return (
          <ItemSideBar
            onClick={() => {
              setSelectedSidebar(item.id);
            }}
            className={selectedSidebar === item.id ? "active" : ""}
          >
            <div className="icon">
              {item.icon(selectedSidebar === item.id ? "#00A3FF" : "#B3B3B3")}
            </div>
            <div className="content">
              <div className="name">{item.name}</div>
              {item.unread > 0 && <div className="unread">{item.unread}</div>}
            </div>
          </ItemSideBar>
        );
      })}
    </SidebarWrapper>
  );
}
