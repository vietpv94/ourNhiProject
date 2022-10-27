import ethereum from "@Assets/images/home/ethereum.png";
import solana from "@Assets/images/home/solana.png";
import polygon from "@Assets/images/home/polygon.png";
import pokadot from "@Assets/images/home/pokadot.png";
import kusama from "@Assets/images/home/kusama.png";

export interface SupportedNetworkCard {
  icon: string;
  name: string;
  description: string;
  symbol?: string;
  apr: number;
  staked: string;
  poolLocked: boolean;
}

export const dataSupportedNetworks: SupportedNetworkCard[] = [
  {
    name: "ethereum",
    icon: ethereum,
    symbol: 'ETH',
    description:
      "Stake any amount of ETH and earn daily staking rewards. Put your staked ETH to work across DeFi to compound your yield.",
    apr: 15,
    staked: "5,954,022,468",
    poolLocked: true
  },
  {
    name: "solana",
    icon: solana,
    symbol: 'SOL',
    description:
      "Stake any amount of SOL and earn daily staking rewards. Put your staked SOL to work across DeFi to compound your yield.",
    apr: 15,
    staked: "116,773,895",
    poolLocked: false
  },
  {
    name: "polygon",
    icon: polygon,
    symbol: 'MATIC',
    description:
      "Stake any amount of MATIC and earn daily staking rewards. Put your staked MATIC to work across DeFi to compound your yield.",
    apr: 15,
    staked: "47,409,432",
    poolLocked: false
  },
  {
    name: "pokadot",
    icon: pokadot,
    symbol: 'DOT',
    description:
      "Stake any amount of DOT and earn daily staking rewards. Put your staked DOT to work across DeFi to compound your yield.",
    apr: 15,
    staked: "11,982,072",
    poolLocked: false
  },
  {
    name: "kusama",
    icon: kusama,
    symbol: 'KSM',
    description:
      "Stake any amount of KSM and earn daily staking rewards. Put your staked KSM to work across DeFi to compound your yield.",
    apr: 15,
    staked: "2,649,222",
    poolLocked: true
  }
];
