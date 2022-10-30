import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import { dataSortBy, dataSortTime } from "./data";
import {
  AdminWrapper,
  Box,
  BoxPayout,
  BoxUsers,
  Logo,
  Title,
  Top
} from "./style";
import { useEffect, useMemo, useState } from "react";
import sol from "@Assets/images/molecules/card/sol-token.png";
import tether from "@Assets/images/tether.png";
import moment from "moment";
import userServices from "@Services/user";
import { CommonFilter } from "@Types/common";
import adminTransactionServices from "@Services/adminTransaction";
import adminStakingSessionServices, {
  IStakingSessionFilter
} from "@Services/adminStakingSession";
export interface IHistoryProps {}

interface IStakingSession {
  id: number;
  userId: number;
  userEmail: string;
  packageId: number;
  stakeValue: number;
  status: number;
  type: number;
  startTime: number;
  endTime: number;
  level: number;
  currency: number;
  percentProfitPerDay: number;
  percentProfitPerMonth: number;
  rawValue: number;
  createdAt: string;
}

const convertStatus = (status: number): string => {
  switch (status) {
    case 3:
      return "rejected";
    case 1:
      return "pending";
    case 2:
      return "success";
    case 4:
      return "failed";
    default:
      return "failed";
  }
};

export function StakingSessionManagement(props: IHistoryProps) {
  const tabs = ["Staking Session Management"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalStakingSession, setTotalStakingSession] = useState<number>(0);
  const [listStakingSession, setListStakingSession] = useState<
    IStakingSession[]
  >([]);
  const headerUsers = [
    "ID",
    "Email",
    "Giá Trị Gửi",
    "Trạng Thái",
    "Coin Gửi",
    "Ngày Gửi",
    "Thời gian kết thúc"
  ];

  useEffect(() => {
    loadTransaction();
  }, []);

  const loadTransaction = async (param?: IStakingSessionFilter) => {
    const { data, totalRow } =
      await adminStakingSessionServices.getStakingSession(param);
    console.log(data);

    setListStakingSession(data);
    setTotalStakingSession(totalRow);
  };

  const renderDataStakingSession = useMemo(() => {
    if (!listStakingSession?.length) return [];
    return listStakingSession.map((item: IStakingSession, index: number) => {
      return {
        id: item.id,
        email: <div className="walletAddress">{item.userEmail}</div>,
        stakeValue: item.stakeValue,
        status: (
          <div className={`status ${convertStatus(item.status)}`}>
            {convertStatus(item.status)}
          </div>
        ),
        coin:
          item.currency === 1 ? (
            <Logo src={tether} alt="tether" />
          ) : (
            <Logo src={sol} alt="sol" />
          ),
        startTime: moment.unix(item.startTime).format("YYYY-MM-DD HH:mm"),
        endTime: moment.unix(item.startTime).format("YYYY-MM-DD HH:mm")
      };
    });
  }, [listStakingSession]);

  const handleChangePage = async (page: number) => {
    await loadTransaction({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Staking Session Management</Title>
      <Top>
        <Tab
          parent="stakingSessionManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
        </div>
      </Top>
      <BoxUsers>
        <Table
          header={headerUsers}
          data={renderDataStakingSession}
          total={totalStakingSession}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
