import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(rgb(243, 130, 123) 0%, rgb(234, 235, 161) 100%);
  padding: 20px;
  overflow: hidden;
`;

export const IntroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakpoints.xs} {
    height: 500px;
  }
`;

export const Main = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  @media ${breakpoints.md} {
    position: absolute;
    top: 190px;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    & > .logo {
      width: 80px;
      height: auto;
    }
  }
  @media ${breakpoints.xs} {
    top: 120px;
    & > .logo {
      width: 48px;
    }
  }
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > .title {
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    color: rgb(39, 56, 82);
  }
  & > .description {
    margin-top: 8px;
    font-size: 18px;
    line-height: 28px;
    color: rgb(39, 56, 82);
  }
  & > .btn {
    margin-top: 24px;
    width: 150px;
  }
  @media ${breakpoints.md} {
    align-items: center;
  }
  @media ${breakpoints.xs} {
    & > .title {
      font-size: 26px;
      line-height: 36px;
    }
    & > .description {
      margin-top: 4px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const Mask = styled.div`
  position: absolute;
  top: 33px;
  right: -10%;
  height: 100%;
  width: 55%;
  & > .sun {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 0;
  }
  & > .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: auto;
    z-index: 1;
  }
  @media ${breakpoints.lg} {
    width: 65%;
  }
  @media ${breakpoints.md} {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 100%;
  justify-content: center;
  gap: 20px;
  @media ${breakpoints.md} {
    flex-direction: row;
  }
`;
