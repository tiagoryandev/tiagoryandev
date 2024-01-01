import {
  useState,
  useEffect,
  useCallback,
  useRef,
  createContext,
  PointerEvent,
} from "react";
import { useDragControls, useMotionValue, DragHandlers } from "framer-motion";

import {
  MotionWindowContextData,
  MotionWindowProviderProps,
} from "@interfaces/MotionWindowContextInterfaces";

export const MotionWindowContext = createContext({} as MotionWindowContextData);

export function MotionWindowProvider({ children }: MotionWindowProviderProps) {
  const controls = useDragControls();

  const [draggableArea, setDraggableArea] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const windowRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const windowWidth = useMotionValue(400);
  const windowHeight = useMotionValue(300);

  useEffect(() => {
    if (screenRef.current) {
      setDraggableArea({
        top: 0,
        left: 0,
        right: screenRef.current.clientWidth - windowWidth.get(),
        bottom: screenRef.current.clientHeight - windowHeight.get(),
      });
    }
  }, [screenRef, windowWidth, windowHeight]);

  function handleStartDrag(event: PointerEvent<HTMLDivElement>) {
    controls.start(event);
  }

  const resizeWindow: DragHandlers["onDrag"] = (event, info) => {
    const currentWindowWidth = windowWidth.get();
    const currentWindowHeight = windowHeight.get();

    if (screenRef.current && windowRef.current) {
      const windowElement = windowRef.current.getBoundingClientRect();
      const newWidth = currentWindowWidth + info.delta.x;
      const newHeight = currentWindowHeight + info.delta.y;

      if (
        newWidth > 400 &&
        windowElement.left + newWidth <= screenRef.current.clientWidth
      ) {
        windowWidth.set(newWidth);
      }

      if (
        newHeight > 300 &&
        windowElement.top + newHeight <= screenRef.current.clientHeight
      ) {
        windowHeight.set(newHeight);
      }

      setDraggableArea({
        top: 0,
        left: 0,
        right: screenRef.current.clientWidth - windowWidth.get(),
        bottom: screenRef.current.clientHeight - windowHeight.get(),
      });
    }
  };

  const handleResizeWindow = useCallback(resizeWindow, [
    windowWidth,
    windowHeight,
  ]);

  return (
    <MotionWindowContext.Provider
      value={{
        screenRef,
        windowRef,
        windowData: {
          width: windowWidth,
          height: windowHeight,
        },
        draggableArea,
        controls,
        handleStartDrag,
        handleResizeWindow,
      }}
    >
      {children}
    </MotionWindowContext.Provider>
  );
}
