import styled from "styled-components";
import mask from "@Assets/images/profile/mask.png";
export const ProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  overflow-y: auto;
  overflow-x: hidden;
  & * {
    font-family: "SF Pro Display" !important;
  }
  & > .mask {
    position: absolute;
    width: 100vw;
    height: 50vh;
    background: url(${mask}) no-repeat;
    background-size: cover;
    bottom: 0;
    left: 0;
  }
`;
