import ethereum from "@Assets/images/home/ethereum.png";
import solana from "@Assets/images/home/solana.png";
import polygon from "@Assets/images/home/polygon.png";
import pokadot from "@Assets/images/home/pokadot.png";
import kusama from "@Assets/images/home/kusama.png";

export interface DataStake {
  apr: number;
  icon: string;
}

export const dataStake: DataStake[] = [
  {
    icon: ethereum,
    apr: 5.1,
  },
  {
    icon: solana,
    apr: 5.5,
  },
  {
    icon: polygon,
    apr: 6.3,
  },
  {
    icon: pokadot,
    apr: 13.5,
  },
  {
    icon: kusama,
    apr: 9.9,
  },
];
