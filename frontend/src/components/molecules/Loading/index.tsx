import { LoadingWrapper } from "./style";
import Lottie from "react-lottie";
import loadingJson from "./loading.json";
import { useSelector } from "react-redux";
import { RootState } from "@Redux/reducers";

export function Loading() {
  const loading = useSelector((state: RootState) => state.loading.show);
  return (
    <>
      {loading && (
        <LoadingWrapper>
          <Lottie
            options={{ animationData: loadingJson }}
            height={300}
            width={300}
          />
        </LoadingWrapper>
      )}
    </>
  );
}
