import { DollarIcon } from "@Components/atoms/icon/dollar";
import { MemberIcon } from "@Components/atoms/icon/member";
import { ProfileTickIcon } from "@Components/atoms/icon/profileTick";
import { RankingIcon } from "@Components/atoms/icon/ranking";
import { Dropdown } from "@Components/molecules/Dropdown";
import { DataSummary, Summary } from "@Components/molecules/Summary";
import { Table } from "@Components/molecules/Table";
import * as React from "react";
import { DataRewardHistory } from "./dataTable";
import {
  BinaryMLMWrapper,
  Board,
  BoxHistory,
  Header,
  RewardHistory,
  Wrapper
} from "./style";
import sol from "@Assets/images/molecules/card/sol-token.png";
import { BinaryMLM } from "@Components/molecules/BinaryMLM";
import { userServices } from "@Services/index";
import { useEffect, useMemo, useState } from "react";
import commissionServices from "@Services/commission";
import { IBox } from "@Components/molecules/BinaryMLM/Card";

export interface IAffiliateProps {}

export const dataCard: DataSummary[] = [
  {
    id: 1,
    title: "total members",
    value: "5,432",
    percent: 16,
    icon: <MemberIcon />
  },
  {
    id: 2,
    title: "total profit",
    value: "1,893",
    percent: -1,
    icon: <DollarIcon />
  },
  {
    id: 3,
    title: "Daily profits",
    value: "$18",
    icon: <RankingIcon />
  }
];

const dataSortBy = {
  label: "Sort by",
  data: [
    {
      id: 1,
      name: "All"
    },
    {
      id: 2,
      name: "Latest"
    },
    {
      id: 3,
      name: "Oldest"
    },
    {
      id: 4,
      name: "Highest"
    }
  ]
};

const renderDataRewardHistory = (data: DataRewardHistory[]) => {
  return data.map((item: DataRewardHistory, index: number) => {
    const profitFrom =
      item.type === 1
        ? "Sun Affiliate"
        : item.type === 2
        ? "Binary Affiliate"
        : "Staking Profit";
    return {
      id: `#${item.id + 1}`,
      profitFrom: <div className="balanceProfit">{profitFrom}</div>,
      balanceProfit: (
        <div className="balanceProfit">${item.commissionValue}</div>
      ),
      token: (
        <div className="token">
          <img src={sol} alt="sol" />
          <span>{"SOL"}</span>
        </div>
      ),
      time: <div className="time">{item.createdAt}</div>
    };
  });
};

interface BinaryDashboardData {
  totalMember: number;
  totalProfit: number;
  totalTransaction: number;
  percentProfitChange: number;
  newMemberJoinRate: number;
}

export function Affiliate(props: IAffiliateProps) {
  const [dashboardInfo, setDashboardInfo] = useState<BinaryDashboardData>();
  const [commissionHistory, setCommissionHistory] = useState<
    DataRewardHistory[]
  >([]);
  const [binaryBox, setBinaryBox] = useState<IBox[]>([]);
  const loadDashboardInfo = async () => {
    const { data } = await userServices.getBinaryDashboard();

    const {
      totalChild,
      totalProfit,
      profitThisMonth,
      profitLastMonth,
      level,
      childThisMonth,
      childLastMonth
    } = data;

    setDashboardInfo({
      totalMember: totalChild,
      totalProfit: totalProfit,
      totalTransaction: 0,
      newMemberJoinRate:
        childThisMonth === 0 || childLastMonth === 0
          ? 0
          : childThisMonth / childLastMonth,
      percentProfitChange:
        profitThisMonth === 0 || profitThisMonth === 0
          ? 0
          : profitThisMonth / profitLastMonth
    });
  };

  const loadCommissionHistory = async () => {
    const { data } = await commissionServices.getCommissionHistory();
    setCommissionHistory(data);
  };

  const convertBinaryChildToBoxData = (data, position): IBox => {
    return {
      id: data?.id.toString() || "0",
      x: position.x,
      y: position.y,
      type: "card",
      children: [...data.child.map(String)],
      childF1s: [...data.childF1s],
      index: data.id,
      parentId: data?.parentId?.toString() || "0",
      level: position.level,
      data: {
        title: data.email,
        left: {
          sum: data.leftChildData?.sum || 0,
          num: data.leftChildData?.num || 0
        },
        right: {
          sum: data.rightChildData?.sum || 0,
          num: data.rightChildData?.num || 0
        },
        level: data.level,
        packageValue: data.packageValue,
        total: data.bonusQuota
      }
    };
  };

  const getAllBoxes = async (
    boxes: IBox[],
    position: { x: number; y: number; level: number },
    email?: string
  ) => {
    const { data } = await userServices.getChildBinaryTree({ from: email });

    if (data) {
      const box: IBox = convertBinaryChildToBoxData(data, position);
      boxes.push(box);
      if (data.leftChildData?.email || data.rightChildData?.email) {
        position.level += 1;
        const parentX = position.x;
        const parentY = position.y;
        if (data.leftChildData?.email) {
          position.x = parentX - 120;
          position.y = parentY + 250;
          await getAllBoxes(boxes, position, data.leftChildData.email);
        }

        if (data.rightChildData?.email) {
          position.x = parentX + 120;
          position.y = parentY + 250;
          await getAllBoxes(boxes, position, data.rightChildData.email);
        }
      }

      return boxes;
    }
  };

  const loadBinaryTreeUser = async () => {
    const boxes = await getAllBoxes([], { x: 600, y: 50, level: 0 });
    console.log(boxes);

    setBinaryBox(boxes || []);
  };

  const dataTable = useMemo(() => {
    return {
      header: ["ID", "Profit From", "Amount", "Token", "time"],
      data: renderDataRewardHistory(commissionHistory)
    };
  }, [commissionHistory]);

  const cardData: DataSummary[] = useMemo(() => {
    return [
      {
        id: 1,
        title: "total members",
        value: dashboardInfo?.totalMember || 0,
        percent: dashboardInfo?.newMemberJoinRate,
        icon: <MemberIcon />
      },
      {
        id: 2,
        title: "total profit",
        value: dashboardInfo?.totalProfit || 0,
        percent: dashboardInfo?.percentProfitChange,
        icon: <DollarIcon />
      },
      {
        id: 3,
        title: "total transaction",
        value: dashboardInfo?.totalTransaction || 0,
        icon: <ProfileTickIcon />
      }
    ];
  }, [dashboardInfo]);

  useEffect(() => {
    loadDashboardInfo();
    loadCommissionHistory();
    loadBinaryTreeUser();
  }, []);

  return (
    <Wrapper>
      <Header>
        {cardData.map((item, index) => (
          <Summary data={item} key={`summary-item-affiliate=${index}`} />
        ))}
      </Header>
      <BinaryMLMWrapper>
        <div className="title">Binary MLM</div>
        <Board>
          {binaryBox && (
            <BinaryMLM
              binaryBox={binaryBox}
              updateBinaryTree={loadBinaryTreeUser}
            />
          )}
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
