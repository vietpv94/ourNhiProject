import useHover from "@Hooks/useHover";
import React, { useRef } from "react";
import { data, DataJoinCommunity } from "./data";
import {
  Card,
  Description,
  JoinCommunityWrapper,
  List,
  Section,
  Title,
} from "./style";

export interface IJoinCommunityProps {}

const Item = (data: DataJoinCommunity) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);
  return (
    <Card ref={ref} isHover={isHover} color={data.color}>
      {data.icon(isHover)}
      <div className="content">
        <div className="title">{data.title}</div>
        <div className="description">{data.description}</div>
      </div>
    </Card>
  );
};
export function JoinCommunity(props: IJoinCommunityProps) {
  return (
    <Section>
      <JoinCommunityWrapper>
        <Title>Join our community</Title>
        <Description>
          Learn more about Lido, chat with us and have your say in the future of
          the Lido ecosystem
        </Description>
        <List>
          {data.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </List>
      </JoinCommunityWrapper>
    </Section>
  );
}
