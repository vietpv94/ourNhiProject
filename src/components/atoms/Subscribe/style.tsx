import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: rgb(248, 250, 252);
  padding: 20px;
`;

export const SubscriberWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 550px;
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

export const Input = styled.div`
  background: #ffffff;
  border: 1px solid #d1d8df;
  border-radius: 10px;
  padding: 6px 6px 6px 10px;
  width: 100%;
  display: flex;
  gap: 20px;

  & > input {
    flex-grow: 1;
    outline: none;
    border: none;
  }
  & > div {
    max-width: 50px;
  }
`;

export const Privacy = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #7a8aa0;
  width: 100%;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
`;
