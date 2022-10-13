import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 30px 40px;
  gap: 15px;
  & > .icon {
    height: 85px;
    width: 85px;
    border-radius: 50%;
    background: #e6f6ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .content {
    min-height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 7px;
    & > .title {
      color: #4a65ef;
      font-weight: 400;
      font-size: 14px;
      text-transform: capitalize;
    }
    & > .value {
      color: #333333;
      font-weight: 600;
      font-size: 32px;
    }
    & > .percent {
      font-weight: 400;
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;
