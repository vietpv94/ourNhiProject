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
  TotalStaker
} from "./style";
import { useMemo } from "react";
import moment from "moment";
import currency from "currency.js";
export interface ICardStakingData {
  id?: number;
  duration: number;
  value: number;
  percentProfitPerMonth: number;
  percentProfitPerDay: number;
  maxProfit?: number;
  poolMaxStakeValue?: number;
  currentStakeValue: number;
  currency?: number;
}

export interface IYourStakingCardData {
  id: number;
  startTime: number;
  endTime: number;
  claimRewardTime: number;
  stakeValue: number;
  status: number;
  packageId: number;
  packageDuration: number;
  packagePercentProfitPerMonth: number;
  packagePercentProfitPerDay: number;
}

export interface IYourStakingCardProps {
  data: IYourStakingCardData;
  onClick?: (pack: IYourStakingCardData) => void;
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
      <Amount>
        {currency(data.value, {
          symbol: "$",
          precision: 0
        }).format()}
      </Amount>
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
          <span className="value">
            {currency(data.currentStakeValue || 0, {
              symbol: "$",
              precision: 0
            }).format()}
          </span>
        </div>
        <div className="item">
          <span className="label">Locking period: </span>
          <span className="value">
            {Number(data?.duration || 0) / (60 * 60 * 24 * 30)} Months
          </span>
        </div>
      </TotalStaker>
    </CardStakingWrapper>
  );
}

export function YourStakingCard({ data, onClick }: IYourStakingCardProps) {
  const stakedData = useMemo(() => {
    const startTime = moment.unix(data?.startTime || moment().unix());
    const endTime = moment.unix(data?.endTime);

    const isAllowUnstake = endTime.isBefore(moment.now());

    return {
      ...data,
      isAllowUnstake,
      startTime: startTime.format("YYYY-MM-DD HH:mm")
    };
  }, [data]);
  return (
    <CardStakingWrapper>
      <Mask className="left" src={mask} alt="mask" />
      <Mask className="right" src={mask} alt="mask" />
      <Logo src={logo} alt="logo" />
      <Amount>
        {currency(stakedData.stakeValue, {
          symbol: "$",
          precision: 0
        }).format()}
      </Amount>
      <Percent>
        <Item className="day">
          <div className="percent day">
            +{Number(stakedData.packagePercentProfitPerDay).toFixed(2)}%
          </div>
          <div className="label">Day</div>
        </Item>
        <Item>
          <div className="percent month">
            +{Number(stakedData.packagePercentProfitPerMonth).toFixed(2)}%
          </div>
          <div className="label">Month</div>
        </Item>
      </Percent>
      <Button
        onClick={() => {
          onClick && stakedData.isAllowUnstake && onClick(data);
        }}
        customStyle={
          "width: 100%; height: 32px; font-weight: 600;font-size: 10px; "
        }
        disabled
        type={stakedData.isAllowUnstake ? "blue" : "disabledBlue"}
        text="Unstake"
      />
      <Line />
      <TotalStaker>
        <div className="item">
          <span className="label">Stake Date: </span>
          <span className="value">{stakedData.startTime}</span>
        </div>
        <div className="item">
          <span className="label">Locking period: </span>
          <span className="value">
            {Number(stakedData?.packageDuration || 0) / (60 * 60 * 24 * 30)}{" "}
            Months
          </span>
        </div>
      </TotalStaker>
    </CardStakingWrapper>
  );
}
