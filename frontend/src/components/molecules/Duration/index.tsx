import { Active, DurationWrapper, Label, Num } from "./style";

export interface IDurationProps {
  type: "day" | "month" | "year";
  selected?: number;
  list: number[];
  setSelected: (value: number) => void;
  className?: string;
}

export function Duration({
  type,
  selected,
  list,
  setSelected,
  className
}: IDurationProps) {
  return (
    <DurationWrapper className={className}>
      <Label>Duration ({type}):</Label>
      <div className="num">
        {list.length &&
          list.map((item, index) => (
            <Num
              key={`list-duration-${index}`}
              className={selected === item ? "active" : ""}
              onClick={() => setSelected(item)}
            >
              {selected === item && <Active />}
              <span>{Number(Number(item) / (60 * 60 * 24 * 30)).toFixed(0)}</span>
            </Num>
          ))}
      </div>
    </DurationWrapper>
  );
}
