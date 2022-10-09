import * as React from "react";
import { Card, Description, List, Section, StakeWrapper, Title } from "./style";
import { DataStake, dataStake } from "./data";
import { Button } from "@Components/atoms/Button";

export interface IStakeProps {}

export const Item = (data: DataStake) => {
  return (
    <Card>
      <img src={data.icon} alt="icon" />
      <p className="value">{data.apr}%</p>
      <p className="label">APR</p>
      <Button className="btn" type="blue" text="Stake now" />
    </Card>
  );
};
export function Stake(props: IStakeProps) {
  return (
    <Section>
      <StakeWrapper>
        <Title>Stake with Lido</Title>
        <Description>
          Lido provides liquid staking for the following networks:
        </Description>
        <List>
          {dataStake.map((item, index) => {
            return <Item key={`stake-${index}`} {...item} />;
          })}
        </List>
      </StakeWrapper>
    </Section>
  );
}
