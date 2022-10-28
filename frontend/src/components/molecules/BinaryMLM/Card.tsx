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

import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { userServices } from "@Services/index";
import { useDispatch } from "react-redux";
import { loading, unloading } from "@Redux/actions/loading";

export const Dropdown = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(30% + 12px);
  left: 50%;
  width: 90%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #f8fafc;
  border-radius: 8px;
`;

export const Item = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  & > span {
    color: #37373b;
  }
  &:hover {
    background: #e6f6ff;
    & > span {
      color: #00a3ff;
    }
    & > svg > path {
      stroke: #00a3ff !important;
    }
  }
`;

export interface IBox {
  id: string;
  x: number;
  y: number;
  type: "choose" | "card";
  childF1s: string[];
  children: string[];
  parentId: string;
  index: number;
  level: number;
  binaryChildCandidate?: string[];
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
    level: number;
    packageValue: number;
    total: number;
  };
}
export interface ICardProps {
  box: IBox;
  setIsMoveable: React.Dispatch<React.SetStateAction<boolean>>;
  addNewBox: (box: IBox) => void;
  onAddChildSucceed: () => void;
}

export function Card({
  box,
  setIsMoveable,
  addNewBox,
  onAddChildSucceed,
}: ICardProps) {
  const updateXarrow = useXarrow();
  const ref = React.useRef(null);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [chosenOne, setChosenOne] = useState<string>();
  const onDrag = () => {
    setIsMoveable(true);
    updateXarrow();
  };
  const onStop = () => {
    setIsMoveable(false);
    updateXarrow();
  };

  const confirmAddBinaryChild = async () => {
    if (!chosenOne) return toast.warn("Please select one member to continue");
    dispatch(loading());
    const { data } = await userServices.setBinaryChild({
      fromId: Number(box.parentId),
      email: chosenOne,
      type: box.index,
    });
    dispatch(unloading());
    if (data) {
      onAddChildSucceed();
    }
  };

  return (
    <CardWrapper
    ref={ref}
    id={box.id}
    style={{ position: "absolute", left: box.x, top: box.y }}
  >
    {box.type === "card" ? (
      <>
        <Header>
          <PersonIcon color="#fff" />
          <span>{box.data.title}</span>
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
            <StarIcon level={box.data.level} />
            <div className="content">
              <span className="label">Level {box.data.level}</span>
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
          <div className="label">Max Bonus</div>
          <span>${box.data.total}</span>
        </Footer>{" "}
        <Icon>
          <AddIcon
            onClick={() => {
              addNewBox(box);              
            }}
          />
        </Icon>
      </>
    ) : (
      <>
        <ChooseWrapper>
          <Header>
            <span>Open position</span>
          </Header>
          <Input>
            <span>{chosenOne ? chosenOne : "Choose a member"}</span>
            <PlusIcon
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            />
          </Input>
          {showDropdown && (
            <Dropdown ref={ref}>
              {box.binaryChildCandidate &&
                box.binaryChildCandidate.map((item) => (
                  <Item
                    onClick={() => {
                      setChosenOne(item);
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    <span>{item}</span>
                  </Item>
                ))}
            </Dropdown>
          )}
          <Button
            type="blue"
            text="Confirm"
            customStyle="width: 100%; height: 30px;"
            onClick={() => {
              confirmAddBinaryChild();
            }}
          />
        </ChooseWrapper>
      </>
    )}
  </CardWrapper>
  );
}
