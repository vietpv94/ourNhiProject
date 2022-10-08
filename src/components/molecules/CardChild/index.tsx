import { ArrowIcon } from "@Components/atoms/icon/arrow";
import * as React from "react";
import { CardChildWrapper, Header, Item, Main } from "./style";

export interface ICardChildProps {
  data: {
    id: number;
    name: string;
    list: string[];
  };
}

export function CardChild({ data }: ICardChildProps) {
  return (
    <CardChildWrapper>
      <Header>
        <span>{data.name}</span>
      </Header>
      <Main>
        {data.list.map((item, index) => (
          <Item key={`${item}-${index}`}>
            <span className="text">#{item}</span>
            <ArrowIcon direction="left" style="solid" />
          </Item>
        ))}
      </Main>
    </CardChildWrapper>
  );
}
