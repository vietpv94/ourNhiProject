import { CloseIcon } from "@Components/atoms/icon/close";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { notificationServices } from "@Services/index";
import { breakpoints } from "@Utils/theme";
import moment from "moment";
import * as React from "react";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import { INotification, Notification } from "../Notification";
import { Bell } from "./bell";
import {
  BadgeWrapper,
  DetailWrapper,
  NotificationDetail,
  Number
} from "./style";

export function Badge() {
  const isMobile = useMedia(breakpoints.sm);
  const [notificationData, setNotificationData] = useState<INotification[]>([]);
  const [unreadNoti, setUnreadNoti] = useState<number>(0);
  const [isShow, setIsShow] = React.useState(false);
  const ref = React.useRef(null);
  const refDetail = React.useRef(null);
  const [selectedNotify, setSelectedNotify] =
    React.useState<INotification | null>(null);
  useOnClickOutside(ref, () => setIsShow(false));
  useOnClickOutside(refDetail, () => setSelectedNotify(null));
  const getTimeAgo = (time: string) => {
    const timeAgo = moment(time).fromNow();
    return timeAgo;
  };
  const loadNotifications = async () => {
    const { data } = await notificationServices.getNotifications({ limit: 5 });
    setNotificationData(data.notifications || []);
    setUnreadNoti(data.unreadNoti);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <div ref={ref}>
      <BadgeWrapper onClick={() => setIsShow(!isShow)}>
        <Bell />
        {unreadNoti > 0 && (
          <Number>
            <span>{unreadNoti > 99 ? "9+" : unreadNoti}</span>
          </Number>
        )}
      </BadgeWrapper>
      {isShow && (
        <Notification
          onClose={() => setIsShow(false)}
          setSelectedNotify={setSelectedNotify}
          notificationData={{
            notifications: notificationData,
            unreadNoti: unreadNoti
          }}
        />
      )}
      {selectedNotify !== null && (
        <DetailWrapper>
          <NotificationDetail ref={refDetail}>
            <div className="svg">
              <CloseIcon
                type="outline"
                color="#00A3FF"
                onClick={() => {
                  setSelectedNotify(null);
                }}
              />
            </div>
            <div className="title">Notification Detail</div>
            <div className="content">
              <div className="title">{selectedNotify.title}</div>
              <div className="time">{getTimeAgo(selectedNotify.createdAt)}</div>
              <div className="description">{selectedNotify.content}</div>
            </div>
          </NotificationDetail>
        </DetailWrapper>
      )}
    </div>
  );
}
