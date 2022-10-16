import * as React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Card, IBox } from "./Card";
import { useXarrow, xarrowPropsType } from "react-xarrows";
export interface IBinaryMLMProps {}
import Xarrow, { Xwrapper } from "react-xarrows";
import { ZoomInIcon } from "@Components/atoms/icon/zoomIn";
import { ZoomOutIcon } from "@Components/atoms/icon/zoomOut";
import { Tools } from "./style";
import { ResetIcon } from "@Components/atoms/icon/reset";
import { MouseIcon } from "@Components/atoms/icon/mouse";
import { box0 } from "./initData";

type Props<T> = {
  [Property in keyof T]?: T[Property];
};

export function BinaryMLM(props: IBinaryMLMProps) {
  const [isMoveable, setIsMoveable] = React.useState<boolean>(false);
  const updateXarrow = useXarrow();
  const [boxes, setBoxes] = React.useState<{ [key: string]: IBox }>({
    [box0.id]: box0,
  });
  const [allBox, setAllBox] = React.useState<IBox[][]>([[box0]]);
  const boxWidth = 200;
  const boxSpaceX = 100;
  const boxHeight = 187;
  const boxSpaceY = 150;
  const centerX = 500;
  const Y0 = 50;
  const addNewBox = (boxPrev: IBox) => {
    const maxId = Math.max(...Object.keys(boxes).map((id) => parseInt(id)));
    const id = maxId + 1;
    const level = boxPrev.level + 1;
    if (level >= allBox.length) {
      const newLevel: IBox[] = [];
      allBox.push(newLevel);
    }
    const allBoxLevel = allBox[level];
    const newBox: IBox = {
      type: "choose",
      id: id.toString(),
      children: [],
      x: 0,
      y: 0,
      parentId: boxPrev.id,
      index: boxPrev.children.length,
      level: level,
      data: {
        title: id.toString(),
        left: {
          num: 0,
          sum: 0,
        },
        right: {
          num: 0,
          sum: 0,
        },
        packageValue: 0,
        total: 0,
      },
    };
    allBoxLevel.push(newBox);
    allBoxLevel.sort((a, b) => {
      const aParentIndex = boxes[a.parentId].index;
      const bParentIndex = boxes[b.parentId].index;
      return aParentIndex - bParentIndex;
    });
    allBoxLevel.forEach((box, index) => {
      box.index = index;
    });
    const totalX =
      allBoxLevel.length * boxWidth + (allBoxLevel.length - 1) * boxSpaceX;
    const leftMostX = centerX - totalX / 2;
    allBoxLevel.forEach((box, index) => {
      box.x = leftMostX + index * (boxWidth + boxSpaceX);
      box.y = Y0 + level * (boxHeight + boxSpaceY);
    });
    setBoxes((prev) => {
      return {
        ...prev,
        [newBox.id]: newBox,
      };
    });
    setAllBox([...allBox]);
    boxPrev.children.push(newBox.id);
  };

  const defaultPropsArrow: Props<xarrowPropsType> = {
    startAnchor: "bottom",
    endAnchor: "top",
    curveness: 0.8,
    strokeWidth: 3,
    headSize: 5,
    dashness: true,
  };
  return (
    <>
      <TransformWrapper
        initialScale={1}
        disabled={isMoveable}
        minScale={0.5}
        maxScale={2}
        limitToBounds={false}
        onPanning={updateXarrow}
        onZoom={updateXarrow}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <Tools>
              <ZoomInIcon onClick={() => zoomIn()} />
              <ZoomOutIcon onClick={() => zoomOut()} />
              <ResetIcon onClick={() => resetTransform()} />
              <MouseIcon onClick={() => setIsMoveable(true)} />
            </Tools>
            <TransformComponent
              contentClass="main"
              wrapperStyle={{
                height: "650px",
                width: "100%",
                display: "flex",
                background: "#94949413",
              }}
            >
              <div>
                {allBox.map((boxLevel, index) => {
                  return (
                    <div key={index}>
                      {boxLevel.map((box, index) => {
                        return (
                          <Card
                            key={box.id}
                            box={box}
                            addNewBox={addNewBox}
                            setIsMoveable={setIsMoveable}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </TransformComponent>
            <Xwrapper>
              {Object.keys(boxes).map((id) => {
                const box = boxes[id];
                return box.children.map((childId) => {
                  const child = boxes[childId];
                  return (
                    <Xarrow
                      key={id + childId}
                      start={id}
                      end={childId}
                      {...defaultPropsArrow}
                    />
                  );
                });
              })}
            </Xwrapper>
          </React.Fragment>
        )}
      </TransformWrapper>
    </>
  );
}