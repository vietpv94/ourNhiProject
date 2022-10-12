import logo from "@Assets/images/molecules/card/sol-token.png";
import {
  CardStaking,
  ICardStakingData,
} from "@Components/molecules/CardStaking";
import { Duration } from "@Components/molecules/Duration";
import { setModal } from "@Redux/actions/modal";
import { selectPack } from "@Redux/actions/staking";
import { stakingServices } from "@Services/index";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridWrapper, Header, Pool } from "./style";

export interface ILockedStakingProps {
  durations: number[];
}

export function LockedStaking(props: ILockedStakingProps) {
  const [selected, setSelected] = useState<number>(props.durations[0]);
  const [packs, setPacks] = useState<ICardStakingData[]>([]);
  const [poolStaked, setPoolStaked] = useState<{
    currentStakeValue: number;
    maxPoolValue: number;
  }>();
  const dispatch = useDispatch();

  const handleStakeNow = (pack: ICardStakingData) => {
    dispatch(
      setModal({ modal: "stake-confirm", data: { selectedPack: pack } })
    );
  };

  const loadPackByDuration = async (duration: number) => {
    const { data } = await stakingServices.getStakingPack(duration);
    setSelected(duration);
    setPacks(data?.packs || []);
    setPoolStaked({
      currentStakeValue: data?.currentStakeValue | 0,
      maxPoolValue: data?.maxPoolValue || 0,
    });
  };

  useEffect(() => {
    if (props.durations.length > 0) {
      loadPackByDuration(props.durations[0]);
    }
  }, [props.durations]);

  return (
    <>
      <Header>
        <Pool>
          <span className="label">Pool: </span>
          <span className="value">
            ${poolStaked?.currentStakeValue}/
            <span className="total">${poolStaked?.maxPoolValue}</span>
          </span>
        </Pool>
        <Duration
          type="month"
          list={props.durations}
          selected={selected}
          setSelected={loadPackByDuration}
        />
      </Header>
      <GridWrapper>
        <Grid>
          {packs.length &&
            packs.map((pack, index) => (
              <CardStaking
                onClick={handleStakeNow}
                data={pack}
                key={`grid-item-${index}`}
              />
            ))}
        </Grid>
      </GridWrapper>
    </>
  );
}
