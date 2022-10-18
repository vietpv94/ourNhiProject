import Swap from "@project-serum/swap-ui";
import {
  TokenInfo,
  TokenListContainer,
  TokenListProvider
} from "@solana/spl-token-registry";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { ConfirmOptions, Connection, PublicKey } from "@solana/web3.js";
import _ from "lodash";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import NotifyingProvider from "./NotifyingProvider";
import { useWallet } from "@solana/wallet-adapter-react";

interface Props {
  ioValue: number;
  dollarValue: number;
  onClose: () => void;
}

const MainSerum = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LIDO_MINT = new PublicKey(
  "HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p"
);
export const USDC_MINT = new PublicKey(
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);
export function LidoSwap() {
  const dispatch = useDispatch();
  const wallet = useWallet();
  const listToken: TokenInfo[] = [
    {
      chainId: 101,
      address: "HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p",
      symbol: "LDO",
      name: "Lido DAO Token (Portal)",
      decimals: 8,
      logoURI:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p/logo.png",
      tags: ["wrapped", "ethereum"],
      extensions: {
        address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
        assetContract:
          "https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32",
        bridgeContract:
          "https://etherscan.io/address/0x3ee18B2214AFF97000D974cf647E7C347E8fa585",
        coingeckoId: "lido-dao",
        serumV3Usdt: "DZWSgCDNK2KhHKctAHG7AtUpsUPH6JtMwCsd6jHBJXib",
        twitter: "https://twitter.com/LidoFinance",
        website: "https://lido.fi/"
      }
    },
    {
      chainId: 101,
      address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      logoURI:
        "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
      tags: ["stablecoin"],
      extensions: {
        coingeckoId: "usd-coin",
        serumV3Usdt: "77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS",
        website: "https://www.centre.io/"
      }
    }
  ];

  const [tokenList, setTokenList] = useState<TokenListContainer | null>(null);
  const [provider] = useMemo(() => {
    const opts: ConfirmOptions = {
      preflightCommitment: "recent",
      commitment: "recent"
    };
    const customRpcUrls = [
      "https://api.mainnet-beta.solana.com",
      "https://solana-api.projectserum.com"
    ];
    const network =
      _.sample(customRpcUrls) || "https://solana-api.projectserum.com";
    const connect = new Connection(network, opts.preflightCommitment);

    const provider = new NotifyingProvider(
      connect,
      wallet,
      opts,
      (tx, err) => {
        if (err) {
          return toast.error(`Error: ${err.toString()}`);
        } else {
          return toast.info(
            `Transaction sent, View on Solana Explorer: https://explorer.solana.com/tx/${tx}`
          );
        }
      },
      dispatch
    );
    return [provider];
  }, []);

  useEffect(() => {
    const tokenListContainer = new TokenListContainer(listToken);

    setTokenList(tokenListContainer);
  }, [setTokenList]);
  useEffect(() => {
    new TokenListProvider().resolve().then((tokens) => {
      const tokenList = tokens.filterByClusterSlug("mainnet-beta").getList();

      console.log(tokenList.filter((o) => o.symbol === "LDO"));
    });
  }, [setTokenList]);

  return (
    <MainSerum>
      {tokenList && (
        <Swap
          fromMint={LIDO_MINT}
          toMint={USDC_MINT}
          provider={provider}
          tokenList={tokenList}
        />
      )}
    </MainSerum>
  );
}
