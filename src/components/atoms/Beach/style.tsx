import { breakpoints } from "@Utils/theme";
import styled from "styled-components";
import beach from "@Assets/images/home/beach.png";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  padding: 20px;
  background-image: ${`url(${beach})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  overflow: hidden;
  @media ${breakpoints.sm} {
    height: 350px;
    background-size: auto 100%;
  }
`;

export const BeachWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  display: flex;
  padding-top: 60px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Plant = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  & > img:first-child {
    position: absolute;
    width: auto;
    height: 100%;
    left: -20px;
    bottom: 0;
  }
  & > img:last-child {
    position: absolute;
    width: auto;
    height: 100%;
    right: 0;
    bottom: 0;
  }
  @media ${breakpoints.sm} {
    height: 50%;
  }
`;

export const Item = styled.div`
  width: calc(100% / 3 - 20px);
  & > .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
  & > .value {
    margin-top: 4px;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
  }
  @media ${breakpoints.xs} {
    width: calc(100% / 2 - 20px);
  }
`;
