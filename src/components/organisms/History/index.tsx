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
import { useCallback, useEffect, useMemo, useState } from "react";
import { stakingServices, transactionServices } from "@Services/index";
import moment from "moment";
import { CommonFilter } from "@Types/common";
import { useDispatch } from "react-redux";
import { loading, unloading } from "@Redux/actions/loading";
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

interface ITransactionData {
  id: number;
  status: number;
  amount: number;
  to: string;
  currency: number;
  createdAt: string;
}

const convertStatus = (status: number): string => {
  switch (status) {
    case 0:
    case 3:
      return "failed";
    case 1:
      return "pending";
    case 2:
      return "success";
    default:
      return "failed";
  }
};

export function History(props: IHistoryProps) {
  const tabs = ["staking", "payout", "transactions"];
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalRow, setTotalRow] = useState<number>(0);
  const [stakingHistory, setStakingHistory] = useState<IStakingHistory[]>([]);
  const [payoutData, setPayoutData] = useState<DataPayout[]>([]);
  const [transactionData, setTransactionData] = useState<ITransactionData[]>(
    []
  );
  const headerStaking = ["ID", "package", "token", "date of registration"];
  const headerPayout = ["ID", "profit", "package", "time"];
  const headerTransactions = [
    "ID",
    "value",
    "Wallet Address",
    "status",
    "time",
  ];
  const renderData = useMemo(() => {
    if (!stakingHistory?.length) return [];
    return stakingHistory.map((item: IStakingHistory, index: number) => {
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
            {dateOfRegistration.format("MMM DD, YYYY")}
          </div>
        ),
      };
    });
  }, [stakingHistory]);

  const renderDataTransaction = useMemo(() => {
    if (!transactionData?.length) return [];
    return transactionData.map((item: ITransactionData, index: number) => {
      return {
        id: item.id,
        value: (
          <div className="value">
            {item.amount > 0 ? (
              <span style={{ color: "#53BA95" }}>{`+ ${
                item.currency === 1 ? "$" : "SOL"
              }${item.amount}`}</span>
            ) : (
              <span style={{ color: "#ff476a" }}>{`- ${
                item.currency === 1 ? "$" : "SOL"
              }${item.amount}`}</span>
            )}
          </div>
        ),
        walletAddress: (
          <div className="walletAddress">
            {item.to.slice(0, 6)}...{item.to.slice(-4)}
          </div>
        ),
        status: (
          <div className={`status ${convertStatus(item.status)}`}>
            {convertStatus(item.status)}
          </div>
        ),
        time: (
          <div className="time">
            {moment(item.createdAt).format("MMM DD, YYYY")}
          </div>
        ),
      };
    });
  }, [transactionData]);

  const renderDataPayout = useMemo(() => {
    if (!payoutData?.length) return [];
    return payoutData.map((item: DataPayout, index: number) => {
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
        time: (
          <div className="time">
            {moment(item.createdAt).format("MMM DD, YYYY")}
          </div>
        ),
      };
    });
  }, [payoutData]);

  useEffect(() => {
    if (currentTab === "staking") loadStakingHistory();
    if (currentTab === "payout") loadPayoutData();
    if (currentTab === "transactions") loadTransaction();
  }, [currentTab]);

  const loadStakingHistory = async (param?: CommonFilter) => {
    dispatch(loading());
    const { data, totalRow } = await stakingServices.getStakingHistory(param);
    setTotalRow(totalRow);
    setStakingHistory(data);
    dispatch(unloading());
  };
  const loadPayoutData = async (param?: CommonFilter) => {
    dispatch(loading());
    const { data, totalRow } = await stakingServices.getStakingPayout(param);

    setTotalRow(totalRow);
    setPayoutData(data);
    dispatch(unloading());
  };

  const loadTransaction = async (param?: CommonFilter) => {
    dispatch(loading());
    const { data, totalRow } = await transactionServices.getTransactions(param);
    setTotalRow(totalRow);
    setTransactionData(data);
    dispatch(unloading());
  };

  const handleChangePage = useCallback(
    async (page: number) => {
      if (currentTab === "staking") await loadStakingHistory({ page: page });
      if (currentTab === "payout") await loadPayoutData({ page: page });
      if (currentTab === "transactions") await loadTransaction({ page: page });
    },
    [currentTab]
  );
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
          <Table
            header={headerStaking}
            data={renderData}
            total={totalRow}
            onMovePage={handleChangePage}
          />
        </Box>
      )}
      {currentTab === "payout" && (
        <BoxPayout>
          <Table
            header={headerPayout}
            data={renderDataPayout}
            total={totalRow}
            onMovePage={handleChangePage}
          />
        </BoxPayout>
      )}
      {currentTab === "transactions" && (
        <BoxTransaction>
          <Table
            header={headerTransactions}
            data={renderDataTransaction}
            total={totalRow}
            onMovePage={handleChangePage}
          />
        </BoxTransaction>
      )}
    </HistoryWrapper>
  );
}
