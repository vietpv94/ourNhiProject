import * as React from "react";
import { Main, TokenSelectorWrapper } from "./style";
import sol from "@Assets/images/molecules/token/sol.png";
import dot from "@Assets/images/molecules/token/dot.png";
import matic from "@Assets/images/molecules/token/matic.png";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
export interface ITokenSelectorProps {}

interface ITokenData {
  name: string;
  network: string;
  value: number;
  icon: string;
}
const dataToken: ITokenData[] = [
  {
    name: "SOL",
    network: "SOLANA",
    value: 33.86,
    icon: sol,
  },
  {
    name: "DOT",
    network: "POLKADOT",
    value: 33.86,
    icon: dot,
  },
  {
    name: "MATIC",
    network: "POLYGON",
    value: 33.86,
    icon: matic,
  },
];
export function TokenSelector(props: ITokenSelectorProps) {
  const [activeToken, setActiveToken] = React.useState(dataToken[0]);
  return (
    <TokenSelectorWrapper>
      <Main>
        <img className="tokenImage" src={activeToken.icon} alt="sol" />
        <div className="right">
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
