import mask from "@Assets/images/molecules/card/mask.png";
import { Button } from "@Components/atoms/Button";
import {
  Amount,
  CardStakingWrapper,
  Item,
  Line,
  Logo,
  Mask,
  Percent,
  TotalStaker,
} from "./style";
export interface ICardStakingData {
  logo: string;
  amount: number;
  dayPercent: number;
  monthPercent: number;
  totalStaked: number;
}
export interface ICardStakingProps {
  data: ICardStakingData;
  onClick?: () => void;
}

export function CardStaking({ data, onClick }: ICardStakingProps) {
  return (
    <CardStakingWrapper>
      <Mask className="left" src={mask} alt="mask" />
      <Mask className="right" src={mask} alt="mask" />
      <Logo src={data.logo} alt="logo" />
      <Amount>{data.amount}$</Amount>
      <Percent>
        <Item className="day">
          <div className="percent day">+{data.dayPercent}%</div>
          <div className="label">Day</div>
        </Item>
        <Item>
          <div className="percent month">+{data.monthPercent}%</div>
          <div className="label">Month</div>
        </Item>
      </Percent>
      <Button
        onClick={onClick}
        customStyle={
          "width: 100%; height: 32px; font-weight: 600;font-size: 10px; "
        }
        type="blue"
        text="Staking Now"
      />
      <Line />
      <TotalStaker>
        <span className="label">Total Staked: </span>
        <span className="value">{data.totalStaked} GFT</span>
      </TotalStaker>
    </CardStakingWrapper>
  );
}
