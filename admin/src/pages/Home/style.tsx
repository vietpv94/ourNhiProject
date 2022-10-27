import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  & * {
    font-family: "SF Pro Display" !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: calc(100vh - 100px);
  width: 100%;
  padding: 20px;
  padding-bottom: 0;
  gap: 20px;
`;

