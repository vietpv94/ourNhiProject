import * as React from "react";
import { Header, Main, Mask, Range, Wrapper } from "./style";
import mask from "@Assets/images/molecules/level/mask.png";
import { StarIcon } from "./starIcon";
import { SmallStarIcon } from "@Components/atoms/icon/star";
export interface ICardLevelState {
  level: number;
  status: "done" | "pending" | "disabled";
  nextLevel: number;
  completed: number;
  total: number;
  data: {
    index: number;
    name: string;
    value: string;
    done: boolean;
  }[];
}
export interface ICardLevelProps {
  data: ICardLevelState;
}

export function CardLevel({ data }: ICardLevelProps) {
  return (
    <Wrapper>
      {data.status === "done" && <Mask src={mask} alt="mask" />}
      <Main>
        <Header>
          <StarIcon level={data.status !== "disabled" ? data.level : 0} />
          <div className="text">
            <div className="title">Level {data.level}</div>
            <div className="sub-title">
              {data.status === "done"
                ? "Completed"
                : `${data.nextLevel} points to next level`}
            </div>
          </div>
        </Header>
        <Range completed={data.completed / data.total}>
          <div className="base"></div>
          <div className="text">
            <SmallStarIcon />
            <span>{`${data.completed} / ${data.total}`}</span>
          </div>
          <div className="from">
            <span>{data.level}</span>
          </div>
          <div className="process"></div>
          <div className="to">
            <span>{data.level + 1}</span>
          </div>
        </Range>
      </Main>
    </Wrapper>
  );
}
