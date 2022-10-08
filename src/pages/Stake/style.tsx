import styled from "styled-components";

export const StakeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
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

export const WalletSelector = styled.div`
  cursor: pointer;
  height: 35px;
  aspect-ratio: 1;
  background: #e6f6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
