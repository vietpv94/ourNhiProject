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
  &:hover {
    background: #e6f6ff;
  }
  & > .icon {
  }
  & > .content {
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
      font-size: 28px;
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
