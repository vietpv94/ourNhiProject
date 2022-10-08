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

export const router: Router[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/stake",
    component: Stake,
    children: [
      {
        path: "defi-staking",
        component: DefiStaking,
      },
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
];
