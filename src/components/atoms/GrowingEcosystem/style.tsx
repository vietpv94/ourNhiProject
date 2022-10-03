import styled from "styled-components";
import { breakpoints } from "@Utils/theme";

export const Section = styled.section`
  width: 100%;
  background-color: rgb(248, 250, 252);
`;

export const GrowingEcosystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  border-radius: 20px;
  margin-top: 90px;
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
  @media ${breakpoints.xs} {
    & > br {
      display: none;
    }
  }
`;

export const List = styled.div`
  margin-top: 24px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px 32px;
  border-radius: 20px;
  width: calc(100% / 3 - 20px);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(221 224 231) 0px 8px 32px;
  border-radius: 20px;
  cursor: pointer;
  @media ${breakpoints.md} {
    width: calc(100% / 2 - 20px);
  }
  @media ${breakpoints.xs} {
    width: 100%;
  }
  & > .content {
    & > .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: rgb(39, 56, 82);
    }
    & > .description {
      margin-top: 6px;
      font-size: 14px;
      line-height: 24px;
      color: rgb(122, 138, 160);
    }
  }
`;

export const ViewAllCard = styled(Card)`
  justify-content: space-between;
  align-items: center;
  & > .content {
    & > .title {
      font-size: 26px;
      line-height: 38px;
    }
  }
  & > .view-all {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: rgb(0, 163, 255);
  }
`;
