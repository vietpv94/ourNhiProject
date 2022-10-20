import { ArrowIcon } from "@Components/atoms/icon/arrow";
import * as React from "react";
import { Wrapper } from "./style";

export interface DataSummary {
  id: number;
  title: string;
  value: string | number;
  percent?: number;
  icon: ({
    color,
    customStyle
  }: {
    color?: string;
    customStyle?: any;
  }) => React.ReactNode;
}
export interface ISummaryProps {
  data: DataSummary;
  onClick?: () => void;
}

export function Summary({ data, onClick }: ISummaryProps) {
  return (
    <Wrapper className="card" onClick={onClick}>
      <div className="icon">
        {data.icon({
          color: "#4a65ef",
          customStyle: {
            width: 30,
            height: 30
          }
        })}
      </div>
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
        <div className="mask">
          {data.icon({
            color: "#889aef23",
            customStyle: { width: 100, height: 100 }
          })}
        </div>
      </div>
    </Wrapper>
  );
}
