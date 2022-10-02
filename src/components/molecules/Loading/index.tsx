import { LoadingWrapper } from './style';
import loadingGif from '@Assets/images/loading.gif';

export function Loading() {
  return (
    <LoadingWrapper>
      <img src={loadingGif} alt="loading" />
    </LoadingWrapper>
  );
}
