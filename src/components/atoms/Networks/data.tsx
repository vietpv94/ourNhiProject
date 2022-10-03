import ethereum from "@Assets/images/home/ethereum.png";
import solana from "@Assets/images/home/solana.png";
import polygon from "@Assets/images/home/polygon.png";
import pokadot from "@Assets/images/home/pokadot.png";
import kusama from "@Assets/images/home/kusama.png";

export interface SupportedNetworkCard {
  icon: string;
  name: string;
  description: string;
  apr: number;
  staked: number;
}

export const dataSupportedNetworks: SupportedNetworkCard[] = [
  {
    name: "ethereum",
    icon: ethereum,
    description:
      "Stake any amount of ETH and earn daily staking rewards. Put your staked ETH to work across DeFi to compound your yield.",
    apr: 5.5,
    staked: 1000000,
  },
  {
    name: "solana",
    icon: solana,
    description:
      "Stake any amount of SOL and earn daily staking rewards. Put your staked SOL to work across DeFi to compound your yield.",
    apr: 5.5,
    staked: 1000000,
  },
  {
    name: "polygon",
    icon: polygon,
    description:
      "Stake any amount of MATIC and earn daily staking rewards. Put your staked MATIC to work across DeFi to compound your yield.",
    apr: 5.5,
    staked: 1000000,
  },
  {
    name: "pokadot",
    icon: pokadot,
    description:
      "Stake any amount of DOT and earn daily staking rewards. Put your staked DOT to work across DeFi to compound your yield.",
    apr: 5.5,
    staked: 1000000,
  },
  {
    name: "kusama",
    icon: kusama,
    description:
      "Stake any amount of KSM and earn daily staking rewards. Put your staked KSM to work across DeFi to compound your yield.",
    apr: 5.5,
    staked: 1000000,
  },
];
