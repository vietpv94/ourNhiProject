import { CloseIcon } from "@Components/atoms/icon/close";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { breakpoints } from "@Utils/theme";
import moment from "moment";
import * as React from "react";
import { useMedia } from "react-use";
import { INotification, Notification } from "../Notification";
import { Bell } from "./bell";
import { BadgeWrapper, NotificationDetail, Number } from "./style";

export interface IBadgeProps {
  num: number;
}

export function Badge({ num }: IBadgeProps) {
  const isMobile = useMedia(breakpoints.sm);
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
  return (
    <div ref={ref}>
      <BadgeWrapper onClick={() => setIsShow(!isShow)}>
        <Bell />
        <Number>
          <span>{num > 99 ? "9+" : num}</span>
        </Number>
      </BadgeWrapper>
      {isShow && (
        <Notification
          onClose={() => setIsShow(false)}
          setSelectedNotify={setSelectedNotify}
        />
      )}
      {selectedNotify !== null && (
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
            <div className="time">{getTimeAgo(selectedNotify.time)}</div>
            <div className="description">{selectedNotify.description}</div>
          </div>
        </NotificationDetail>
      )}
    </div>
  );
}
