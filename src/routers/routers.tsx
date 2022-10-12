import { History } from "@Components/organisms/History";
import HomePage from "@Pages/Home";
import { Stake } from "@Pages/Stake";
import { Dashboard } from "@Pages/Stake/Dashboard";
import { DefiStaking } from "@Pages/Stake/DefiStaking";

export interface Router {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  children?: Router[];
}

export const dashboardRoutes: Router[] = [
  {
    path: "defi-staking",
    component: DefiStaking
  },
  {
    path: "",
    component: DefiStaking
  },
  {
    path: "dashboard",
    component: Dashboard
  },
  {
    path: "history",
    component: History
  }
];
