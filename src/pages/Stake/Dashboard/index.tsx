// @ts-nocheck
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { CopyIcon } from "@Components/atoms/icon/copy";
import { DollarIcon } from "@Components/atoms/icon/dollar";
import { MemberIcon } from "@Components/atoms/icon/member";
import { ProfileIcon } from "@Components/atoms/icon/profile";
import { ProfileTickIcon } from "@Components/atoms/icon/profileTick";
import {
  CardAffiliate,
  ICardAffiliateProps
} from "@Components/molecules/CardAffiliate";
import { CardChild } from "@Components/molecules/CardChild";
import { DataSummary, Summary } from "@Components/molecules/Summary";
import { RootState } from "@Redux/reducers";
import account from "@Redux/reducers/accounts";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useCopyToClipboard, useMedia } from "react-use";
import { DataLevel, infoData, listAffiliate } from "./data";
import { toast } from "react-toastify";
import {
  AffiliateLink,
  CardGroup,
  DashboardWrapper,
  Info,
  ItemInfo,
  Level,
  ListAffiliate,
  System,
  Title
} from "./style";
import { CardLevel, Status } from "@Components/molecules/CardLevel";
import { userServices } from "@Services/index";
import {
  convertKeyToReadableName,
  convertValueToReadableStatus
} from "./utils";
export interface IDashboardProps {}

export interface DashboardData {
  totalMember: number;
  totalProfit: number;
  totalTransaction: number;
  percentProfitChange: number;
  newMemberJoinRate: number;
}

interface ChildInfo {
  id: number;
  level: number;
  package: number;
  partner: number;
  profit: number;
  createdAt: string;
}

export interface LevelInfo {
  level: number;
  conditionInvest: number;
  conditionNumF1: number;
  conditionF1Level: number;
  conditionRevenue: number;
  maximumBinaryTreeIncome: number;
  maxDeepReceiveSunCommission: number;
  reward: number;
}
export interface CurrentLevelData {
  level: number;
  totalInvestment: number;
  totalF1: number;
  totalRevenue: number;
  f1Level: {
    email: string;
    level: number;
  }[];
}
export function Dashboard(props: IDashboardProps) {
  const account = useSelector((state: RootState) => state.account);
  const [memberData, setMemberData] = useState<any[]>(new Array(15).fill([]));
  const [activeChild, setActiveChild] = React.useState<string>("");
  const [currentChildData, setCurrentChildData] = useState<ChildInfo>();
  const [affiliateLevelData, setAffiliateLevelData] = useState<
    ICardAffiliateProps[]
  >([]);
  const [levelData, setLevelData] = useState<{
    levels: LevelInfo[];
    currentLevel: CurrentLevelData;
  }>();
  const [copyState, copyToClipboard] = useCopyToClipboard();
  const [dashboardInfo, setDashboardInfo] = useState<DashboardData>();
  const isMobile = useMedia(breakpoints.xs);
  const link = `${window.location.origin}/sign-up?ref=${account.ref}`;
  useEffect(() => {
    if (copyState.noUserInteraction && !copyState.error && copyState.value) {
      toast.success("copy success");
    }
  }, [copyState]);

  const loadDashboardInfo = async () => {
    const { data } = await userServices.getDashboard();
console.log(data);

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

  const loadUserLevel = async () => {
    const { data } = await userServices.getUserLevel();
    setLevelData(data);
  };

  const loadCurrentChildData = async (email: string) => {
    const { data } = await userServices.getChildDetail(email);
    setCurrentChildData(data);
  };

  useEffect(() => {
    if (activeChild) {
      loadCurrentChildData(activeChild);
    }
  }, [activeChild]);

  const loadUserSummary = async () => {
    const { data } = await userServices.getUserChildSummary();
    const affData = data.map((item: ICardAffiliateProps) => {
      return { ...item, status: "active" };
    });

    setAffiliateLevelData(affData);
  };

  const loadUserChild = async () => {
    const { data } = await userServices.getUserChild({ maxDepth: 0 });
    memberData[0] = data;
    setMemberData(memberData);
  };

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

  const renderChild = React.useCallback(() => {
    return (
      <>
        {memberData.map((item, index) => (
          <CardChild
            cardInfo={item}
            layer={index + 1}
            activeChild={activeChild}
            onClickItem={async (email: string, i: number) => {
              if (i !== 14) {
                const nextResult = await userServices.getUserChild({
                  maxDepth: 0,
                  from: email
                });

                memberData[i + 1] = nextResult.data;
                if (i !== 13 && memberData[i + 2].length !== 0) {
                  const newMembers = memberData.slice(0, i - 13);
                  const remain = new Array(13 - i).fill([]);
                  setMemberData(newMembers.concat(remain));
                } else {
                  setMemberData(memberData);
                }
              }
              setActiveChild(email);
            }}
            key={`list-affiliate-${index}`}
          />
        ))}
      </>
    );
  }, [activeChild]);

  const DataLevels = useMemo(() => {
    if (!levelData) return;

    const currentUserLevel = levelData.currentLevel;
    const cardLevel = levelData?.levels.map((lv: LevelInfo) => {
      if (lv.level < (currentUserLevel.level || 0)) {
        const serializeLevelCondition = Object.keys(lv).map((keyLv) => {
          if (keyLv !== "level") {
            return {
              name: convertKeyToReadableName(keyLv),
              value: lv[keyLv],
              done: true
            };
          }
        }).filter(o => o?.name);
        return {
          level: lv.level,
          status: "done" as Status,
          nextLevel: 0,
          completed: 4,
          total: 4,
          data: [...serializeLevelCondition]
        };
      } else if (lv.level > (currentUserLevel.level || 0)) {
        const serializeLevelCondition = Object.keys(lv).map((keyLv) => {
          if (keyLv !== "level") {
            return {
              name: convertKeyToReadableName(keyLv),
              value: lv[keyLv],
              done: false
            };
          }
        }).filter(o => o?.name);
        return {
          level: lv.level,
          status: "disabled" as Status,
          nextLevel: 4,
          completed: 0,
          total: 4,
          data: [...serializeLevelCondition]
        };
      } else {
        const serializeLevelCondition = Object.keys(lv).map((keyLv) => {
          if (keyLv !== "level") {
            return {
              name: convertKeyToReadableName(keyLv),
              value: lv[keyLv],
              done: convertValueToReadableStatus(keyLv, lv, currentUserLevel)
            };
          }
        }).filter(o => o?.name);
        return {
          level: lv.level,
          status: "pending" as Status,
          nextLevel: 4,
          completed: 0,
          total: 4,
          data: [...serializeLevelCondition]
        };
      }
    });
    console.log(cardLevel);
    
    return cardLevel;
  }, [levelData]);

  useEffect(() => {
    loadDashboardInfo();
    loadUserChild();
    loadUserSummary();
    loadUserLevel();
  }, []);
  return (
    <DashboardWrapper>
      <Title>Dashboard</Title>
      <CardGroup>
        {cardData.map((item, index) => (
          <Summary data={item} key={`card-item-${index}`} />
        ))}
        <AffiliateLink
          onClick={() => {
            copyToClipboard(
              `${window.location.origin}/sign-up?ref=${account.ref}`
            );
          }}
        >
          <div className="label">Your affiliate link</div>
          <CopyIcon />
          <div className="link">
            {isMobile
              ? `${link.slice(0, 8)}...${link.slice(
                  link.length - 8,
                  link.length
                )}`
              : link}
          </div>
        </AffiliateLink>
      </CardGroup>
      <Title>System</Title>
      <System>
        {affiliateLevelData &&
          affiliateLevelData.map((item, index) => (
            <CardAffiliate {...item} key={`card-affiliate-${index}`} />
          ))}
      </System>
      <Title>Level</Title>
      <Level>
        {DataLevels &&
          DataLevels.map((item, index) => (
            <CardLevel data={item} key={`card-level-${index}`} />
          ))}
      </Level>
      <Title>Members</Title>
      <Info>
        {currentChildData &&
          Object.keys(currentChildData).map((item: any, index) => (
            <ItemInfo key={`item-info-${index}`}>
              <div className="name">
                {item === "createdAt" ? "Date of Registration" : item}
              </div>
              <div className="value">
                {currentChildData[item as keyof typeof currentChildData]}
              </div>
            </ItemInfo>
          ))}
      </Info>
      <ListAffiliate>{renderChild()}</ListAffiliate>
    </DashboardWrapper>
  );
}
