import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { Badge } from "@Components/molecules/Badge";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import { TokenSelector } from "@Components/molecules/TokenSelector";
import { breakpoints } from "@Utils/theme";
import { useMedia } from "react-use";
import { WalletSelector } from "../style";
import { dataSideBar } from "./data";
import { LineSvg } from "./line";
import {
  ChildItem,
  ChildMenu,
  Item,
  Main,
  SideBarHeader,
  SideBarWrapper,
} from "./style";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { openSideBar } from "@Redux/actions/home";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@Components/atoms/Button";
import { setModal } from "@Redux/actions/modal";
import {
  useWalletModal,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { userServices } from "@Services/index";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { loading, unloading } from "@Redux/actions/loading";

export interface ISideBarProps {}

export function SideBar(props: ISideBarProps) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const [activeChild, setActiveChild] = React.useState([dataSideBar[0].name]);
  const navigate = useNavigate();
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);
  const isTablet = useMedia(breakpoints.sm);
  const handleActiveChild = (name: string, link: string) => {
    navigate(link);
    if (name === "Withdraw" || name === "Deposit") {
      dispatch(
        setModal({
          modal: name.toLowerCase(),
        })
      );
    }
    if (isMobile) {
      dispatch(openSideBar(false));
    }
    if (activeChild.includes(name)) {
      setActiveChild(activeChild.filter((item) => item !== name));
    } else {
      setActiveChild([...activeChild, name]);
    }
  };
  const isMobile = useMedia(breakpoints.sm);
  useOnClickOutside(ref, () => {
    if (isMobile) {
      dispatch(openSideBar(false));
    }
  });

  const loadProfile = async () => {
    await userServices.getProfile();
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
    const balance = await connection.getBalance(publicKey);
    setBalance(balance / LAMPORTS_PER_SOL);
  };
  useEffect(() => {
    loadProfile();
  }, []);
  const isOpenSidebar = useSelector((state: any) => state.home.isOpenSidebar);
  return (
    <SideBarWrapper
      ref={ref}
      className={isOpenSidebar && isMobile ? "active" : ""}
    >
      {isMobile && (
        <SideBarHeader>
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
                    height: "60px",
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
        </SideBarHeader>
      )}
      <Main>
        {dataSideBar.map((item, index) => (
          <React.Fragment key={`sidebar-${index}`}>
            <Item
              className={
                pathname.includes(item.link) &&
                item.name !== "Deposit" &&
                item.name !== "Withdraw"
                  ? "active"
                  : ""
              }
              onClick={() => handleActiveChild(item.name, item.link)}
            >
              {item.icon}
              <div className="right">
                <span className="name">{item.name}</span>
                {item.children && (
                  <ArrowIcon
                    direction={activeChild.includes(item.name) ? "up" : "down"}
                    style="outline"
                  />
                )}
              </div>
            </Item>
            <ChildMenu>
              {item.children &&
                activeChild.includes(item.name) &&
                item.children.map((item, index) => (
                  <ChildItem
                    key={`sidebar-child-${index}`}
                    className={pathname.includes(item.link) ? "active" : ""}
                    onClick={() => handleActiveChild(item.name, item.link)}
                  >
                    <LineSvg />
                    <span className="name">{item.name}</span>
                  </ChildItem>
                ))}
            </ChildMenu>
          </React.Fragment>
        ))}
      </Main>
      <div
        style={{
          padding: "20px",
        }}
      >
        <TokenSelector />
      </div>
    </SideBarWrapper>
  );
}
