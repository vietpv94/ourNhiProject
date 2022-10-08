import { Active, DurationWrapper, Label, Num } from "./style";

export interface IDurationProps {
  type: "day" | "month" | "year";
  selected: number;
  list: number[];
  setSelected: (value: number) => void;
}

export function Duration({
  type,
  selected,
  list,
  setSelected,
}: IDurationProps) {
  return (
    <DurationWrapper>
      <Label>Duration ({type}):</Label>
      {list.map((item, index) => (
        <Num
          key={index}
          className={selected === item ? "active" : ""}
          onClick={() => setSelected(item)}
        >
          {selected === item && <Active />}
          <span>{item}</span>
        </Num>
      ))}
    </DurationWrapper>
  );
}
