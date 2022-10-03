import { StakeIcon } from './icon/stake';
import { MintIcon } from './icon/mint';
import { DefiIcon } from './icon/defi';
import CommunityIcon from './icon/community';

export interface DataHowLidoWork {
	icon: React.ReactNode;
	name: string;
	description: string;
}

export const dataHowLidoWork: DataHowLidoWork[] = [
  {
    icon: <StakeIcon />,
    name: "Stake",
    description:
      "Lido lets users stake their assets for daily staking rewards. User can stake any amount of tokens - no minimum.",
  },
  {
    icon: <MintIcon />,
    name: "Mint",
    description:
      "Lido mints stETH tokens, which are 1:1 backed by ETH. Users can use stETH to interact with DeFi protocols.",
  },
  {
    icon: <DefiIcon />,
    name: "DeFi",
    description:
      "Users can use stETH to interact with DeFi protocols. Lido is a key component of the ETH2.0 ecosystem.",
  },
  {
    icon: <CommunityIcon />,
    name: "Community",
    description:
      "Lido is a community-driven project. Users can participate in governance and earn rewards for their contributions.",
  },
];