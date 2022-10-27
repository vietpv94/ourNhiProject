import styled from "styled-components";
import { breakpoints } from "@Utils/theme";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgb(238, 162, 125) 0%,
    rgb(255, 240, 186) 100%
  );
`;

export const NetworksWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  min-width: 320px;
  padding: 20px;
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
  margin-top: 24px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Flex = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  & > div {
    width: 50%;
  }
  & > .apr,
  .staked {
    display: flex;
    flex-direction: column-reverse;
    & > span:first-child {
      margin-top: 4px;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: rgb(122, 138, 160);
    }
    & > span:last-child {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: rgb(39, 56, 82);
    }
  }
  & > .apr {
    position: relative;
    & > span:last-child {
      color: rgb(97, 183, 95);
    }
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -10px;
      width: 2px;
      height: 40px;
      background-color: rgb(0, 0, 0);
      opacity: 0.1;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  min-width: 350px;
  width: calc(100% / 3 - 20px);
  height: 100%;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    height: 64px;
    width: auto;
  }
  & > .name {
    margin-top: 16px;
    font-size: 18px;
    line-height: 28px;
    color: rgb(39, 56, 82);
    text-transform: capitalize;
  }
  & > .description {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgb(122, 138, 160);
  }
  @media ${breakpoints.md} {
    width: calc(100% / 2 - 20px);
  }
  @media ${breakpoints.xs} {
    width: 100%;
  }
`;
