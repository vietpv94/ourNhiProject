export interface IStakingPackage {
  duration: number;
  percentProfitPerMonth: number;
  percentProfitPerDay: number;
  maxProfit: number;
  poolMaxStakeValue: number;
  minValue?: number;
}

export interface IFullStakingPackage {
  id: number;
  duration: number;
  value: number;
  waitingHarvestDuration: number;
  percentProfitPerMonth: number;
  percentProfitPerDay: number;
  maxProfit: "number";
  poolMaxStakeValue: number;
  minValue: number;
  maxValue: number;
  currentStakeValue: number;
  buffCurrentStakeValue: number;
  createdAt: string;
  updatedAt: string;
}
