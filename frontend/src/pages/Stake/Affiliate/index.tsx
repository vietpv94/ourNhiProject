import { DollarIcon } from "@Components/atoms/icon/dollar";
import { MemberIcon } from "@Components/atoms/icon/member";
import { Breadcrumbs } from "@Components/atoms/Breadcrumbs";
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
import { WalletMoney } from "@Components/atoms/icon/walletMoney";
import { CommonFilter } from "@Types/common";
import { useDispatch } from "react-redux";
import { loading, unloading } from "@Redux/actions/loading";
import account from "@Redux/reducers/accounts";
import { useSelector } from "react-redux";
import { RootState } from "@Redux/reducers";
import { findIndex, groupBy, take } from "lodash";

export interface IAffiliateProps {}

// export const dataCard: DataSummary[] = [
//   {
//     id: 1,
//     title: "total members",
//     value: "5,432",
//     percent: 16,
//     icon: <MemberIcon />,
//   },
//   {
//     id: 2,
//     title: "total profit",
//     value: "1,893",
//     percent: -1,
//     icon: <DollarIcon />,
//   },
//   {
//     id: 3,
//     title: "Daily profits",
//     value: "$18",
//     icon: <RankingIcon />,
//   },
// ];

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

interface BinaryDashboardData {
  totalMember: number;
  totalProfit: number;
  totalTransaction: number;
  percentProfitChange: number;
  newMemberJoinRate: number;
}

export function Affiliate(props: IAffiliateProps) {
  const dispatch = useDispatch();
  const [dashboardInfo, setDashboardInfo] = useState<BinaryDashboardData>();
  const [totalRow, setTotalRow] = useState<number>(0);
  const [commissionHistory, setCommissionHistory] = useState<
    DataRewardHistory[]
  >([]);
  const [breadCrumbData, setBreadCrumbData] = useState<string[]>([]);

  const [binaryBox, setBinaryBox] = useState<IBox[]>([]);
  const account = useSelector((state: RootState) => state.account);

  const loadDashboardInfo = async () => {
    dispatch(loading());
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
    dispatch(unloading());
  };

  const loadCommissionHistory = async (param?: CommonFilter) => {
    dispatch(loading());
    const { data, totalRow } = await commissionServices.getCommissionHistory(
      param
    );
    setCommissionHistory(data);
    setTotalRow(totalRow);
    dispatch(unloading());
  };

  const convertBinaryChildToBoxData = (data, position): IBox => {
    return {
      id: data?.id.toString() || "0",
      x: position.x,
      y: position.y,
      type: "card",
      children: [...data.child.map(String)],
      childF1s: [...data.childF1s],
      index: data.position || 0,
      parentId: data?.parentId?.toString() || "0",
      level: position.level,
      maxTreeDeep: data?.maxTreeDeep || 0,
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
  const wrapper = document.getElementById("binary-wrapper");
  const width = wrapper?.clientWidth;
  const boxWidth = 200;
  const boxSpaceX = 100;
  const boxHeight = 187;
  const boxSpaceY = 150;
  const centerX = width ? width / 2 : 700;
  const Y0 = 50;

  const getAllBoxes = async (
    boxes: IBox[],
    position: { x: number; y: number; level: number },
    email?: string
  ) => {
    dispatch(loading());
    const { data } = await userServices.getChildBinaryTree({ from: email });
    dispatch(unloading());
    if (data) {
      const box: IBox = convertBinaryChildToBoxData(data, position);
      const currentLevel = position.level;

      const totalX =
        (data.maxTreeDeep + 1) * 4 * (boxWidth + boxSpaceX) + boxWidth;
      if (data.leftChildData?.email || data.rightChildData?.email) {
        position.level = currentLevel + 1;
        if (data.leftChildData?.email) {
          if (currentLevel === 0) {
            position.x = centerX + boxWidth - totalX / 2;
            position.y = Y0 + (currentLevel + 1) * (boxHeight + boxSpaceY);
          } else {
            position.x = box.x - totalX / (2 * (currentLevel + 1));
            position.y = box.y + (boxHeight + boxSpaceY);
          }

          await getAllBoxes(boxes, position, data.leftChildData.email);
        }

        if (data.rightChildData?.email) {
          if (currentLevel === 0) {
            position.x = centerX - boxWidth + totalX / 2;
            position.y = Y0 + (currentLevel + 1) * (boxHeight + boxSpaceY);
          } else {
            position.x = box.x + totalX / (2 * (currentLevel + 1));
            position.y = box.y + (boxHeight + boxSpaceY);
          }

          await getAllBoxes(boxes, position, data.rightChildData.email);
        }
      }
      boxes.push(box);
      return boxes;
    }
  };

  const loadBinaryTreeUser = async (email?: string) => {
    const wrapper = document.getElementById("binary-wrapper");
    const widthcurrent = wrapper?.clientWidth;

    const boxes = await getAllBoxes(
      [],
      {
        x: widthcurrent ? widthcurrent / 2 : 700,
        y: 50,
        level: 0
      },
      email
    );

    const groupChildByParent = groupBy(boxes, "parentId");
    Object.keys(groupChildByParent).map((key) => {
      const boxParent = boxes?.find((box) => box.id === key);
      if (boxParent) {
        const totalX =
          (boxParent.maxTreeDeep + 1) * 2 * (boxWidth + boxSpaceX) + boxWidth;
        if (groupChildByParent[key].length < 2) {
          const newBox: IBox = {
            type: "choose",
            id: `${Math.floor(Math.random() * 100000)}`,
            children: [],
            x:
              groupChildByParent[key][0]?.index === 1
                ? boxParent.x + totalX / (2 * (boxParent.level + 1))
                : boxParent.x - totalX / (2 * (boxParent.level + 1)),
            y: boxParent.y + (boxHeight + boxSpaceY),
            childF1s: [],
            binaryChildCandidate: [...(boxParent?.childF1s || [])],
            parentId: boxParent?.id,
            maxTreeDeep: 0,
            index: groupChildByParent[key][0]?.index === 1 ? 2 : 1,
            level: (boxParent?.level || 0) + 1,
            data: {
              title: "0",
              left: {
                num: 0,
                sum: 0
              },
              right: {
                num: 0,
                sum: 0
              },
              level: 0,
              packageValue: 0,
              total: 0
            }
          };

          boxes?.push(newBox);
          boxParent.children.push(newBox.id);
        }
      }
      return groupChildByParent[key];
    });

    setBinaryBox(boxes || []);
  };

  const commissionHistoryHeader = [
    "ID",
    "Profit From",
    "Amount",
    "Token",
    "time"
  ];

  const dataTable = useMemo(() => {
    if (!commissionHistory?.length) return [];
    return commissionHistory.map((item: DataRewardHistory, index: number) => {
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
  }, [commissionHistory]);

  const handleChangePage = async (page: number) => {
    await loadCommissionHistory({ page: page });
  };

  const updateBreadcrumb = async (email: string) => {
    const index = findIndex(breadCrumbData, (o) => o === email);
    if (index > -1) {
      setBreadCrumbData([...take(breadCrumbData, index + 1)]);
    } else {
      breadCrumbData.push(email);
      setBreadCrumbData(breadCrumbData);
    }
    await loadBinaryTreeUser(email);
  };

  const cardData: DataSummary[] = useMemo(() => {
    return [
      {
        id: 1,
        title: "total members",
        value: dashboardInfo?.totalMember || 0,
        percent: dashboardInfo?.newMemberJoinRate,
        icon: ({
          color,
          customStyle
        }: {
          color?: string;
          customStyle?: any;
        }) => <MemberIcon color={color} customStyle={customStyle} />
      },
      {
        id: 2,
        title: "total profit",
        value: dashboardInfo?.totalProfit || 0,
        percent: dashboardInfo?.percentProfitChange,
        icon: ({
          color,
          customStyle
        }: {
          color?: string;
          customStyle?: any;
        }) => <DollarIcon color={color} customStyle={customStyle} />
      },
      {
        id: 3,
        title: "total transaction",
        value: dashboardInfo?.totalTransaction || 0,
        icon: ({
          color,
          customStyle
        }: {
          color?: string;
          customStyle?: any;
        }) => <WalletMoney color={color} customStyle={customStyle} />
      }
    ];
  }, [dashboardInfo]);

  useEffect(() => {
    loadDashboardInfo();
    loadCommissionHistory();
    loadBinaryTreeUser();
    setBreadCrumbData([...breadCrumbData, account.email]);
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
        <Breadcrumbs
          data={breadCrumbData}
          onClick={(email) => updateBreadcrumb(email)}
        />
        <Board id="binary-wrapper">
          {binaryBox && (
            <BinaryMLM
              binaryBox={binaryBox}
              updateBinaryTree={(email) => {
                loadBinaryTreeUser(email);
                if (email) {
                  updateBreadcrumb(email);
                }
              }}
            />
          )}
        </Board>
      </BinaryMLMWrapper>
      <RewardHistory>
        <div className="header">
          <div className="title">Reward History</div>
          {/* <div className="filter">
            <Dropdown {...dataSortBy} />
          </div> */}
        </div>
        <BoxHistory>
          <Table
            header={commissionHistoryHeader}
            data={dataTable}
            total={totalRow}
            onMovePage={handleChangePage}
          />
        </BoxHistory>
      </RewardHistory>
    </Wrapper>
  );
}
