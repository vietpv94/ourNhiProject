import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { CopyIcon } from "@Components/atoms/icon/copy";
import { DollarIcon } from "@Components/atoms/icon/dollar";
import { MemberIcon } from "@Components/atoms/icon/member";
import { ProfileIcon } from "@Components/atoms/icon/profile";
import { ProfileTickIcon } from "@Components/atoms/icon/profileTick";
import { CardAffiliate } from "@Components/molecules/CardAffiliate";
import { CardChild } from "@Components/molecules/CardChild";
import { DataSummary, Summary } from "@Components/molecules/Summary";
import { RootState } from "@Redux/reducers";
import account from "@Redux/reducers/accounts";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useCopyToClipboard, useMedia } from "react-use";
import { DataAffiliate, DataLevel, infoData, listAffiliate } from "./data";
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
import { CardLevel } from "@Components/molecules/CardLevel";
import { userServices } from "@Services/index";
export interface IDashboardProps {}

export interface DashboardData {
  totalMember: number;
  totalProfit: number;
  totalTransaction: number;
  percentProfitChange: number;
  newMemberJoinRate: number;
}
export function Dashboard(props: IDashboardProps) {
  const account = useSelector((state: RootState) => state.account);
  const [memberData, setMemberData] = useState<any[]>(new Array(15).fill([]));
  const [activeChild, setActiveChild] = React.useState<string>("");
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

  const loadUserChild = async () => {
    const { data } = await userServices.getUserChild({ maxDepth: 0 });
    console.log(data);

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
    console.log(memberData);

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

  useEffect(() => {
    loadDashboardInfo();
    loadUserChild();
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
        {DataAffiliate.map((item, index) => (
          <CardAffiliate {...item} key={`card-affiliate-${index}`} />
        ))}
      </System>
      <Title>Level</Title>
      <Level>
        {DataLevel.map((item, index) => (
          <CardLevel data={item} key={`card-level-${index}`} />
        ))}
      </Level>
      <Title>Members</Title>
      <Info>
        {Object.keys(infoData).map((item: any, index) => (
          <ItemInfo key={`item-info-${index}`}>
            <div className="name">{item}</div>
            <div className="value">
              {infoData[item as keyof typeof infoData]}
            </div>
          </ItemInfo>
        ))}
      </Info>
      <ListAffiliate>{renderChild()}</ListAffiliate>
    </DashboardWrapper>
  );
}
