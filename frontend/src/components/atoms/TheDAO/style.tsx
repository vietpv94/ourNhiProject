import styled from "styled-components";
import { breakpoints } from "@Utils/theme";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 20px;
`;
export const TheDAOWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  max-width: 896px;
  padding: 40px 52px;
  background: rgb(248, 250, 252);
  border-radius: 20px;
  margin-top: 90px;
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
  @media ${breakpoints.xs} {
    & > br {
      display: none;
    }
  }
`;

export const ListButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  & > div {
    min-width: 280px;
  }
  @media ${breakpoints.xs} {
    flex-direction: column;
    justify-content: center;
  }
`;
