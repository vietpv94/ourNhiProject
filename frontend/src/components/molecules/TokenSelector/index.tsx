import * as React from "react";
import { Main, TokenSelectorWrapper } from "./style";
import sol from "@Assets/images/molecules/token/sol.png";
import dot from "@Assets/images/molecules/token/dot.png";
import matic from "@Assets/images/molecules/token/matic.png";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { useMemo } from "react";
export interface ITokenSelectorProps {
  dataPrice: { solPrice?: number; maticPrice?: number; dotPrice?: number };
}

interface ITokenData {
  id: number;
  name: string;
  network: string;
  value: number;
  icon: string;
}

export function TokenSelector({ dataPrice }: ITokenSelectorProps) {
  const [activeToken, setActiveToken] = React.useState({
    id: 0,
    name: "SOL",
    network: "SOLANA",
    value: dataPrice?.solPrice,
    icon: sol
  });

  const dataToken = useMemo(() => {
    return [
      {
        id: 0,
        name: "SOL",
        network: "SOLANA",
        value: dataPrice?.solPrice,
        icon: sol
      },
      { id: 1, name: "DOT", network: "POLKADOT", value: 33.86, icon: dot },
      { id: 2, name: "MATIC", network: "POLYGON", value: 33.86, icon: matic }
    ];
  }, [dataPrice]);
  return (
    <TokenSelectorWrapper>
      <Main>
        <img
          className="tokenImage"
          src={activeToken.icon}
          alt="sol"
          onClick={() => {
            setActiveToken(
              dataToken[activeToken.id == 2 ? 0 : activeToken.id + 1]
            );
          }}
        />
        <div
          className="right"
          onClick={() => {
            setActiveToken(
              dataToken[activeToken.id == 2 ? 0 : activeToken.id + 1]
            );
          }}
        >
          <div className="info">
            <span className="name">
              {activeToken.name}{" "}
              <span className="network">{activeToken.network}</span>
            </span>
            <span className="value">${activeToken.value}</span>
          </div>
          <ArrowIcon style="solid" color="#fff" direction="left" />
        </div>
      </Main>
    </TokenSelectorWrapper>
  );
}
