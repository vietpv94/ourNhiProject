import styled from "styled-components";
import { breakpoints } from "@Utils/theme";
export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 60px 20px;
`;

export const ValidatorsWrapper = styled.div`
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 24px;
  align-items: center;
  & > .image {
    padding: 20px 0;
    width: calc(100% / 6 - 30px);
    position: relative;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  @media ${breakpoints.md} {
    & > .image {
      width: calc(100% / 5 - 30px);
    }
  }
  @media ${breakpoints.xs} {
    & > .image {
      width: calc(100% / 2 - 30px);
    }
  }
`;
