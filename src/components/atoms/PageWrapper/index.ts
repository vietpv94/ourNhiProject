import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 0 31px 0 40px;
  box-sizing: content-box;
  @media ${breakpoints.sm} {
    padding: 15px;
  }
`;

export default PageWrapper;
