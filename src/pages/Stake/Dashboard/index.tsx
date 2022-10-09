import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { CopyIcon } from "@Components/atoms/icon/copy";
import { DollarIcon } from "@Components/atoms/icon/dollar";
import { MemberIcon } from "@Components/atoms/icon/member";
import { ProfileIcon } from "@Components/atoms/icon/profile";
import { ProfileTickIcon } from "@Components/atoms/icon/profileTick";
import { CardAffiliate } from "@Components/molecules/CardAffiliate";
import { CardChild } from "@Components/molecules/CardChild";
import * as React from "react";
import { DataAffiliate, infoData, listAffiliate } from "./data";
import {
  AffiliateLink,
  Card,
  CardGroup,
  DashboardWrapper,
  Info,
  ItemInfo,
  ListAffiliate,
  System,
  Title,
} from "./style";

export interface IDashboardProps {}

export const dataCard = [
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

export const CardItem = (data: any) => {
  return (
    <Card className="card">
      <div className="icon">{data.icon}</div>
      <div className="content">
        <div className="title">{data.title}</div>
        <div className="value">{data.value}</div>
        {data.percent && (
          <div className="percent">
            <ArrowIcon
              color={data.percent > 0 ? "#53BA95" : "#ff476a"}
              direction={data.percent > 0 ? "up" : "down"}
            />
            <span
              style={{
                color: data.percent > 0 ? "#53BA95" : "#ff476a",
              }}
            >
              {data.percent}%
            </span>
            this month
          </div>
        )}
      </div>
    </Card>
  );
};
export function Dashboard(props: IDashboardProps) {
  return (
    <DashboardWrapper>
      <Title>Dashboard</Title>
      <CardGroup>
        {dataCard.map((item, index) => (
          <CardItem {...item} key={`card-item-${index}`} />
        ))}
        <AffiliateLink>
          <div className="label">Your affiliate link</div>
          <CopyIcon />
          <div className="link">TCxd82wTXV9McykvT3JAYwBpjrAr11Wkh5</div>
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
