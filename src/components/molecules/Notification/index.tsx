import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { SMSIcon } from "@Components/atoms/icon/sms";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { notificationServices } from "@Services/index";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { dataFake } from "./datafake";
import { Content, Header, Item, List, Wrapper } from "./style";

export interface INotificationProps {
  onClose: () => void;
  setSelectedNotify: (notify: INotification) => void;
  notificationData: {
    notifications: INotification[];
    unreadNoti: number;
  };
}

export interface INotification {
  id: number;
  title: string;
  content: string;
  isRead: boolean;
  notifyType?: string;
  metaData?: any;
  createdAt: string;
}
export function Notification({
  onClose,
  setSelectedNotify,
  notificationData
}: INotificationProps) {
  const navigate = useNavigate();

  const getTimeAgo = (time: string) => {
    const timeAgo = moment(time).fromNow();
    return timeAgo;
  };

  const handleClickItem = async (item: INotification) => {
    if (!item.isRead) {
      await readNotification(item.id);
    }
    setSelectedNotify(item);
    onClose();
  };

  const readNotification = async (id: number) => {
    await notificationServices.readNotification({
      type: 1,
      notifyIds: [id]
    });
  };

  return (
    <>
      <Wrapper>
        <Header>
          <div className="total">
            <span className="num">{notificationData.unreadNoti} </span> pending
            notifications
          </div>
          <div
            className="view-all"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            View all
            <ArrowIcon color="#4A65EF" direction="left" />
          </div>
        </Header>
        <List>
          {notificationData &&
            notificationData.notifications.map((item) => (
              <Item key={item.id} onClick={() => handleClickItem(item)}>
                <div className="icon">
                  <SMSIcon type={item.isRead ? "read" : "unread"} />
                </div>
                <Content>
                  <div className="title">{item.title}</div>
                  <div className="description">{item.content}</div>
                  <div className="time">{getTimeAgo(item.createdAt)}</div>
                </Content>
              </Item>
            ))}
        </List>
      </Wrapper>
    </>
  );
}
