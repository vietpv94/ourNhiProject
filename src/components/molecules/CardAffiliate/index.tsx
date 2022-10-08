import { MemberIcon } from "@Components/atoms/icon/member";
import * as React from "react";
import { CardAffiliateWrapper, Header, Amount } from "./style";

export interface ICardAffiliateProps {
  status: "disabled" | "active" | "pending";
  index: number;
  members: number;
  amount: number;
}

export function CardAffiliate({
  status,
  index,
  members,
  amount,
}: ICardAffiliateProps) {
  return (
    <CardAffiliateWrapper status={status}>
      <Header status={status}>
        <div className="f">F{index}</div>
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
          {members}
        </div>
      </Header>
      <Amount status={status}>
        <span>${amount}</span>
      </Amount>
    </CardAffiliateWrapper>
  );
}
