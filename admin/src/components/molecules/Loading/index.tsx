import { LoadingWrapper } from "./style";
import Lottie from "react-lottie";
import loadingJson from "./loading.json";

export function Loading() {
  return (
    <LoadingWrapper>
      <Lottie
        options={{ animationData: loadingJson }}
        height={300}
        width={300}
      />
    </LoadingWrapper>
  );
}
