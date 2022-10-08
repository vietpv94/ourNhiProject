import { Tab } from "@Components/molecules/Tab";
import { LockedStaking } from "@Components/organisms/LockedStaking";
import * as React from "react";
import { DefiStakingWrapper } from "./style";

export interface IDefiStakingProps {}

export function DefiStaking(props: IDefiStakingProps) {
  const tabs = ["locked staking", "DeFi Staking"];
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);

  return (
    <DefiStakingWrapper>
      <Tab tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === tabs[0] && <LockedStaking />}
    </DefiStakingWrapper>
  );
}
