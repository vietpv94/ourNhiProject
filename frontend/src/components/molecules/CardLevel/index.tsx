import * as React from "react";
import { Header, Item, List, Main, Mask, Range, Wrapper } from "./style";
import mask from "@Assets/images/molecules/level/mask.png";
import { StarIcon } from "./starIcon";
import { SmallStarIcon } from "@Components/atoms/icon/star";
export type Status = "done" | "pending" | "disabled";
export interface ICardLevelState {
  level: number;
  status: Status;
  nextLevel: number;
  completed: number;
  total: number;
  data: {
    index: number;
    name: string;
    value: string;
    target: string;
    done: boolean;
  }[];
}
export interface ICardLevelProps {
  data: ICardLevelState;
}

export function CardLevel({ data }: ICardLevelProps) {
  return (
    <>
      {data && (
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
            <Range completed={data.completed / data.total} status={data.status}>
              <div className="base"></div>
              <div className="text">
                <SmallStarIcon />
                <span>
                  <span
                    className={
                      data.completed < data.total && data.completed
                        ? "hight-light"
                        : ""
                    }
                  >
                    {data.completed}
                  </span>
                  /{data.total}
                </span>
              </div>
              <div className="from">
                <span>{data.level}</span>
              </div>
              <div className="process"></div>
              <div className="to">
                <span>{data.level + 1}</span>
              </div>
            </Range>
            <List>
              {data.data.map((item, index) => {
                return (
                  <Item key={index}>
                    <SmallStarIcon
                      color={
                        data.status === "disabled"
                          ? "#C1CBD7"
                          : item.done
                          ? "#4A66EF"
                          : "#CCEDFF"
                      }
                    />
                    <div
                      className={
                        data.status === "disabled" ? "main disable" : "main"
                      }
                    >
                      <span className={item.done ? "name done" : "name"}>
                        {item.name}
                      </span>
                      <span className="value">
                        <span className={item.done? "": "hight-light"}>
                        {item.value}
                        </span>
                        /{item.target}
                        </span>
                    </div>
                  </Item>
                );
              })}
            </List>
          </Main>
        </Wrapper>
      )}
    </>
  );
}
