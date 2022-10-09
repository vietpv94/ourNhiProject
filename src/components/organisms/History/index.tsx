import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import * as React from "react";
import {
  DataPayout,
  dataPayout,
  dataSortBy,
  dataSortTime,
  DataStaking,
  dataStaking,
  dataTransaction,
  DataTransaction,
} from "./data";
import {
  Box,
  BoxPayout,
  BoxTransaction,
  HistoryWrapper,
  Title,
  Top,
} from "./style";
import sol from "@Assets/images/molecules/card/sol-token.png";
export interface IHistoryProps {}

const renderData = (data: DataStaking[]) => {
  return data.map((item: DataStaking, index: number) => {
    return {
      id: item.id,
      package: <div className="package">${item.package}</div>,
      token: (
        <div className="token">
          <img src={sol} alt="sol" />
          <span>{item.token}</span>
        </div>
      ),
      dateOfRegistration: (
        <div className="dateOfRegistration">{item.dateOfRegistration}</div>
      ),
    };
  });
};

const renderDataPayout = (data: DataPayout[]) => {
  return data.map((item: DataPayout, index: number) => {
    return {
      id: item.id,
      profit: (
        <div className="profit">
          {item.profit > 0 ? (
            <span style={{ color: "#53BA95" }}>+{item.profit}$</span>
          ) : (
            <span style={{ color: "#ff476a" }}>{item.profit}$</span>
          )}
        </div>
      ),
      package: <div className="package">${item.package}</div>,
      time: <div className="time">{item.time}</div>,
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
      time: <div className="time">{item.time}</div>,
    };
  });
};
export function History(props: IHistoryProps) {
  const tabs = ["staking", "payout", "transactions"];
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);
  const headerStaking = ["ID", "package", "token", "date of registration"];
  const headerPayout = ["ID", "profit", "package", "time"];
  const headerTransactions = [
    "ID",
    "value",
    "Wallet Address",
    "status",
    "time",
  ];
  return (
    <HistoryWrapper>
      <Title>History</Title>
      <Top>
        <Tab
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
          <Table header={headerStaking} data={renderData(dataStaking)} />
        </Box>
      )}
      {currentTab === "payout" && (
        <BoxPayout>
          <Table header={headerPayout} data={renderDataPayout(dataPayout)} />
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
