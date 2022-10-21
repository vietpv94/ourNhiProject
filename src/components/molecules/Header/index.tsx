import logo from "@Assets/images/Logo.png";
import { Button } from "@Components/atoms/Button";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { Badge } from "@Components/molecules/Badge";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import { loading, unloading } from "@Redux/actions/loading";
import { userServices } from "@Services/index";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  useWalletModal,
  WalletDisconnectButton,
  WalletModalButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { breakpoints } from "@Utils/theme";
import { color } from "highcharts";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useMedia } from "react-use";
import { WalletSelector } from "../../../pages/Stake/style";
import { Number } from "../Badge/style";
import { Hamburger } from "../HeaderHomePage/hamburger";
import {
  Container,
  Flex,
  HeaderWrapper,
  LeftMenu,
  Logo,
  Main,
  RightMenu,
} from "./style";
export interface IHeaderProps {}

interface IMenuItem {
  id: number;
  name: string;
  link: string;
}
const dataMenu: IMenuItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/stake",
  },
  // {
  //   id: 2,
  //   name: "marketing",
  //   link: "/marketing"
  // },
  // {
  //   id: 3,
  //   name: "support",
  //   link: "/support"
  // },
  {
    id: 4,
    name: "FAQ",
    link: "/faq",
  },
];
export function Header(props: IHeaderProps) {
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);
  const isTablet = useMedia(breakpoints.sm);
  const dispatch = useDispatch();
  const loadProfile = async () => {
    dispatch(loading());
    await userServices.getProfile();
    dispatch(unloading());
  };
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!event.defaultPrevented) setVisible(!visible);
    },
    [setVisible, visible]
  );
  useEffect(() => {
    loadWalletBalance();
  }, [connected]);

  const loadWalletBalance = async () => {
    if (!connection || !publicKey) return;
    dispatch(loading());
    const balance = await connection.getBalance(publicKey);
    setBalance(balance / LAMPORTS_PER_SOL);
    dispatch(unloading());
  };
  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        {isTablet ? (
          <Flex>
            <Badge />
            <Hamburger />
          </Flex>
        ) : (
          <Main>
            <LeftMenu>
              {dataMenu.map((item) => (
                <Link key={`li-${item.id}`} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </LeftMenu>
            <RightMenu>
              <Badge />
              <Profile />
              {connected ? (
                <WalletDisconnectButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        height: "16px",
                        color: "#000",
                      }}
                    >
                      {balance.toFixed(2)} SOL
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#ccc",
                      }}
                    >
                      {publicKey?.toBase58().slice(0, 6)}...
                      {publicKey?.toBase58().slice(-4)}
                    </div>
                  </div>
                </WalletDisconnectButton>
              ) : (
                <WalletSelector onClick={handleClick}>
                  <WalletIcon color="#00a3ff" />
                </WalletSelector>
              )}
              <LanguageSelector />
            </RightMenu>
          </Main>
        )}
      </HeaderWrapper>
    </Container>
  );
}
