import { RefObject, useState } from "react";
import useEventListener from "./useEventListener";

function useHover<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): boolean {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseLeave = () => setIsHover(false);
  const onMouseEnter = () => setIsHover(true);

  useEventListener("mouseenter", onMouseEnter, ref);
  useEventListener("mouseleave", onMouseLeave, ref);

  return isHover;
}

export default useHover;
