import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dropdown } from "@Components/molecules/Dropdown";

import { AdminWrapper, Box, BoxUsers, Text, Title, Top, Flex } from "./style";
import userServices from "@Services/user";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@Components/atoms/Button";
import { ISystemConfig } from "@Models/systemConfig";
import { Tab } from "@Components/molecules/Tab";
import { CommonFilter } from "@Types/common";
import { Table } from "@Components/molecules/Table";
import moment from "moment";

export interface IUserDetailProps {}

const headerUserTx = [
  "ID",
  "Type",
  "Amount",
  "Currency",
  "To",
  "Mint",
  "TxId",
  "Status",
  "Time",
  "Confirmed At",
];

const headerUserCommission = [
  "ID",
  "From",
  "Value",
  "Commission Value",
  "Type",
  "Time",
];

const headerUserStaking = [
  "ID",
  "Value",
  "Raw Value",
  "Currency",
  "Type",
  "Status",
  "Start Time",
  "End Time",
  "Percent Profit Per Day",
  "Percent Profit Per Month",
];

const headerUserStakingProfit = [
  "ID",
  "Value",
  "Currency",
  "Staking Raw Value",
  "Staking Value",
  "Staking Currency",
  "Time",
];

enum TransactionStatus {
  PENDING = 1,
  CONFIRMED = 2,
  REJECTED = 3,
  FAILED = 4,
}

enum StakingStatus {
  STAKED = 1,
  UNSTAKED = 2,
  HARVEST = 3,
  CANCEL = 4,
}

enum CommissionType {
  SUN_COMMISSION = 1,
  BINARY_COMMISSION = 2,
  STAKING_PROFIT_COMMISSION = 3,
}

enum KYCStatus {
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3,
}

enum StakingType {
  FIXED = 1,
  DEFI = 2,
}

export function UserDetail(props: IUserDetailProps) {
  const param = useParams();
  const navigate = useNavigate();

  const tabs = [
    "User detail",
    "User tx",
    "User commission history",
    "User staking",
    "User staking profit",
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [userDetail, setUserDetail] = useState<any>();
  const [userTx, setUserTx] = useState<any>();
  const [totalUserTx, setTotalUserTx] = useState(0);
  const [userCommissionHistory, setUserCommissionHistory] = useState<any>();
  const [totalUserCommissionHistory, setTotalUserCommissionHistory] =
    useState(0);

  const [userStaking, setUserStaking] = useState<any>();
  const [totalUserStaking, setTotalUserStaking] = useState(0);

  const [userStakingProfit, setUserStakingProfit] = useState<any>();
  const [totalUserStakingProfit, setTotalUserStakingProfit] = useState(0);

  const loadDetailUser = async () => {
    if (param.id) {
      const { data } = await userServices.getDetailUser(Number(param.id));

      setUserDetail(data);
    }
  };

  const loadUserTx = async (params?: CommonFilter) => {
    if (param.id) {
      const { data, totalRow } = await userServices.getUserTx(
        Number(param.id),
        params
      );

      setUserTx(data);

      setTotalUserTx(totalRow);
    }
  };

  const loadUserCommission = async (params?: CommonFilter) => {
    if (param.id) {
      const { data, totalRow } = await userServices.getUserCommission(
        Number(param.id),
        params
      );

      setUserCommissionHistory(data);

      setTotalUserCommissionHistory(totalRow);
    }
  };

  const loadUserStaking = async (params?: CommonFilter) => {
    if (param.id) {
      const { data, totalRow } = await userServices.getUserStaking(
        Number(param.id),
        params
      );

      setUserStaking(data);

      setTotalUserStaking(totalRow);
    }
  };

  const loadUserStakingProfit = async (params?: CommonFilter) => {
    if (param.id) {
      const { data, totalRow } = await userServices.getUserStakingProfit(
        Number(param.id),
        params
      );

      setUserStakingProfit(data);
      setTotalUserStakingProfit(totalRow);
    }
  };

  const getTxStatus = (status: number) => {
    switch (status) {
      case TransactionStatus.PENDING:
        return "Pending";
      case TransactionStatus.CONFIRMED:
        return "Confirmed";
      case TransactionStatus.REJECTED:
        return "Rejected";
      case TransactionStatus.FAILED:
        return "Failed";
      default:
        return "Pending";
    }
  };

  const getCommissionType = (type: number) => {
    switch (type) {
      case CommissionType.SUN_COMMISSION:
        return "Sun commission";
      case CommissionType.BINARY_COMMISSION:
        return "Binary commission";
      case CommissionType.STAKING_PROFIT_COMMISSION:
        return "Staking profit commission";
      default:
        return "";
    }
  };

  const getStakingStatus = (status: number) => {
    switch (status) {
      case StakingStatus.STAKED:
        return "Staked";
      case StakingStatus.UNSTAKED:
        return "Unstaked";
      case StakingStatus.HARVEST:
        return "Harvest";
      case StakingStatus.CANCEL:
        return "Cancel";
      default:
        return "";
    }
  };

  const getStakingType = (type: number) => {
    switch (type) {
      case StakingType.FIXED:
        return "Fixed";
      case StakingType.DEFI:
        return "Defi";
      default:
        return "";
    }
  };

  const getKYCStatus = (status: number) => {
    switch (status) {
      case KYCStatus.PENDING:
        return "Pending";
      case KYCStatus.APPROVED:
        return "Approved";
      case KYCStatus.REJECTED:
        return "Rejected";
      default:
        return "";
    }
  };

  const renderDataUserTx = useMemo(() => {
    return userTx?.map((item: any) => {
      return {
        id: item.id,
        type: item.type === 1 ? "Deposit" : "Withdraw",
        amount: item.amount,
        currency: item.currency === 1 ? "SOL" : "USDC",
        to: item.to?.length ? item.to.slice(0, 10) + "..." : item.to,
        mint: item.mint?.length ? item.mint.slice(0, 10) + "..." : item.mint,
        txId: item.txId?.length ? item.txId.slice(0, 10) + "..." : item.txId,
        status: getTxStatus(item.status),
        createdAt: item.createdAt,
        confirmedAt: item.confirmedAt,
      };
    });
  }, [userTx]);

  const renderDataUserCommissionHistory = useMemo(() => {
    return userCommissionHistory?.map((item: any) => {
      return {
        id: item.id,
        from: item.userEmail,
        value: item.value,
        commissionValue: item.commissionValue,
        type: getCommissionType(item.type),
        createdAt: item.createdAt,
      };
    });
  }, [userCommissionHistory]);

  const renderDataUserStaking = useMemo(() => {
    return userStaking?.map((item: any) => {
      return {
        id: item.id,
        value: item.stakeValue,
        rawValue: item.rawValue,
        currency: item.currency === 1 ? "SOL" : "USDC",
        type: getStakingType(item.type),
        status: getStakingStatus(item.status),
        startTime: moment.unix(item.startTime).format("DD/MM/YYYY HH:mm:ss"),
        endTime: moment.unix(item.endTime).format("DD/MM/YYYY HH:mm:ss"),
        percentProfitPerDay: item.percentProfitPerDay,
        percentProfitPerMonth: item.percentProfitPerMonth,
      };
    });
  }, [userStaking]);

  const renderDataUserStakingProfit = useMemo(() => {
    return userStakingProfit?.map((item: any) => {
      return {
        id: item.id,
        value: item.value,
        currency: item.currency === 1 ? "SOL" : "USDC",
        stakingRawValue: item.stakingRawValue,
        stakingValue: item.stakingValue,
        stakingCurrency: item.stakingCurrency === 1 ? "SOL" : "USDC",
        time: item.createdAt,
      };
    });
  }, [userStakingProfit]);

  const handleChangePageUserTx = async (page: number) => {
    await loadUserTx({ page: page, limit: 10 });
  };

  const handleChangePageUserCommission = async (page: number) => {
    await loadUserCommission({ page: page, limit: 10 });
  };

  const handleChangePageUserStaking = async (page: number) => {
    await loadUserStaking({ page: page, limit: 10 });
  };

  const handleChangePageUserStakingProfit = async (page: number) => {
    await loadUserStakingProfit({ page: page, limit: 10 });
  };

  useEffect(() => {
    loadDetailUser();
    loadUserTx({ limit: 10 });
    loadUserCommission({ limit: 10 });
    loadUserStaking({ limit: 10 });
    loadUserStakingProfit({ limit: 10 });
  }, []);

  return (
    <AdminWrapper>
      <Title>
        {" "}
        <Button
          type="outline"
          onClick={() => {
            navigate("/admin/user");
          }}
        >
          {"<"}
        </Button>{" "}
        User Detail
      </Title>
      <Top>
        <Tab
          parent="userManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left"></div>
      </Top>
      {currentTab === "User detail" && (
        <Box>
          <Flex>
            <Text> User email: {userDetail?.email}</Text>
            <Text> User name: {userDetail?.nickName}</Text>
            <Text> User level : {userDetail?.level}</Text>
            <Text> Balance SOL: {userDetail?.solBalance}</Text>
            <Text> Balance : {userDetail?.balance}</Text>
            <Text> Total deposit: {userDetail?.depositAmount}</Text>
            <Text> Total withdraw: {userDetail?.withdrawAmount}</Text>
            <Text> KYC status: {getKYCStatus(userDetail?.kycStatus)}</Text>
            <Text>
              {" "}
              Enable 2FA: {userDetail?.active2fa ? "Active" : "Inactive"}
            </Text>
            <Text> Referral code: {userDetail?.referralCode}</Text>
            <Text>
              {" "}
              Total Binary commission:{" "}
              {Number(userDetail?.totalBinaryCommission).toFixed(5)}
            </Text>
            <Text>
              {" "}
              Total Sun commission:{" "}
              {Number(userDetail?.totalSunCommission).toFixed(5)}
            </Text>
            <Text>
              {" "}
              Total Staking Profit Commission :{" "}
              {Number(userDetail?.totalStakingProfitCommission).toFixed(5)}
            </Text>
            <Text>
              {" "}
              Total Investment: {Number(userDetail?.totalInvestment).toFixed(5)}
            </Text>
          </Flex>
        </Box>
      )}
      {currentTab === "User tx" && (
        <BoxUsers>
          <Table
            header={headerUserTx}
            data={renderDataUserTx}
            total={totalUserTx}
            onMovePage={handleChangePageUserTx}
          />
        </BoxUsers>
      )}
      {currentTab === "User commission history" && (
        <BoxUsers>
          <Table
            header={headerUserCommission}
            data={renderDataUserCommissionHistory}
            total={totalUserCommissionHistory}
            onMovePage={handleChangePageUserCommission}
          />
        </BoxUsers>
      )}
      {currentTab === "User staking" && (
        <BoxUsers>
          <Table
            header={headerUserStaking}
            data={renderDataUserStaking}
            total={totalUserStaking}
            onMovePage={handleChangePageUserStaking}
          />
        </BoxUsers>
      )}
      {currentTab === "User staking profit" && (
        <BoxUsers>
          <Table
            header={headerUserStakingProfit}
            data={renderDataUserStakingProfit}
            total={totalUserStakingProfit}
            onMovePage={handleChangePageUserStakingProfit}
          />
        </BoxUsers>
      )}
    </AdminWrapper>
  );
}
