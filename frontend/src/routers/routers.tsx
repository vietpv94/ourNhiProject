import { History } from "@Components/organisms/History";
import HomePage from "@Pages/Home";
import { Stake } from "@Pages/Stake";
import { Affiliate } from "@Pages/Stake/Affiliate";
import { Dashboard } from "@Pages/Stake/Dashboard";
import { DefiStaking } from "@Pages/Stake/DefiStaking";
import { LidoSwap } from "@Pages/Stake/Swap";
import { YourStaking } from "@Pages/Stake/YourStaking";

export interface Router {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  children?: Router[];
}

export const dashboardRoutes: Router[] = [
  {
    path: "defi-staking",
    component: DefiStaking,
  },
  {
    path: "",
    component: DefiStaking,
  },
  {
    path: "unStaking",
    component: YourStaking,
  },
  {
    path: "dashboard",
    component: Dashboard,
  },
  {
    path: "history",
    component: History,
  },
  {
    path: "affiliate",
    component: Affiliate,
  },
  { path: "swap", component: LidoSwap },
];
