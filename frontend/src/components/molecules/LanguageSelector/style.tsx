import styled from "styled-components";

export const LanguageSelectorWrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 35px;
  border: 1px solid #ccedff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 7px;
  gap: 10px;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
`;

export const CountryFlag = styled.img`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
`;
