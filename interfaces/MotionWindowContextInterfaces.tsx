import { DragControls } from "framer-motion";
import { PointerEvent, ReactNode } from "react";

export interface MotionWindowProviderProps {
  children: ReactNode;
}

export interface MotionWindowContextData {
  controls: DragControls;
  handleStartDrag: (event: PointerEvent<HTMLDivElement>) => void;
}
