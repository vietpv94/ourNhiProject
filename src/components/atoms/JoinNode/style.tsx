import styled from "styled-components";
import sun from "@Assets/images/home/sun.png";

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: rgb(248, 250, 252);
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${sun});
  background-size: contain;
  background-position: center center;
  z-index: 0;
`;

export const JoinNodeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: auto;
  box-shadow: rgb(212 224 236) 0px 4px 32px;
  border-radius: 20px;
  background: linear-gradient(rgb(251, 158, 153) 0%, rgb(235, 197, 161) 100%);
  padding: 20px;
  overflow: hidden;
  & > .main {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  margin-top: 10px;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  text-align: center;
  color: rgb(39, 56, 82);
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: rgb(39, 56, 82);
  max-width: 664px;
`;

export const Btn = styled.div`
  width: 100%;
  max-width: 240px;
  margin-top: 20px;
`;
