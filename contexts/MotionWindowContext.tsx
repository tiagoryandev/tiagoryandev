import { createContext, PointerEvent } from "react";
import { useDragControls } from "framer-motion";

import {
  MotionWindowContextData,
  MotionWindowProviderProps,
} from "@interfaces/MotionWindowContextInterfaces";

export const MotionWindowContext = createContext({} as MotionWindowContextData);

export function MotionWindowProvider({ children }: MotionWindowProviderProps) {
  const controls = useDragControls();

  function handleStartDrag(event: PointerEvent<HTMLDivElement>) {
    controls.start(event);
  }

  return (
    <MotionWindowContext.Provider
      value={{
        controls,
        handleStartDrag,
      }}
    >
      {children}
    </MotionWindowContext.Provider>
  );
}
