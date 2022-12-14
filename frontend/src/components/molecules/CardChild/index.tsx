import { ArrowIcon } from "@Components/atoms/icon/arrow";
import * as React from "react";
import { CardChildWrapper, Header, Item, Main } from "./style";

export interface ICardChildProps {
  layer: number;
  activeChild: string;
  cardInfo: IChildInfo[];
  onClickItem?: (email: string, index: number) => void;
}

export interface IChildInfo {
  email: string;
  parentEmail: string;
  refCode: string;
  parentRefCode: string;
  child: [];
  depth: number;
}

export function CardChild({
  cardInfo,
  layer,
  activeChild,
  onClickItem
}: ICardChildProps) {
  return (
    <CardChildWrapper>
      <Header>
        <span> F {layer}</span>
      </Header>
      <Main>
        {cardInfo.map((item: IChildInfo, index) => (
          <Item
            key={`${item}-${index}`}
            className={`${activeChild === item.email ? "active" : ""}`}
            onClick={() => onClickItem && onClickItem(item.email, layer - 1)}
          >
            <span className="text">#{item.refCode}</span>
            {item.child.length > 0 && (
              <ArrowIcon direction="left" style="solid" />
            )}
          </Item>
        ))}
      </Main>
    </CardChildWrapper>
  );
}
