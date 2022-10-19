import { ArrowIcon } from "@Components/atoms/icon/arrow";
import * as React from "react";
import { Wrapper } from "./style";

export interface DataSummary {
  id: number;
  title: string;
  value: string | number;
  percent?: number;
  icon: React.ReactNode;
}
export interface ISummaryProps {
  data: DataSummary;
}

export function Summary({ data }: ISummaryProps) {
  return (
    <Wrapper className="card">
      <div className="icon">{data.icon}</div>
      <div className="content">
        <div className="value">{data.value}</div>
        {/* {data.percent !== undefined && (
          <div className="percent">
            <ArrowIcon
              color={data.percent >= 0 ? "#53BA95" : "#ff476a"}
              direction={data.percent >= 0 ? "up" : "down"}
            />
            <span
              style={{
                color: data.percent >= 0 ? "#53BA95" : "#ff476a",
              }}
            >
              {data.percent}%
            </span>
            this month
          </div>
        )}{" "} */}
        <div className="title">{data.title}</div>
      </div>
    </Wrapper>
  );
}
