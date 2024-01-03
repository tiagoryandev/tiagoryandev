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
  const windowWidth = useMotionValue(1000);
  const windowHeight = useMotionValue(600);

  useEffect(() => {
    if (screenRef.current) {
      const windowWidthSize = windowWidth.get();
      const windowHeightSize = windowHeight.get();

      setDraggableArea({
        top: 0,
        left: 0,
        right:
          windowWidthSize >= screenRef.current.clientWidth
            ? 0
            : screenRef.current.clientWidth - windowWidthSize,
        bottom:
          windowHeightSize >= screenRef.current.clientHeight
            ? 0
            : screenRef.current.clientHeight - windowHeightSize,
      });
    }
  }, [screenRef, windowWidth, windowHeight]);

  useEffect(() => {
    if (screenRef.current && windowRef.current) {
      windowWidth.set(
        screenRef.current.clientWidth <= windowWidth.get()
          ? screenRef.current.clientWidth
          : windowWidth.get(),
      );

      windowHeight.set(
        screenRef.current.clientHeight <= windowHeight.get()
          ? screenRef.current.clientHeight
          : windowHeight.get(),
      );
    }

    window.onresize = () => {
      if (windowRef.current) {
        const windowElement = windowRef.current.getBoundingClientRect();
        const currentWidth = windowWidth.get();
        const currentHeight = windowHeight.get();

        windowWidth.set(
          window.innerWidth - windowElement.left > currentWidth
            ? currentWidth >= 600
              ? currentWidth
              : window.innerWidth - windowElement.left
            : window.innerWidth - windowElement.left,
        );

        windowHeight.set(
          window.innerHeight - windowElement.top > currentHeight
            ? currentHeight >= 400
              ? currentHeight
              : window.innerHeight - windowElement.top
            : window.innerHeight - windowElement.top,
        );

        setDraggableArea({
          top: 0,
          left: 0,
          right: window.innerWidth - windowWidth.get(),
          bottom: window.innerHeight - windowHeight.get(),
        });
      }
    };
  }, [windowWidth, windowHeight]);

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
        newWidth > (currentWindowWidth > 600 ? 600 : currentWindowWidth) &&
        windowElement.left + newWidth <= screenRef.current.clientWidth
      ) {
        windowWidth.set(newWidth);
      }

      if (
        newHeight > (currentWindowHeight > 400 ? 400 : currentWindowHeight) &&
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
