import * as React from "react";
import { Card, Description, List, Section, StakeWrapper, Title } from "./style";
import { DataStake, dataStake } from "./data";
import { Button } from "@Components/atoms/Button";
import { useNavigate } from "react-router-dom";

export interface IStakeProps {}

export const Item = (data: DataStake) => {
  const navigate = useNavigate();
  return (
    <Card>
      <img src={data.icon} alt="icon" />
      <p className="value">{data.apr}%</p>
      <p className="label">APR</p>

      <Button
        className="btn"
        type="blue"
        text="Stake now"
        disabled={data.disabled}
        onClick={() => {
          navigate("/stake");
        }}
      />
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
