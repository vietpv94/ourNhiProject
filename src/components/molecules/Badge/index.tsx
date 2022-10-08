import * as React from "react";
import { Bell } from "./bell";
import { BadgeWrapper, Number } from "./style";

export interface IBadgeProps {
  num: number;
}

export function Badge({ num }: IBadgeProps) {
  return (
    <BadgeWrapper>
      <Bell />
      <Number>
        <span>{num > 99 ? "9+" : num}</span>
      </Number>
    </BadgeWrapper>
  );
}
