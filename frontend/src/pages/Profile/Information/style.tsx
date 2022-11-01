import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  & > .title {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 28px;
  }
`;

export const Title = styled.div`
  width: 100%;
  background: #e6f6ff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  & > div {
    font-weight: 600;
    font-size: 14px;
    color: #27272a;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;
    gap: 20px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
  & > .icon {
  }
`;

export const UL = styled.ul`
  list-style: auto;
  padding-left: 10px;
  & > li {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #616161;
  }
`;

export const ReviewTime = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;
  & > span {
    color: #4a65ef;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  @media ${breakpoints.xs} {
    flex-direction: column;
  }
`;

export const QR = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  & > span {
    color: #00a3ff;
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
  }
`;
