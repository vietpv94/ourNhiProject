import * as React from "react";
import {
  Card,
  Description,
  Flex,
  List,
  NetworksWrapper,
  Section,
  Title,
} from "./style";
import { dataSupportedNetworks, SupportedNetworkCard } from "./data";
import { Button } from "@Components/atoms/Button";
import { Beach } from "../Beach";
import { useNavigate } from "react-router-dom";

export interface INetworksProps {}

export const ItemNetwork = (data: SupportedNetworkCard) => {
  const navigate = useNavigate()
  return (
    <Card>
      <img src={data.icon} alt={data.name} />
      <h2 className="name">{data.name}</h2>
      <p className="description">{data.description}</p>
      <Flex>
        <div className="apr">
          <span>APR</span>
          <span>{data.apr}%</span>
        </div>
        <div className="staked">
          <span>Staked</span>
          <span>${data.staked}</span>
        </div>
      </Flex>
      <Flex>
        <Button type="silver" text="Learn more" />
        <Button type="blue" text="Stake now" onClick={() => {
          navigate("/stake");
        }}/>
      </Flex>
    </Card>
  );
};
export function Networks(props: INetworksProps) {
  return (
    <Section>
      <Beach />
      <NetworksWrapper>
        <Title>Supported Networks</Title>
        <Description>
          Lido lets you stake tokens from many networks. Choose a network below
          to get started.
        </Description>
        <List>
          {dataSupportedNetworks.map((item, index) => {
            return <ItemNetwork {...item} key={`network-${index}`} />;
          })}
        </List>
      </NetworksWrapper>
    </Section>
  );
}
