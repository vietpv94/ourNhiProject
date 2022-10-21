import { CloseIcon } from "@Components/atoms/icon/close";
import { SMSIcon } from "@Components/atoms/icon/sms";
import { Header } from "@Components/molecules/Header";
import { INotification } from "@Components/molecules/Notification";
import { dataFake } from "@Components/molecules/Notification/datafake";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { BookIcon } from "@Components/atoms/icon/book";
import { DocumentIcon } from "@Components/atoms/icon/document";
import { MessageIcon } from "@Components/atoms/icon/message";
import { PresentIcon } from "@Components/atoms/icon/present";
import { TradeIcon } from "@Components/atoms/icon/tradeIcon";
import moment from "moment";
import * as React from "react";
import { Sidebar } from "./sidebar";
import {
  Content,
  DetailWrapper,
  Flex,
  Item,
  ItemTab,
  List,
  Main,
  NotificationDetail,
  Tabs,
  Top,
  Wrapper
} from "./style";
import { useMedia } from "react-use";
import { breakpoints } from "@Utils/theme";
import { notificationServices } from "@Services/index";
import { useEffect, useMemo, useState } from "react";

export interface INotificationProps {}
export interface DataSidebar {
  id: number;
  name: string;
  icon: (color: string) => JSX.Element;
  unread: number;
}

export function Notification(props: INotificationProps) {
  const [notificationData, setNotificationData] = useState<INotification[]>([]);
  const [unreadNoti, setUnreadNoti] = useState<number>(0);
  const [newsData, setNewsData] = useState<INotification[]>([]);
  const [unreadNotiNews, setUnreadNotiNews] = useState<number>(0);
  const [systemNotiData, setSystemNotiData] = useState<INotification[]>([]);
  const [unreadNotiSystem, setUnreadNotiSystem] = useState<number>(0);
  const [selectedSidebar, setSelectedSidebar] = React.useState(1);
  const [selectedNotify, setSelectedNotify] =
    React.useState<INotification | null>(null);
  const isMobile = useMedia(breakpoints.xs);
  const handleClickItem = (item: INotification) => {
    setSelectedNotify(item);
  };
  const getTimeAgo = (time: string) => {
    const timeAgo = moment(time).fromNow();
    return timeAgo;
  };
  const refDetail = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(refDetail, () => {
    setSelectedNotify(null);
  });

  const loadNotifications = async () => {
    const [allNoti, newsNoti, systemNoti] = await Promise.all([
      notificationServices.getNotifications(),
      notificationServices.getNotifications({ notifyResourceType: "news" }),
      notificationServices.getNotifications({ notifyResourceType: "system" })
    ]);
    setNotificationData(allNoti.data.notifications || []);
    setUnreadNoti(allNoti.data.unreadNoti || 0);
    setNewsData(newsNoti.data.notifications || []);
    setUnreadNotiNews(newsNoti.data.unreadNoti || 0);
    setSystemNotiData(systemNoti.data.notifications || []);
    setUnreadNotiSystem(systemNoti.data.unreadNoti || 0);
  };

  const dataSidebar = useMemo(() => {
    return [
      {
        id: 1,
        name: "All",
        icon: (color: string) => <DocumentIcon color={color} />,
        unread: unreadNoti
      },
      {
        id: 2,
        name: "Lido News",
        icon: (color: string) => <BookIcon color={color} />,
        unread: unreadNotiNews
      },
      {
        id: 3,
        name: "System Messages",
        icon: (color: string) => <MessageIcon color={color} />,
        unread: unreadNotiSystem
      }
    ];
  }, [notificationData, newsData, systemNotiData]);

  const notificationList = useMemo(() => {
    console.log(selectedSidebar);

    if (selectedSidebar === 2) {
      return newsData;
    }

    if (selectedSidebar === 3) {
      return systemNotiData;
    }
    return notificationData;
  }, [selectedSidebar, notificationData, newsData, systemNotiData]);

  const readAll = async () => {
    await notificationServices.readNotification({ type: 1 });
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <Flex>
          {isMobile ? null : (
            <Sidebar
              data={dataSidebar}
              selectedSidebar={selectedSidebar}
              setSelectedSidebar={setSelectedSidebar}
            />
          )}
          <Main>
            <Top>
              <div className="title">Notifications</div>
              <div className="read-all" onClick={readAll}>
                Read All
              </div>
            </Top>
            {isMobile && (
              <Tabs>
                {dataSidebar.map((item) => (
                  <ItemTab
                    className={selectedSidebar === item.id ? "active" : ""}
                  >{`${item.name}(${item.unread})`}</ItemTab>
                ))}
              </Tabs>
            )}

            <List>
              {notificationList.map((item) => (
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
          </Main>
        </Flex>
      </Wrapper>
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
    </>
  );
}
