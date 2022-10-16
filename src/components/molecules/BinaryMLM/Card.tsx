import { PersonIcon } from "@Components/atoms/icon/person";
import * as React from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import { StarIcon } from "../CardLevel/starIcon";
import {
  CardWrapper,
  ChooseWrapper,
  Footer,
  Header,
  Icon,
  Input,
  LeftRight,
  Level,
} from "./style";
import solana from "@Assets/images/home/solana.png";
import { AddIcon } from "@Components/atoms/icon/add";
import { PlusIcon } from "@Components/atoms/icon/plus";
import { Button } from "@Components/atoms/Button";
export interface IBox {
  id: string;
  x: number;
  y: number;
  type: "choose" | "card";
  children: string[];
  parentId: string;
  index: number;
  level: number;
  data: {
    title: string;
    left: {
      num: number;
      sum: number;
    };
    right: {
      num: number;
      sum: number;
    };

    packageValue: number;
    total: number;
  };
}
export interface ICardProps {
  box: IBox;
  setIsMoveable: React.Dispatch<React.SetStateAction<boolean>>;
  addNewBox: (box: IBox) => void;
}

export function Card({ box, setIsMoveable, addNewBox }: ICardProps) {
  const updateXarrow = useXarrow();
  const ref = React.useRef(null);
  const onDrag = () => {
    setIsMoveable(true);
    updateXarrow();
  };
  const onStop = () => {
    setIsMoveable(false);
    updateXarrow();
  };

  return (
    <Draggable onDrag={onDrag} onStop={onStop} defaultClassName="">
      <CardWrapper
        ref={ref}
        id={box.id}
        style={{ position: "absolute", left: box.x, top: box.y }}
      >
        {box.type === "card" ? (
          <>
            <Header>
              <PersonIcon color="#fff" />
              <span>TYPHUELC{box.data.title}</span>
            </Header>
            <LeftRight>
              <div className="left">
                <div className="flex">
                  <span className="label">Left</span>
                  <span className="value">{`0 (+${box.data.left.num})`}</span>
                </div>
                <div className="flex">
                  <span className="label">Sum</span>
                  <span className="value">{box.data.left.sum}</span>
                </div>
              </div>
              <div className="right">
                <div className="flex">
                  <span className="value">{`0 (+${box.data.left.num})`}</span>{" "}
                  <span className="label">Right</span>
                </div>
                <div className="flex">
                  <span className="value">{box.data.right.sum}</span>
                  <span className="label">Sum</span>
                </div>
              </div>
            </LeftRight>
            <Level>
              <div className="level">
                <StarIcon level={box.level} />
                <div className="content">
                  <span className="label">Level {box.level}</span>
                  <span className="status">Complete</span>
                </div>
              </div>
              <div className="package">
                <img src={solana} alt="token" />
                <div className="content">
                  <span className="label">Package</span>
                  <span className="value">{box.data.packageValue}</span>
                </div>
              </div>
            </Level>
            <Footer>
              <span>${box.data.total}</span>
            </Footer>
            <Icon>
              <AddIcon onClick={() => addNewBox(box)} />
            </Icon>
          </>
        ) : (
          <>
            <ChooseWrapper>
              <Header>
                <span>Open position</span>
              </Header>
              <Input>
                <span>Choose a member</span>
                <PlusIcon />
              </Input>
              <Button
                type="blue"
                text="Confirm"
                customStyle="width: 100%; height: 30px;"
                onClick={() => {
                  box.type = "card";
                  // Todo: call api and get data
                }}
              />
            </ChooseWrapper>
          </>
        )}
      </CardWrapper>
    </Draggable>
  );
}
