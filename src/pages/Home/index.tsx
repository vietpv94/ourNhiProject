import HomeWrapper from "./style";
import Layout from "@Pages/Layout";
import React from "react";
import { breakpoints } from "@Utils/theme";
import { useMedia } from "react-use";

interface Props {}

export function HomePage(): React.ReactElement {
  const isMobile = useMedia(breakpoints.sm);
  return (
    <Layout title="Home">
      <HomeWrapper>WELLCOME HOME</HomeWrapper>
    </Layout>
  );
}
export default HomePage;
