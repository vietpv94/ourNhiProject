import { StakeIcon } from '../HowLidoWork/icon/stake';
import { CurveIcon } from './icon/curve';
import { MakerDaoIcon } from './icon/makerDao';
import { AAVEIcon } from './icon/aave';
import { LedgerIcon } from './icon/ledger';
import { SushiSwapIcon } from './icon/sishiSwap';
import { OneInchIcon } from './icon/Oneinch';
import { FTXIcon } from './icon/ftx';

export interface DataEcosystem {
	  title: string;
	  description: string;
	  icon: React.ReactNode;
}

export const DataGrowingEcosystem: DataEcosystem[] = [
  {
    title: "Stake ether",
    description: "Stake your ether on Lido and earn stETH tokens.",
    icon: <StakeIcon />,
  },
  {
	title: "curve",
	description: "Exchange liquidity pool on Ethereum designed for efficient stablecoin trading",
	icon: <CurveIcon />,
  },
  {
	title: "makerDao",
	description: "MakerDAO lets you use your digital tokens as collateral for loans.",
	icon: <MakerDaoIcon />,
  },
  {
	title: "AAVE",
	description: "Aave is an open-source protocol to earn interest on deposits and borrow assets.",
	icon: <AAVEIcon />,
  },
  {
	title: "Ledger",
	description: "Stake with Lido from the security of your Ledger wallet.",
	icon: <LedgerIcon />,
  },
  {
	title: "SushiSwap Onsen",
	description: "SushiSwap Onsen lets users stake their tokens for daily liquidity rewards.",
	icon: <SushiSwapIcon />,
  },
  {
	title: "1inch",
	description: "DEX agregator sourcing the best prices across the market.",
	icon: <OneInchIcon />,
  },
  {
	title: "FTX",
	description: "A licensed cryptocurrency exchange.",
	icon: <FTXIcon />,
  },

];