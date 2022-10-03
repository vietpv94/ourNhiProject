import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: rgb(248, 250, 252);
  padding: 20px;
`;

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgb(39, 56, 82);
    opacity: 0.1;
    top: 0;
    left: 0;
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgb(39, 56, 82);
    opacity: 0.1;
    bottom: 0;
    left: 0;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px 0;
`;

export const Col = styled.div`
  width: calc(100% / 6 - 20px);
  & > .title {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: rgb(39, 56, 82);
    text-transform: capitalize;
  }
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
      opacity: 0.7;
      font-size: 14px;
      line-height: 30px;
      color: rgb(122, 138, 160);
    }
  }
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  gap: 20px;
  & > .text {
    margin-left: 20px;
    opacity: 0.7;
    font-size: 14px;
    line-height: 30px;
    color: rgb(122, 138, 160);
    & > span {
      margin-right: 20px;
      &:first-child {
        &:after {
          content: "|";
          margin-left: 20px;
        }
      }
    }
  }
`;
