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
import { useSelector } from "react-redux";
import { useCopyToClipboard, useMedia } from "react-use";
import { DataAffiliate, infoData, listAffiliate } from "./data";
import {
  AffiliateLink,
  CardGroup,
  DashboardWrapper,
  Info,
  ItemInfo,
  ListAffiliate,
  System,
  Title,
} from "./style";

export interface IDashboardProps {}

export const dataCard: DataSummary[] = [
  {
    id: 1,
    title: "total members",
    value: "5,432",
    percent: 16,
    icon: <MemberIcon />,
  },
  {
    id: 2,
    title: "total profit",
    value: "1,893",
    percent: -1,
    icon: <DollarIcon />,
  },
  {
    id: 3,
    title: "total transaction",
    value: "V",
    icon: <ProfileTickIcon />,
  },
];

export function Dashboard(props: IDashboardProps) {
  const account = useSelector((state: RootState) => state.account);
  const [state, copyToClipboard] = useCopyToClipboard();
  const isMobile = useMedia(breakpoints.xs);
  const link = `${window.location.origin}/sign-up?ref=${account.ref}`;
  return (
    <DashboardWrapper>
      <Title>Dashboard</Title>
      <CardGroup>
        {dataCard.map((item, index) => (
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
      <ListAffiliate>
        {listAffiliate.map((item, index) => (
          <CardChild data={item} key={`list-affiliate-${index}`} />
        ))}
      </ListAffiliate>
    </DashboardWrapper>
  );
}
