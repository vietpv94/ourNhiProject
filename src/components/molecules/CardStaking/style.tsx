import styled from "styled-components";

export const CardStakingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 12px 32px;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  &.active {
    border: 1px solid #00a3ff;
  }
`;

export const Logo = styled.img`
  width: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const Amount = styled.div`
  color: #53ba95;
  font-weight: 600;
  font-size: 28px;
`;

export const Percent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  &.day {
    & > .percent {
      color: #74b465;
    }
    /* &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 2px;
      background-color: #e6e6e6;
      height: calc(100% - 20px);
    } */
  }
  & > .percent {
    color: #2a3751;
    font-weight: 600;
    font-size: 12px;
  }

  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 10px;
  }
`;

export const Bulkhead = styled.div`
  width: 2px;
  background-color: #e6e6e6;
  height: 40px;
`;

export const TotalStaker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .label {
      color: #8c8c92;
      font-weight: 400;
      font-size: 10px;
    }
    & > .value {
      color: #2a3751;
      font-weight: 600;
      font-size: 10px;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin: 5px 0;
`;

export const Mask = styled.img`
  position: absolute;
  top: 10%;
  left: 0%;
  width: 50%;
  transform: translateX(-50%);
  &.right {
    left: 100%;
  }
`;
