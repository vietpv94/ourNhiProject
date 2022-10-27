import { BlockAddIcon } from "@Components/atoms/icon/blockAdd";
import { DocumentIcon } from "@Components/atoms/icon/document";
import { HistoryIcon } from "@Components/atoms/icon/history";
import { SwapIcon } from "@Components/atoms/icon/swap";
import { TeamIcon } from "@Components/atoms/icon/team";

interface DataSideBar {
  name: string;
  link: string;
  icon?: React.ReactNode;
  children?: DataSideBar[];
}

export const dataSideBar: DataSideBar[] = [
  {
    name: "Manage User",
    link: "/admin",
    icon: <TeamIcon />
  },
  {
    name: "Manage Transaction",
    link: "/admin/transaction",
    icon: <DocumentIcon />
  },
  {
    name: "Manage Package",
    link: "/admin/package",
    icon: <BlockAddIcon />
  },
  {
    name: "Manage Staking Session",
    link: "/admin/staking-session",
    icon: <HistoryIcon />
  },
  {
    name: "Manage System Config",
    link: "/admin/sys-conf",
    icon: <BlockAddIcon />
  },
  {
    name: "Manage KYC",
    link: "/admin/kyc",
    icon: <TeamIcon />
  },
  {
    name: "Manage Bonus",
    link: "/admin/bonus",
    icon: <TeamIcon />
  },
  {
    name: "Manage Level Condition",
    link: "/admin/level-condition",
    icon: <TeamIcon />
  }
];
