import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";
export interface IStakingSessionFilter extends CommonFilter {
  packageId?: number;
}
const getStakingSession = async (filter?: IStakingSessionFilter) => {
  try {
    const { data } = await service.get("admin/staking-session", filter);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "get ListTransaction failed.");
  }
};

export const adminStakingSessionServices = {
  getStakingSession
};

export default adminStakingSessionServices;
