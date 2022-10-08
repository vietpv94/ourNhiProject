import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 24px;
  .number {
    font-family: Roboto;
    font-size: 12px;
    line-height: 16px;
    background: #232323;
    border-radius: 50%;
    color: #9a9a9a;
    width: 16px;
    height: 16px;
    text-align: center;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 1px;
      height: 50px;
      background: #232323;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  .active {
    h3 {
      color: #fff;
    }
    .number {
      background: #00A3FF;
      color: #fff;
    }
  }
`;
const Item = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  cursor: pointer;
  h3 {
    color: #9a9a9a;
    font-family: Roboto;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
  &:last-child {
    color: red;
    .number:after {
      display: none;
    }
  }
`;

export interface IStepProps {
  currentStep: number;
  handleStepChange: (() => void);
}

export const Steps: React.FC<IStepProps> = ({
  currentStep,
  handleStepChange
}) => {
  const stepsConfig = [
    {
      title: "Create an account",
      number: 1
    },
    {
      title: "Email Verification",
      number: 2
    },
    {
      title: "Complete",
      number: 3
    }
  ];
  return (
    <Content>
      {stepsConfig.map((step, index) => (
        <Item
          className={currentStep === step.number ? "active" : ""}
          key={index}
          onClick={() => {
            if (currentStep > step.number) {
              handleStepChange();
            }
          }}
        >
          <div className="number">{step.number}</div>
          <h3>{step.title}</h3>
        </Item>
      ))}
    </Content>
  );
};
