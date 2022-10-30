import successful from "@Assets/images/Gif/successful.gif";
import { ICardStakingData } from "@Components/molecules/CardStaking";
import { TimeStepper } from "@Components/molecules/TimeStepper";
import { stakingServices } from "@Services/index";
import currency from "currency.js";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { Content, Item, Logo, StakeSuccessfulWrapper, Title } from "./style";

interface ISuccessStakingPack {
  startTime: number;
  userId: number;
  endTime: number;
  claimRewardTime: number;
  stakeValue: number;
  packageId: number;
  type: 1;
  level: number;
  percentProfitPerDay: number;
  unstakeTime: number;
  harvestTime: number;
  id: number;
  reward: number;
  status: number;
  duration: number;
}

export interface IStakeSuccessfulProps {
  successStakingPack?: ISuccessStakingPack;
}

export function StakeSuccessful(props: IStakeSuccessfulProps) {
  const { successStakingPack } = props;
  const [solPrice, setSolPrice] = useState(0);

  const loadSOLPrice = async () => {
    const { data } = await stakingServices.getSolPrice();
    setSolPrice(data.solPrice);
  };

  useEffect(() => {
    loadSOLPrice();
  }, []);

  const dataStaking = useMemo(() => {
    const data = [
      {
        label: "Stake Date:",
        value: moment(Date.now()).format("YYYY-MM-DD HH:mm")
      },
      {
        label: "Value Date",
        value: moment(Date.now()).format("YYYY-MM-DD HH:mm")
      },
      {
        label: "Interest Distribution Date",
        value: moment(Date.now()).add(1, "days").format("YYYY-MM-DD HH:mm")
      }
    ];

    return data;
  }, [props.successStakingPack]);
  return (
    <StakeSuccessfulWrapper>
      <Logo src={successful} alt="successful" />
      <Title>Successful</Title>
      <Content>
        <Item>
          <span className="label">Subscription Package:</span>
          <span className="value">
            {
              currency(successStakingPack?.stakeValue || 0, {
                  symbol: "$",
                  precision: 2
                }).format()
            }
          </span>
        </Item>
        <Item>
          <span className="label">SOL Value:</span>
          <span className="value">
            {`${Number((successStakingPack?.stakeValue || 0) / solPrice).toFixed(2)} SOL `}
       
          </span>
        </Item>
        <Item>
          <span className="label">Duration (Month):</span>
          <span className="value">
            {Number(successStakingPack?.duration || 0) / (60 * 60 * 24 * 30)}
          </span>
        </Item>
      </Content>
      <TimeStepper
        data={dataStaking}
        interest={successStakingPack?.percentProfitPerDay}
      />
    </StakeSuccessfulWrapper>
  );
}
