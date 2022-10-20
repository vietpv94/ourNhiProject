import { ICardStakingData } from "@Components/molecules/CardStaking";
import { Tab } from "@Components/molecules/Tab";
import { DeFi } from "@Components/organisms/DeFi";
import { LockedStaking } from "@Components/organisms/LockedStaking";
import { stakingServices } from "@Services/index";
import { useEffect, useState } from "react";
import { DefiStakingWrapper } from "./style";

export interface IDefiStakingProps {}

export function DefiStaking(props: IDefiStakingProps) {
  const tabs = ["locked staking", "DeFi Staking"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    loadDuration();
    return () => {
      setDurations([]);
    };
  }, []);

  const loadDuration = async () => {
    const { data } = await stakingServices.getStakingDuration();
    const duration = data
      .map((item: { duration: number }) => {
        return item.duration;
      })
      .sort(function (a: number, b: number) {
        return a - b;
      });
    setDurations(duration);
  };

  return (
    <DefiStakingWrapper>
      <Tab
        parent="defi-staking"
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === tabs[0] ? (
        <LockedStaking durations={durations} />
      ) : (
        <DeFi durations={durations} />
      )}
    </DefiStakingWrapper>
  );
}
