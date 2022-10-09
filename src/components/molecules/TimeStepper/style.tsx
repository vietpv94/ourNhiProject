import styled from "styled-components";

export const TimeStepperWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
  }
  & > .value {
    color: #1e1e20;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const Line = styled.div`
  position: relative;
  width: 2px;
  height: 30px;
  background: #0ecb81;
  margin-left: 3px;
`;

export const Rect = styled.div`
  position: relative;
  width: 9px;
  height: 9px;
  background: #00a3ff;
`;

export const EstAPR = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    color: #53ba95;
    font-weight: 400;
    font-size: 14px;
  }
`;
