import styled from "styled-components";
import { breakpoints } from "@Utils/theme";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: rgb(39, 56, 82);
`;

export const AuditWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  padding-top: 60px;
  padding-bottom: 60px;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

export const List = styled.div`
  margin-top: 24px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.div`
  width: calc(100% / 3 - 20px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 32px 30px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 25%) 0px 12px 46px;
  border-radius: 20px;
  & > .description {
    flex: 1;
    font-size: 14px;
    line-height: 24px;
    color: rgb(122, 138, 160);
  }
  & > .see-report {
    margin-top: 52px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: rgb(0, 163, 255);
  }
  @media ${breakpoints.md} {
    width: 100%;
  }
`;
