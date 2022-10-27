import { Item, TabWrapper, Underline } from "./style";

export interface ITabProps {
  tabs: string[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  parent: string;
}

export function Tab({ tabs, currentTab, setCurrentTab, parent }: ITabProps) {
  return (
    <TabWrapper>
      {tabs.map((tab, index) => (
        <Item
          key={`tab-${index}`}
          onClick={() => setCurrentTab(tab)}
          className={currentTab === tab ? "active" : ""}
        >
          {tab}
          {tab === currentTab && <Underline layoutId={`${parent}-underline`} />}
        </Item>
      ))}
    </TabWrapper>
  );
}
