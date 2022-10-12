import { ICardStakingData } from "@Components/molecules/CardStaking";
import { STAKING_PACK_ACTION } from "@Constants/redux-actions/staking";

interface ISelectedPackState {
  selectedPack?: ICardStakingData;
}

const initialState: ISelectedPackState = {
  selectedPack: undefined
};

export const stakingReducer = (
  state = initialState,
  action: { type: string; payload: ISelectedPackState }
) => {
  switch (action.type) {
    case STAKING_PACK_ACTION.SELECT_PACK:
      return action.payload;
    default:
      return state;
  }
};
