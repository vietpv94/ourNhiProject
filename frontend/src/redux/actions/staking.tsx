import { ICardStakingData } from "@Components/molecules/CardStaking";
import { STAKING_PACK_ACTION } from "@Constants/redux-actions/staking";

export const selectPack = (payload: { selectedPack: ICardStakingData }) => ({
  type: STAKING_PACK_ACTION.SELECT_PACK,
  payload: payload
});
