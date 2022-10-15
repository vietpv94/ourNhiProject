import { MemberIcon } from "@Components/atoms/icon/member";
import * as React from "react";
import { CardAffiliateWrapper, Header, Amount } from "./style";

export interface ICardAffiliateProps {
  status: "disabled" | "active" | "pending";
  depth: number;
  childNum: number;
  totalRevenue: number;
}

export function CardAffiliate({
  status,
  depth,
  childNum,
  totalRevenue,
}: ICardAffiliateProps) {
  return (
    <CardAffiliateWrapper status={status}>
      <Header status={status}>
        <div className="f">F{depth}</div>
        <div className="member">
          <MemberIcon
            style="small"
            color={
              status === "active"
                ? "#2A3751"
                : status === "pending"
                ? "#fff"
                : "#8C8C92"
            }
          />
          {childNum}
        </div>
      </Header>
      <Amount status={status}>
        <span>${totalRevenue}</span>
      </Amount>
    </CardAffiliateWrapper>
  );
}
