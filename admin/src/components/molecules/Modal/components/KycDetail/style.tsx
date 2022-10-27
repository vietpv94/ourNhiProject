import styled from "styled-components";

export const DepositWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.div`
  color: #000000;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #37373b;
  margin-bottom: 16px;
`;

export const QRCode = styled.div`
  width: 190px;
  height: 190px;
  position: relative;
  margin-bottom: 16px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
