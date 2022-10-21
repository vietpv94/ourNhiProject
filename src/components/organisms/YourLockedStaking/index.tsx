import logo from "@Assets/images/molecules/card/sol-token.png";
import {
  YourStakingCard,
  IYourStakingCardData
} from "@Components/molecules/CardStaking";
import { Duration } from "@Components/molecules/Duration";
import { setModal } from "@Redux/actions/modal";
import { stakingServices } from "@Services/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridWrapper } from "./style";

export interface IYourLockedStakingProps {
  isLocked: boolean;
}

export function YourLockedStaking(props: IYourLockedStakingProps) {
  const [packs, setPacks] = useState<IYourStakingCardData[]>([]);

  const dispatch = useDispatch();

  const handleUnStakeNow = (pack: IYourStakingCardData) => {
    dispatch(
      setModal({ modal: "unstake-confirm", data: { selectedPack: pack } })
    );
  };

  const loadPackByDuration = async (isLocked: boolean) => {
    const { data } = await stakingServices.getStakingHistory({
      status: isLocked ? 1 : 2
    });

    setPacks(data || []);
  };

  useEffect(() => {
    loadPackByDuration(props.isLocked);
  }, [props.isLocked]);

  return (
    <>
      <GridWrapper>
        <Grid>
          {packs.length ?
            packs.map((pack, index) => (
              <YourStakingCard
                onClick={handleUnStakeNow}
                data={pack}
                key={`grid-item-${index}`}
              />
            )) : null}
        </Grid>
      </GridWrapper>
    </>
  );
}
