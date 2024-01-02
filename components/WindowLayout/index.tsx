import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowHead from "./WindowHead";
import WindowFooter from "./WindowFooter";

interface WindowLayoutProps {
  children?: ReactNode;
}

export default function WindowLayout({ children }: WindowLayoutProps) {
  const { controls, draggableArea, windowData, windowRef } =
    useContext(MotionWindowContext);

  return (
    <>
      <motion.div
        drag
        dragListener={false}
        dragControls={controls}
        dragElastic={0}
        dragConstraints={draggableArea}
        dragTransition={{
          power: 0,
        }}
        ref={windowRef}
        className="grid grid-rows-[fit-content(100%)_auto_fit-content(100%)] rounded-md bg-neutral-800 drop-shadow-[0px_0px_10px_#000000]"
        style={{
          width: windowData.width,
          height: windowData.height,
        }}
      >
        <WindowHead />
        <div className="w-full border-x-[1px] border-neutral-700">
          {children}
        </div>
        <WindowFooter />
      </motion.div>
    </>
  );
}
