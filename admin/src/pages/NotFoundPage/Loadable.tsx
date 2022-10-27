/**
 * Asynchronously loads the component for NotFoundPage
 */

import { Loading } from "@Components/molecules/Loading";
import { lazyLoad } from "@Utils/loadable";

export const NotFoundPage = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  {
    fallback: <Loading />
  }
);

export default NotFoundPage;
