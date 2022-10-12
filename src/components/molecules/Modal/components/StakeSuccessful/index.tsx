import successful from "@Assets/images/Gif/successful.gif";
import { ICardStakingData } from "@Components/molecules/CardStaking";
import { TimeStepper } from "@Components/molecules/TimeStepper";
import moment from "moment";
import { useMemo } from "react";
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

  const dataStaking = useMemo(() => {
    const startTime = moment.unix(
      successStakingPack?.startTime || moment().unix()
    );
    const endTime = moment.unix(successStakingPack?.endTime || moment().unix());
    const harvestTime = moment.unix(
      successStakingPack?.harvestTime || moment().unix()
    );
    return [
      {
        label: "Stake Date:",
        value: startTime.format("YYYY-MM-DD HH:mm")
      },
      {
        label: "Value Date",
        value: harvestTime.format("YYYY-MM-DD HH:mm")
      },
      {
        label: "Interest Distribution Date",
        value: endTime.format("YYYY-MM-DD HH:mm")
      }
    ];
  }, [props.successStakingPack]);
  return (
    <StakeSuccessfulWrapper>
      <Logo src={successful} alt="successful" />
      <Title>Successful</Title>
      <Content>
        <Item>
          <span className="label">Subscription Package:</span>
          <span className="value">
            ${Number(successStakingPack?.stakeValue).toFixed(3)}
          </span>
        </Item>
        <Item>
          <span className="label">Duration (Month):</span>
          <span className="value">{Number(successStakingPack?.duration || 0) / (60 * 60 * 24 * 30)}</span>
        </Item>
      </Content>
      <TimeStepper data={dataStaking} />
    </StakeSuccessfulWrapper>
  );
}
