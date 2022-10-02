/**
 * Asynchronously loads the component for AllPages
 */

import { Loading } from '@Components/molecules/Loading';
import { lazyLoad } from '@Utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage,
  {
    fallback: <Loading />,
  }
);

export default HomePage;
