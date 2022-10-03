import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: rgb(248, 250, 252);
  padding: 20px;
`;

export const JoinCommunityWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 928px;
  min-width: 320px;
  margin: auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: rgb(39, 56, 82);
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: rgb(39, 56, 82);
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div<{ isHover?: boolean; color: string }>`
  width: calc(50% - 20px);
  display: flex;
  background: ${(props) =>
    props.isHover ? props.color : "rgb(255, 255, 255)"};
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.01), 3px 2px 3px rgba(0, 0, 0, 0.02),
    1px 0px 2px rgba(0, 0, 0, 0.02), 0px 0px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  cursor: pointer;
  padding: 25px;
  gap: 20px;
  & > .content {
    & > .title {
      color: ${({ isHover }) => (isHover ? "rgb(255, 255, 255)" : "#2A3751")};
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    & > .description {
      margin-top: 4px;
      font-size: 14px;
      line-height: 22px;
      color: ${({ isHover }) => (isHover ? "rgb(255, 255, 255)" : "#8C8C92")};
    }
  }
  transition: all 0.3s ease 0s;
  @media ${breakpoints.xs} {
    width: calc(100% - 20px);
  }
`;
