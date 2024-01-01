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
  windowRef: RefObject<HTMLDivElement>;
  windowData: WindowData;
  controls: DragControls;
  handleStartDrag: (event: PointerEvent<HTMLDivElement>) => void;
  handleResizeWindow: DragHandlers["onDrag"];
}
