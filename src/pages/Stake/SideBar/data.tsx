import { BlockAddIcon } from "@Components/atoms/icon/blockAdd";
import { DocumentIcon } from "@Components/atoms/icon/document";
import { HistoryIcon } from "@Components/atoms/icon/history";
import { SwapIcon } from "@Components/atoms/icon/swap";
import { TeamIcon } from "@Components/atoms/icon/team";
import { WithdrawIcon } from "@Components/atoms/icon/withDraw";

interface DataSideBar {
  name: string;
  link: string;
  icon?: React.ReactNode;
  children?: DataSideBar[];
}

export const dataSideBar: DataSideBar[] = [
  {
    name: "Defi Staking",
    link: "/stake",
    icon: <BlockAddIcon />,
    children: [
      {
        name: "Staking",
        link: "/stake/defi-staking"
      },
      {
        name: "UnStaking",
        link: "/stake/unstaking"
      }
    ]
  },
  {
    name: "Dashboard",
    link: "/stake/dashboard",
    icon: <DocumentIcon />
  },
  {
    name: "History",
    link: "/stake/history",
    icon: <HistoryIcon />
  },
  {
    name: "Affiliate",
    link: "/stake/affiliate",
    icon: <TeamIcon />
  },
  {
    name: "Swap",
    link: "/stake/swap",
    icon: <SwapIcon />
  },
  {
    name: "Withdraw",
    link: "",
    icon: <WithdrawIcon />
  }
];
