import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";

const getLevelCondition = async () => {
  try {
    const { data } = await service.get("level-condition");
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while getting level-condition");
  }
};

export const levelServices = {
  getLevelCondition
};

export default levelServices;
