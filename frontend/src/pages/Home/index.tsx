import HomeWrapper from "./style";
import Layout from "@Pages/Layout";
import React, { useEffect, useState } from "react";
import { Header } from "@Components/molecules/HeaderHomePage";
import { Networks } from "@Components/atoms/Networks";
import { HowLidoWork } from "@Components/atoms/HowLidoWork";
import { TheDAO } from "@Components/atoms/TheDAO";
import { GrowingEcosystem } from "@Components/atoms/GrowingEcosystem";
import { Audits } from "@Components/atoms/Audits";
import { Validators } from "@Components/atoms/Validators";
import { JoinNode } from "@Components/atoms/JoinNode";
import { Stake } from "@Components/atoms/Stake";
import { Blogs } from "@Components/atoms/Blogs";
import { JoinCommunity } from "@Components/atoms/JoinCommunity";
import { Subscribe } from "@Components/atoms/Subscribe";
import { Footer } from "@Components/molecules/Footer";
import { Introduce } from "@Components/atoms/Introduce";
import { counterServices } from "@Services/index";

interface Props {}

export function HomePage(): React.ReactElement {
  const [data, setData] = useState([]);
  const loadStakingCounter = async () => {
    const { data } = await counterServices.getStakingCounter();
    setData(data);
  };

  useEffect(() => {
    loadStakingCounter();
  }, []);
  return (
    <Layout title="Liquidity for staked assets">
      <Header />
      <HomeWrapper>
        <Introduce />
        <Networks data={data} />
        <HowLidoWork />
        <TheDAO />
        <GrowingEcosystem />
        <Audits />
        <Validators />
        <JoinNode />
        <Stake />
        <Blogs />
        <JoinCommunity />
        <Subscribe />
        <Footer />
      </HomeWrapper>
    </Layout>
  );
}
export default HomePage;
