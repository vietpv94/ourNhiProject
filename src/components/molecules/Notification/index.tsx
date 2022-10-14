import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { SMSIcon } from "@Components/atoms/icon/sms";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import moment from "moment";
import * as React from "react";
import { dataFake } from "./datafake";
import { Content, Header, Item, List, Wrapper } from "./style";

export interface INotificationProps {
  onClose: () => void;
  setSelectedNotify: (notify: INotification) => void;
}

export interface INotification {
  id: number;
  title: string;
  description: string;
  type: "read" | "unread";
  time: string;
}
export function Notification({
  onClose,
  setSelectedNotify,
}: INotificationProps) {
  const getTimeAgo = (time: string) => {
    const timeAgo = moment(time).fromNow();
    return timeAgo;
  };

  const handleClickItem = (item: INotification) => {
    setSelectedNotify(item);
    onClose();
  };

  return (
    <>
      <Wrapper>
        <Header>
          <div className="total">
            <span className="num">3 </span> pending notifications
          </div>
          <div className="view-all">
            View all
            <ArrowIcon color="#4A65EF" direction="left" />
          </div>
        </Header>
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
      </Wrapper>
    </>
  );
}
