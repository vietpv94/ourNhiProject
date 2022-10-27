import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import { dataSortBy, dataSortTime } from "./data";
import { AdminWrapper, Box, BoxPayout, BoxUsers, Title, Top } from "./style";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import userServices from "@Services/user";
import { CommonFilter } from "@Types/common";
import adminTransactionServices from "@Services/adminTransaction";
import adminSystemConfigServices from "@Services/adminSystemConfig";
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

export function SystemConfigManagement(props: IHistoryProps) {
  const tabs = ["transactionManagement"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalTransaction, setTotalTransaction] = useState<number>(0);
  const [listTransaction, setListTransaction] = useState<IUser[]>([]);
  const headerUsers = [
    "ID",
    "Email",
    "Balance",
    "SOL Balance",
    "Level",
    "Kyc Status",
    "Verified",
    "Created"
  ];

  useEffect(() => {
    loadTransaction();
  }, []);

  const loadTransaction = async (param?: CommonFilter) => {
    const { data } = await adminSystemConfigServices.getSystemConfigs(param);
    console.log(data);

    setTotalTransaction(data.users);
    setListTransaction(data.total);
  };

  const renderDataUser = useMemo(() => {
    if (!listTransaction?.length) return [];
    return listTransaction.map((item: IUser, index: number) => {
      return {
        id: item.id,
        email: <div className="walletAddress">{item.email}</div>,
        balance: item.balance,
        solBalance: item.solBalance,
        level: item.level,
        kycStatus: (
          <div className={`status ${convertStatus(item.kycStatus)}`}>
            {convertStatus(item.kycStatus)}
          </div>
        ),
        verified: (
          <div className={`status ${item.verified ? "success" : "pending"}`}>
            {item.verified ? "success" : "failed"}
          </div>
        ),
        createdAt: moment(item.createdAt).format("YYYY-MM-DD HH:mm")
      };
    });
  }, [listTransaction]);

  const handleChangePage = async (page: number) => {
    await loadTransaction({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Transaction Management</Title>
      <Top>
        <Tab
          parent="transactionManagement"
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
          total={totalTransaction}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
