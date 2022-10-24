import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { WalletIcon } from "@Components/atoms/icon/wallet";
import { LanguageSelector } from "@Components/molecules/LanguageSelector";
import { Profile } from "@Components/molecules/Profile.tsx";
import { TokenSelector } from "@Components/molecules/TokenSelector";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { openSideBar } from "@Redux/actions/home";
import { loading, unloading } from "@Redux/actions/loading";
import { setModal } from "@Redux/actions/modal";
import { userServices } from "@Services/index";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  useWalletModal,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { breakpoints } from "@Utils/theme";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useMedia } from "react-use";
import { WalletSelector } from "../style";
import { dataSideBar } from "./data";
import { Hamburger } from "./Hamburger";
import { LineSvg } from "./line";
import {
  ChildItem,
  ChildMenu,
  Item,
  Main,
  Menu,
  SideBarHeader,
  SideBarWrapper,
} from "./style";

export interface ISideBarProps {}

const VariantsMenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const VariantsSidebar = {
  open: {
    width: "300px",
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 2,
    },
  },
  closed: {
    width: "80px",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export function SideBar(props: ISideBarProps) {
  const [toggle, setToggle] = React.useState(false);
  const ref = useRef(null) as any;
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const [activeChild, setActiveChild] = React.useState([dataSideBar[0].name]);
  const navigate = useNavigate();
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);
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

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const height = ref.current ? ref.current.offsetHeight : 0;
  const isOpenSidebar = useSelector((state: any) => state.home.isOpenSidebar);
  const [items, setItems] = React.useState(dataSideBar);
  return (
    <SideBarWrapper
      ref={ref}
      className={isOpenSidebar && isMobile ? "active" : toggle ? "toggle" : ""}
      custom={height}
      variants={VariantsSidebar}
      animate={toggle || isMobile ? "open" : "closed"}
    >
      {!isMobile && <Menu variants={VariantsMenu} onClick={handleToggle} />}
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
      {(toggle || isMobile) && (
        <Main
          variants={VariantsMenu}
          axis="y"
          onReorder={setItems}
          values={items}
        >
          <div className="group">
            {" "}
            {items.map((item, index) => (
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
                        direction={
                          activeChild.includes(item.name) ? "up" : "down"
                        }
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
            ))}{" "}
          </div>
          <div className="select-token">
            <TokenSelector />
          </div>
        </Main>
      )}
      {!isMobile && <Hamburger toggle={handleToggle} />}
    </SideBarWrapper>
  );
}
