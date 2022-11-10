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
import { sumBy } from "lodash";
import { useMemo } from "react";
import currency, { Any } from "currency.js";

export interface INetworksProps {
  data: {
    coinStake: string;
    totalStakingAssets: number;
    totalRewardPaid: number;
    stakers: number;
  }[];
}

export const ItemNetwork = (data: SupportedNetworkCard) => {
  const navigate = useNavigate();
  return (
    <Card>
      <img src={data.icon} alt={data.name} />
      <h2 className="name">{data.name}</h2>
      <p className="description">{data.description}</p>
      <Flex>
        <div className="apr">
          <span>Max APR</span>
          <span>{data.apr}%</span>
        </div>
        <div className="staked">
          <span>Staked</span>
          <span>{data.staked}</span>
        </div>
      </Flex>
      <Flex>
        <Button type="darkSilver" text="Learn more" />
        {data.poolLocked ? (
          <Button type="disabledBlue" text="Stake now" onClick={() => {}} />
        ) : (
          <Button
            type="blue"
            text="Stake now"
            onClick={() => {
              navigate("/stake");
            }}
          />
        )}
      </Flex>
    </Card>
  );
};
export function Networks({ data }: INetworksProps) {
  const beachData = useMemo(() => {
    const totalStaking = sumBy(data, (o) => o.totalStakingAssets);
    const totalReward = sumBy(data, (o) => o.totalRewardPaid);
    const totalStaker = sumBy(data, (o) => o.stakers);

    return [
      {
        title: "Total staking assets",
        value: currency(totalStaking, {
          symbol: "$",
          precision: 0,
        }).format(),
      },
      {
        title: "Total rewards paid",
        value: currency(totalReward, {
          symbol: "$",
          precision: 0,
        }).format(),
      },
      {
        title: "Stakers",
        value: currency(totalStaker, {
          symbol: " ",
          separator: ",",
          precision: 0,
        }).format(),
      },
    ];
  }, [data]);

  const networkData = useMemo(() => {
    return dataSupportedNetworks.map((network) => {
      const stakeCounterData = data?.find(
        (item) => network.symbol === item.coinStake
      );
      return {
        ...network,
        staked: currency(stakeCounterData?.totalStakingAssets as Any, {
          symbol: "$",
          precision: 0,
        }).format(),
      };
    });
  }, [data]);
  return (
    <Section>
      <Beach data={beachData} />
      <NetworksWrapper>
        <Title>Supported Networks</Title>
        <Description>
          Lido lets you stake tokens from many networks. Choose a network below
          to get started.
        </Description>
        <List>
          {networkData &&
            networkData.map((item, index) => {
              return <ItemNetwork {...item} key={`network-${index}`} />;
            })}
        </List>
      </NetworksWrapper>
    </Section>
  );
}
