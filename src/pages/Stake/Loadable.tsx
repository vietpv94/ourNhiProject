/**
 * Asynchronously loads the component for AllPages
 */

import { Loading } from "@Components/molecules/Loading";
import { lazyLoad } from "@Utils/loadable";

export const Stake = lazyLoad(
  () => import("./index"),
  (module) => module.Stake,
  {
    fallback: <Loading />
  }
);

export default Stake;
