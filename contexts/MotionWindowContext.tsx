import { useCallback, useRef, createContext, PointerEvent } from "react";
import { useDragControls, useMotionValue, DragHandlers } from "framer-motion";

import {
  MotionWindowContextData,
  MotionWindowProviderProps,
} from "@interfaces/MotionWindowContextInterfaces";

export const MotionWindowContext = createContext({} as MotionWindowContextData);

export function MotionWindowProvider({ children }: MotionWindowProviderProps) {
  const controls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);
  const windowWidth = useMotionValue(400);
  const windowHeight = useMotionValue(300);

  function handleStartDrag(event: PointerEvent<HTMLDivElement>) {
    controls.start(event);
  }

  const resizeWindow: DragHandlers["onDrag"] = (event, info) => {
    const currentWindowWidth = windowWidth.get();
    const currentWindowHeight = windowHeight.get();

    if (windowRef.current) {
      const newWidth = currentWindowWidth + info.delta.x;
      const newHeight = currentWindowHeight + info.delta.y;

      if (newWidth > 400) {
        windowWidth.set(newWidth);
      }

      if (newHeight > 300) {
        windowHeight.set(newHeight);
      }
    }
  };

  const handleResizeWindow = useCallback(resizeWindow, [
    windowWidth,
    windowHeight,
  ]);

  return (
    <MotionWindowContext.Provider
      value={{
        windowRef,
        windowData: {
          width: windowWidth,
          height: windowHeight,
        },
        controls,
        handleStartDrag,
        handleResizeWindow,
      }}
    >
      {children}
    </MotionWindowContext.Provider>
  );
}
