import successful from "@Assets/images/Gif/successful.gif";
import { ICardStakingData } from "@Components/molecules/CardStaking";
import { TimeStepper } from "@Components/molecules/TimeStepper";
import moment from "moment";
import { useMemo } from "react";
import { Content, Item, Logo, StakeSuccessfulWrapper, Title } from "./style";

interface IUnstakedPack {
  stakeValue: number;
  duration: number;
}

export interface IUnstakedSuccessfulProps {
  unstakedPack?: IUnstakedPack;
}

export function UnstackedSuccessful(props: IUnstakedSuccessfulProps) {
  const { unstakedPack } = props;

  return (
    <StakeSuccessfulWrapper>
      <Logo src={successful} alt="successful" />
      <Title>Successful</Title>
      <Content>
        <Item>
          <span className="label">Unsubscription Package:</span>
          <span className="value">
            ${Number(unstakedPack?.stakeValue).toFixed(3)}
          </span>
        </Item>
        <Item>
          <span className="label">Duration (Month):</span>
          <span className="value">
            {Number(unstakedPack?.duration || 0) / (60 * 60 * 24 * 30)}
          </span>
        </Item>
      </Content>
    </StakeSuccessfulWrapper>
  );
}
