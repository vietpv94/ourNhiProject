import logo from "@Assets/images/molecules/card/sol-token.png";
import {
  CardStaking,
  ICardStakingData,
} from "@Components/molecules/CardStaking";
import { Duration } from "@Components/molecules/Duration";
import { setModal } from "@Redux/actions/modal";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Grid, GridWrapper, Header, Pool } from "./style";

export interface ILockedStakingProps {}

const dataFake: ICardStakingData = {
  logo: logo,
  amount: 1000,
  dayPercent: 10,
  monthPercent: 20,
  totalStaked: 1000,
};

export function LockedStaking(props: ILockedStakingProps) {
  const list = [6, 12, 18, 24];
  const [selected, setSelected] = React.useState(list[2]);
  const dispatch = useDispatch();
  const handleStakeNow = () => {
    dispatch(setModal({ modal: "stake-confirm" }));
  };
  return (
    <>
      <Header>
        <Pool>
          <span className="label">Pool: </span>
          <span className="value">
            $1.000.000/<span className="total">$10.000.000</span>
          </span>
        </Pool>
        <Duration
          type="month"
          list={list}
          selected={selected}
          setSelected={setSelected}
        />
      </Header>
      <GridWrapper>
        <Grid>
          {Array(selected)
            .fill(0)
            .map((_, index) => (
              <CardStaking
                onClick={handleStakeNow}
                data={dataFake}
                key={index}
              />
            ))}
        </Grid>
      </GridWrapper>
    </>
  );
}
