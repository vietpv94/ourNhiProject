import styled from "styled-components";
import { breakpoints } from "@Utils/theme";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 20px;
`;

export const HowLidoWorkWrapper = styled.div`
  padding-top: 60px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
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
  justify-content: center;
`;
export const Card = styled.div`
  width: calc(100% / 4 - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media ${breakpoints.md} {
    width: calc(100% / 2 - 20px);
  }
  @media ${breakpoints.xs} {
    width: 100%;
  }
`;
