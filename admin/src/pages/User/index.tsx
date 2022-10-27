import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import {
  dataSortBy,
  dataSortTime,
} from "./data";
import { AdminWrapper, Box, BoxPayout, BoxUsers, Title, Top } from "./style";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import userServices from "@Services/user";
import { CommonFilter } from "@Types/common";
export interface IHistoryProps {}

interface IUser {
  id: number;
  email: string;
  nickName: string;
  active: true;
  verified: false;
  balance: number;
  solBalance: number;
  lastLogin: string;
  depositAmount: number;
  withdrawAmount: number;
  commissionAmount: number;
  totalInvestment: number;
  totalRevenue: number;
  dayRevenue: number;
  refCode: string;
  referralCodeApplied: string;
  level: number;
  active2fa: boolean;
  kycStatus: number;
  blockWithdraw: boolean;
  minLevel: number;
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

export function UserManagement(props: IHistoryProps) {
  const tabs = ["userManagement"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalUser, setTotalUser] = useState<number>(0);
  const [listUser, setListUser] = useState<IUser[]>([]);
  const headerUsers = [
    "ID",
    "Email",
    "Balance",
    "SOL Balance",
    "Level",
    "Verified",
    "Created"
  ];

  useEffect(() => {
    loadUser({ limit: 10 });
  }, []);

  const loadUser = async (param?: CommonFilter) => {
    const { data } = await userServices.getListUser(param);
    console.log(data);

    setListUser(data.users);
    setTotalUser(data.total);
  };

  const renderDataUser = useMemo(() => {

    return listUser.map((item: IUser, index: number) => {
      return {
        id: item.id,
        email: <div className="walletAddress">{item.email}</div>,
        balance: Number(item.balance).toFixed(2),
        solBalance: Number(item.solBalance).toFixed(2),
        level: item.level,
        verified: (
          <div className={`status ${item.verified ? "success" : "pending"}`}>
            {item.verified ? "success" : "failed"}
          </div>
        ),
        createdAt: moment(item.createdAt).format("YYYY-MM-DD HH:mm")
      };
    });
  }, [listUser]);

  const handleChangePage = async (page: number) => {
    await loadUser({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>User Management</Title>
      <Top>
        <Tab
          parent="userManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
          <Dropdown label="time" data={dataSortTime} />
          <Dropdown label="sort by" data={dataSortBy} />
        </div>
      </Top>
      <BoxUsers>
        <Table
          header={headerUsers}
          data={renderDataUser}
          total={totalUser}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
