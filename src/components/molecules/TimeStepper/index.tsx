import React from "react";
import {
  EstAPR,
  Item,
  ItemWrapper,
  Line,
  Rect,
  TimeStepperWrapper
} from "./style";

export interface ITimeStepperProps {}

export interface ITimeStepper {
  label: string;
  value: string;
}
export function TimeStepper({
  data,
  interest,
  customStyle
}: {
  data: ITimeStepper[];
  interest?: number;
  customStyle?: React.CSSProperties;
}) {
  return (
    <TimeStepperWrapper style={{ ...customStyle }}>
      {data.map((item, index) => {
        return (
          <React.Fragment key={`time-stepper-${index}`}>
            <ItemWrapper>
              <Rect />
              <Item>
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </Item>
            </ItemWrapper>
            {index !== data.length - 1 && <Line />}
          </React.Fragment>
        );
      })}

      <EstAPR>
        <span className="label">Est. APR</span>
        <span className="value">{Number(interest).toFixed(2)}%</span>
      </EstAPR>
    </TimeStepperWrapper>
  );
}
