import styled from "styled-components";
import { breakpoints } from "@Utils/theme";
export const Section = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: rgb(248, 250, 252);
  padding-top: 60px;
`;

export const StakeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  @media ${breakpoints.md} {
    max-width: 520px;
  }
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
  justify-content: center;
  margin-top: 20px;
`;
export const Card = styled.div`
  width: calc(100% / 5 - 20px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(221 224 231) 0px 8px 32px;
  border-radius: 20px;
  @media ${breakpoints.md} {
    align-items: center;
    width: calc(100% / 3 - 20px);
  }
  @media ${breakpoints.xs} {
    width: calc(100% / 2 - 20px);
  }
  & > img {
    height: 64px;
    width: auto;
  }
  & > .value {
    margin-top: 16px;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    text-align: center;
    color: rgb(39, 56, 82);
  }
  & > .label {
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgb(122, 138, 160);
  }
  & > .btn {
    width: 100%;
    margin-top: 16px;
  }
`;
