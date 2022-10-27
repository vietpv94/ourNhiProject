import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;
  gap: 15px;
  border: 1px solid #99daff;
  border-radius: 20px;
  background: #ffffff;
  overflow: hidden;
  &:hover {
    background: #e6f6ff;
  }
  & > .icon {
  }
  & > .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    & > .title {
      color: #4a65ef;
      font-weight: 400;
      font-size: 14px;
      text-transform: capitalize;
      position: relative;
      z-index: 1;
    }
    & > .value {
      color: #333333;
      font-weight: 600;
      font-size: 28px;
      position: relative;
      z-index: 1;
    }
    & > .percent {
      font-weight: 400;
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 3px;
      position: relative;
      z-index: 1;
    }
    & > .mask {
      position: absolute;
      transform: rotate(-30deg);
      bottom: -20px;
      right: -20px;
      z-index: 0;
    }
  }
`;
