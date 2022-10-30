import ethereum from "@Assets/images/home/ethereum.png";
import solana from "@Assets/images/home/solana.png";
import polygon from "@Assets/images/home/polygon.png";
import pokadot from "@Assets/images/home/pokadot.png";
import kusama from "@Assets/images/home/kusama.png";

export interface DataStake {
  apr: number;
  icon: string;
  disabled: boolean;
}

export const dataStake: DataStake[] = [
  {
    icon: ethereum,
    apr: 15,
    disabled: true,
  },
  {
    icon: solana,
    apr: 15,
    disabled: false,
  },
  {
    icon: polygon,
    apr: 15,
    disabled: false,
  },
  {
    icon: pokadot,
    apr: 15,
    disabled: false,
  },
  {
    icon: kusama,
    apr: 15,
    disabled: true,
  },
];
