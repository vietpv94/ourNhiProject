import { ICardStakingData } from "@Components/molecules/CardStaking";
import { Tab } from "@Components/molecules/Tab";
import { DeFi } from "@Components/organisms/DeFi";
import { LockedStaking } from "@Components/organisms/LockedStaking";
import { YourLockedStaking } from "@Components/organisms/YourLockedStaking";
import { stakingServices } from "@Services/index";
import { useEffect, useState } from "react";
import { YourStakingWrapper } from "./style";

export interface IYourStakingProps {}

export function YourStaking(props: IYourStakingProps) {
  const tabs = ["locked staking", "DeFi Staking"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <YourStakingWrapper>
      <Tab
        parent="defi-staking"
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === tabs[0] ? (
        <YourLockedStaking isLocked={true} />
      ) : (
        <YourLockedStaking isLocked={false} />
      )}
    </YourStakingWrapper>
  );
}
