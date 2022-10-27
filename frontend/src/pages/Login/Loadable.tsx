/**
 * Asynchronously loads the component for AllPages
 */

import { Loading } from '@Components/molecules/Loading';
import { lazyLoad } from '@Utils/loadable';

export const Login = lazyLoad(
  () => import('./index'),
  (module) => module.Login,
  {
    fallback: <Loading />,
  }
);

export default Login;
