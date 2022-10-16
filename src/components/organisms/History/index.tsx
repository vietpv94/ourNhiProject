import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import * as React from "react";
import {
  DataPayout,
  dataSortBy,
  dataSortTime,
  DataStaking,
  dataStaking,
  dataTransaction,
  DataTransaction
} from "./data";
import {
  Box,
  BoxPayout,
  BoxTransaction,
  HistoryWrapper,
  Title,
  Top
} from "./style";
import sol from "@Assets/images/molecules/card/sol-token.png";
import { useEffect, useState } from "react";
import { stakingServices } from "@Services/index";
import moment from "moment";
export interface IHistoryProps {}

interface IStakingHistory {
  id: number;
  startTime: number;
  endTime: number;
  claimRewardTime: number;
  stakeValue: number;
  status: number;
  packageId: number;
  packageDuration: number;
  packagePercentProfitPerMonth: number;
  packagePercentProfitPerDay: number;
  token: string;
}
const renderData = (data: IStakingHistory[]) => {
  return data.map((item: IStakingHistory, index: number) => {
    const dateOfRegistration = moment.unix(item.startTime || moment().unix());
    return {
      id: item.id,
      package: (
        <div className="package">${Number(item.stakeValue).toFixed(2)}</div>
      ),
      token: (
        <div className="token">
          <img src={sol} alt="sol" />
          <span>{item.token || "SOL"}</span>
        </div>
      ),
      dateOfRegistration: (
        <div className="dateOfRegistration">
          {dateOfRegistration.format("YYYY-MM-DD HH:mm")}
        </div>
      )
    };
  });
};

const renderDataPayout = (data: DataPayout[]) => {
  return data.map((item: DataPayout, index: number) => {
    return {
      id: item.id,
      profit: (
        <div className="profit">
          {item.value > 0 ? (
            <span style={{ color: "#53BA95" }}>+${item.value}</span>
          ) : (
            <span style={{ color: "#ff476a" }}>${item.value}</span>
          )}
        </div>
      ),
      package: <div className="package">${item.stakingValue}</div>,
      time: <div className="time">{item.createdAt}</div>
    };
  });
};

const renderDataTransaction = (data: DataTransaction[]) => {
  return data.map((item: DataTransaction, index: number) => {
    return {
      id: item.id,
      value: (
        <div className="value">
          {item.value > 0 ? (
            <span style={{ color: "#53BA95" }}>+{item.value}$</span>
          ) : (
            <span style={{ color: "#ff476a" }}>{item.value}$</span>
          )}
        </div>
      ),
      walletAddress: (
        <div className="walletAddress">
          {item.walletAddress.slice(0, 6)}...{item.walletAddress.slice(-4)}
        </div>
      ),
      status: <div className={`status ${item.status}`}>{item.status}</div>,
      time: <div className="time">{item.time}</div>
    };
  });
};
export function History(props: IHistoryProps) {
  const tabs = ["staking", "payout", "transactions"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [stakingHistory, setStakingHistory] = useState<IStakingHistory[]>([]);
  const [payoutData, setPayoutData] = useState<DataPayout[]>([]);
  const headerStaking = ["ID", "package", "token", "date of registration"];
  const headerPayout = ["ID", "profit", "package", "time"];
  const headerTransactions = [
    "ID",
    "value",
    "Wallet Address",
    "status",
    "time"
  ];

  useEffect(() => {
    loadStakingHistory();
    loadPayoutData();
  }, []);

  const loadStakingHistory = async () => {
    const { data } = await stakingServices.getStakingHistory();
    setStakingHistory(data);
  };
  const loadPayoutData = async () => {
    const { data } = await stakingServices.getStakingPayout();
    console.log(data);

    setPayoutData(data);
  };
  return (
    <HistoryWrapper>
      <Title>History</Title>
      <Top>
        <Tab
          parent="history"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
          <Dropdown label="time" data={dataSortTime} />
          <Dropdown label="sort by" data={dataSortBy} />
        </div>
      </Top>
      {currentTab === "staking" && (
        <Box>
          <Table header={headerStaking} data={renderData(stakingHistory)} />
        </Box>
      )}
      {currentTab === "payout" && (
        <BoxPayout>
          <Table header={headerPayout} data={renderDataPayout(payoutData)} />
        </BoxPayout>
      )}
      {currentTab === "transactions" && (
        <BoxTransaction>
          <Table
            header={headerTransactions}
            data={renderDataTransaction(dataTransaction)}
          />
        </BoxTransaction>
      )}
    </HistoryWrapper>
  );
}
