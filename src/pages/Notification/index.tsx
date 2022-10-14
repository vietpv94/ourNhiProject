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
  Wrapper,
} from "./style";
import { useMedia } from "react-use";
import { breakpoints } from "@Utils/theme";

export interface INotificationProps {}
export interface DataSidebar {
  id: number;
  name: string;
  icon: (color: string) => JSX.Element;
  unread: number;
}
const dataSidebar: DataSidebar[] = [
  {
    id: 1,
    name: "All",
    icon: (color: string) => <DocumentIcon color={color} />,
    unread: 10,
  },
  {
    id: 2,
    name: "activities",
    icon: (color: string) => <PresentIcon color={color} />,
    unread: 0,
  },
  {
    id: 3,
    name: "Trade Notification",
    icon: (color: string) => <TradeIcon color={color} />,
    unread: 3,
  },
  {
    id: 4,
    name: "Lido News",
    icon: (color: string) => <BookIcon color={color} />,
    unread: 4,
  },
  {
    id: 5,
    name: "System Messages",
    icon: (color: string) => <MessageIcon color={color} />,
    unread: 3,
  },
];

export function Notification(props: INotificationProps) {
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
              <div className="read-all">Read All</div>
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
              {dataFake.map((item) => (
                <Item key={item.id} onClick={() => handleClickItem(item)}>
                  <div className="icon">
                    <SMSIcon type={item.type === "read" ? "read" : "unread"} />
                  </div>
                  <Content>
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                    <div className="time">{getTimeAgo(item.time)}</div>
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
              <div className="time">{getTimeAgo(selectedNotify.time)}</div>
              <div className="description">{selectedNotify.description}</div>
            </div>
          </NotificationDetail>
        </DetailWrapper>
      )}
    </>
  );
}
