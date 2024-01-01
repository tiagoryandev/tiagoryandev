import { ReactNode, RefObject, PointerEvent } from "react";
import { DragControls, MotionValue, DragHandlers } from "framer-motion";

export interface WindowData {
  width: MotionValue<number>;
  height: MotionValue<number>;
}

export interface MotionWindowProviderProps {
  children: ReactNode;
}

export interface MotionWindowContextData {
  screenRef: RefObject<HTMLDivElement>;
  windowRef: RefObject<HTMLDivElement>;
  windowData: WindowData;
  controls: DragControls;
  draggableArea: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  handleStartDrag: (event: PointerEvent<HTMLDivElement>) => void;
  handleResizeWindow: DragHandlers["onDrag"];
}
