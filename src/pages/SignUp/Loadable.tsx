/**
 * Asynchronously loads the component for AllPages
 */

import { Loading } from '@Components/molecules/Loading';
import { lazyLoad } from '@Utils/loadable';

export const SignUp = lazyLoad(
  () => import('./index'),
  (module) => module.SignUp,
  {
    fallback: <Loading />,
  }
);

export default SignUp;
