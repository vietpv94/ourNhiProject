import { DollarIcon } from "@Components/atoms/icon/dollar";
import { MemberIcon } from "@Components/atoms/icon/member";
import { ProfileTickIcon } from "@Components/atoms/icon/profileTick";
import { RankingIcon } from "@Components/atoms/icon/ranking";
import { Dropdown } from "@Components/molecules/Dropdown";
import { DataSummary, Summary } from "@Components/molecules/Summary";
import { Table } from "@Components/molecules/Table";
import * as React from "react";
import { dataRewardHistory, DataRewardHistory } from "./dataTable";
import {
  BinaryMLMWrapper,
  Board,
  BoxHistory,
  Header,
  RewardHistory,
  Wrapper,
} from "./style";
import sol from "@Assets/images/molecules/card/sol-token.png";
import { BinaryMLM } from "@Components/molecules/BinaryMLM";

export interface IAffiliateProps {}

export const dataCard: DataSummary[] = [
  {
    id: 1,
    title: "total members",
    value: "5,432",
    percent: 16,
    icon: <MemberIcon />,
  },
  {
    id: 2,
    title: "total profit",
    value: "1,893",
    percent: -1,
    icon: <DollarIcon />,
  },
  {
    id: 3,
    title: "Daily profits",
    value: "$18",
    icon: <RankingIcon />,
  },
];

const dataSortBy = {
  label: "Sort by",
  data: [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Latest",
    },
    {
      id: 3,
      name: "Oldest",
    },
    {
      id: 4,
      name: "Highest",
    },
  ],
};

const renderDataRewardHistory = (data: DataRewardHistory[]) => {
  return data.map((item: DataRewardHistory, index: number) => {
    return {
      id: `#${item.id + 1}`,
      balanceProfit: <div className="balanceProfit">${item.balanceProfit}</div>,
      token: (
        <div className="token">
          <img src={sol} alt="sol" />
          <span>{item.token || "SOL"}</span>
        </div>
      ),
      time: <div className="time">{item.time}</div>,
    };
  });
};

const dataTable = {
  header: ["ID", "Balance Profit", "Token", "time"],
  data: renderDataRewardHistory(dataRewardHistory),
};

export function Affiliate(props: IAffiliateProps) {
  return (
    <Wrapper>
      <Header>
        {dataCard.map((item, index) => (
          <Summary data={item} key={`summary-item-affiliate=${index}`} />
        ))}
      </Header>
      <BinaryMLMWrapper>
        <div className="title">Binary MLM</div>
        <Board>
          <BinaryMLM />
        </Board>
      </BinaryMLMWrapper>
      <RewardHistory>
        <div className="header">
          <div className="title">Reward History</div>
          <div className="filter">
            <Dropdown {...dataSortBy} />
          </div>
        </div>
        <BoxHistory>
          <Table {...dataTable} />
        </BoxHistory>
      </RewardHistory>
    </Wrapper>
  );
}
