import service, { NonAuthService as nonAuthService } from "@Helpers/api";
import { handleError, handleResponse } from "@Helpers/util";
export interface INotificationRead {
  type: number;
  notifyIds?: number[];
}
const readNotification = async (param: INotificationRead) => {
  try {
    const { data } = await service.put("notification/read", param);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while requestWithdraw");
  }
};

const getNotifications = async (param?: {
  limit?: number;
  page?: number;
  notifyResourceType?: string;
}) => {
  try {
    const { data } = await service.get("notification", param);
    return handleResponse(data);
  } catch (error) {
    return handleError(error, "Error while getNotifications");
  }
};
export const notificationServices = {
  readNotification,
  getNotifications
};

export default notificationServices;
