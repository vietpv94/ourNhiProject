import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
import { CommonFilter } from "@Types/common";

const getStakingCounter = async () => {
  try {
    const { data } = await nonAuthService.get(`counter`);
    return handleResponse(data);
  } catch (err) {
    return handleError(err, "Error while get /api/v1/counter");
  }
};

export const counterServices = {
  getStakingCounter
};

export default counterServices;
