import { BlockAddIcon } from "@Components/atoms/icon/blockAdd";
import { DocumentIcon } from "@Components/atoms/icon/document";
import { HistoryIcon } from "@Components/atoms/icon/history";
import { TeamIcon } from "@Components/atoms/icon/team";

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
        link: "/stake/defi-staking",
      },
      {
        name: "Your Staking",
        link: "/stake/your-staking",
      },
    ],
  },
  {
    name: "Dashboard",
    link: "/stake/dashboard",
    icon: <DocumentIcon />,
  },
  {
    name: "History",
    link: "/stake/history",
    icon: <HistoryIcon />,
  },
  {
    name: "Affiliate",
    link: "/stake/affiliate",
    icon: <TeamIcon />,
  },
];
