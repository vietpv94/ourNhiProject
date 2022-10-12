import mask from "@Assets/images/molecules/card/mask.png";
import { Button } from "@Components/atoms/Button";
import logo from "@Assets/images/molecules/card/sol-token.png";
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
  id: number;
  duration: number;
  value: number;
  percentProfitPerMonth: number;
  percentProfitPerDay: number;
  maxProfit?: number;
  poolMaxStakeValue?: number;
  totalStaked: number;
}
export interface ICardStakingProps {
  data: ICardStakingData;
  onClick?: (pack: ICardStakingData) => void;
}

export function CardStaking({ data, onClick }: ICardStakingProps) {
  return (
    <CardStakingWrapper>
      <Mask className="left" src={mask} alt="mask" />
      <Mask className="right" src={mask} alt="mask" />
      <Logo src={logo} alt="logo" />
      <Amount>{Number(data.value)}$</Amount>
      <Percent>
        <Item className="day">
          <div className="percent day">
            +{Number(data.percentProfitPerDay).toFixed(2)}%
          </div>
          <div className="label">Day</div>
        </Item>
        <Item>
          <div className="percent month">
            +{Number(data.percentProfitPerMonth).toFixed(2)}%
          </div>
          <div className="label">Month</div>
        </Item>
      </Percent>
      <Button
        onClick={() => {
          onClick && onClick(data);
        }}
        customStyle={
          "width: 100%; height: 32px; font-weight: 600;font-size: 10px; "
        }
        type="blue"
        text="Staking Now"
      />
      <Line />
      <TotalStaker>
        <div className="item">
          <span className="label">Total Staked: </span>
          <span className="value">{data.totalStaked} GFT</span>
        </div>
        <div className="item">
          <span className="label">Locking period: </span>
          <span className="value"> Months</span>
        </div>
      </TotalStaker>
    </CardStakingWrapper>
  );
}
