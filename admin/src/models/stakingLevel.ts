export interface IStakingLevel {
  level?: number;
  value?: number;
  percentProfitPerDay?: number;
}
export interface IStakingLevelReturn {
  id: number;
  level: number;
  value: number;
  percentProfitPerDay: number;
  percentProfitPerMonth: number;
  minimumValue: number;
  maximumValue: number;
  poolLimit: number;
  duration: number;
  type: number;
  createdAt: string;
  updatedAt: string;
}
