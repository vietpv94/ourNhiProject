import {
  EstAPR,
  Item,
  ItemWrapper,
  Line,
  Rect,
  TimeStepperWrapper,
} from "./style";

export interface ITimeStepperProps {}

interface ITimeStepper {
  label: string;
  value: string;
}
export function TimeStepper({
  data,
  customStyle,
}: {
  data: ITimeStepper[];
  customStyle?: React.CSSProperties;
}) {
  return (
    <TimeStepperWrapper style={{ ...customStyle }}>
      {data.map((item, index) => {
        return (
          <>
            <ItemWrapper>
              <Rect />
              <Item>
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </Item>
            </ItemWrapper>
            {index !== data.length - 1 && <Line />}
          </>
        );
      })}

      <EstAPR>
        <span className="label">Est. APR</span>
        <span className="value">1.39%</span>
      </EstAPR>
    </TimeStepperWrapper>
  );
}
