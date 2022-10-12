import { withModal } from "@Components/molecules/Modal";
import { StakeConFirmModal } from "@Components/molecules/Modal/components/StakeConfirm";
import { StakeSuccessful } from "@Components/molecules/Modal/components/StakeSuccessful";
import { RootState } from "@Redux/reducers";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useMedia } from "react-use";
import { Header } from "@Components/molecules/Header";
import { SideBar } from "./SideBar";
import { Flex, StakeWrapper } from "./style";

export interface IStakeProps {}

export function Stake(props: IStakeProps) {
  const { modal, data } = useSelector((state: RootState) => state.modal);
  const isMobile = useMedia(breakpoints.sm);
  return (
    <>
      <StakeWrapper>
        <Header />
        {isMobile && <SideBar />}
        <Flex>
          {!isMobile && <SideBar />}
          <Outlet />
        </Flex>
      </StakeWrapper>
      {modal === "stake-confirm" &&
        withModal(() => {
          return <StakeConFirmModal selectedPack={data.selectedPack} />;
        })}
      {modal === "stake-successful" &&
        withModal(() => {
          return (
            <StakeSuccessful successStakingPack={data.successStakingPack} />
          );
        })}
    </>
  );
}
