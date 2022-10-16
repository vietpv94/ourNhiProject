import styled from "styled-components";

export const StakeSuccessfulWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #37373b;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    font-weight: 600;
    font-size: 16px;
    color: #53ba95;
  }
`;
