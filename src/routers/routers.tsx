import { History } from "@Components/organisms/History";
import HomePage from "@Pages/Home";
import { Profile } from "@Pages/Profile";
import { PersonalInformation } from "@Pages/Profile/Information";
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
      {
        path: "history",
        component: History,
      },
    ],
  },
  {
    path: "/profile",
    component: Profile,
    children: [
      {
        path: "",
        component: PersonalInformation,
      },
    ],
  },
];
