import { Item, ItemWrapper, Line, Rect, TimeStepperWrapper } from "./style";

export interface ITimeStepperProps {}

interface ITimeStepper {
  label: string;
  value: string;
}
export function TimeStepper({ data }: { data: ITimeStepper[] }) {
  return (
    <TimeStepperWrapper>
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
    </TimeStepperWrapper>
  );
}
