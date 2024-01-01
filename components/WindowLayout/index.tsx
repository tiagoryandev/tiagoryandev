import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineRoundedCorner } from "react-icons/md";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowHead from "./WindowHead";

interface WindowLayoutProps {
  children?: ReactNode;
}

export default function WindowLayout({ children }: WindowLayoutProps) {
  const { controls, draggableArea, windowData, windowRef, handleResizeWindow } =
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
        className="grid grid-rows-[fit-content(100%)_auto_fit-content(100%)] rounded-md bg-neutral-800"
        style={{
          width: windowData.width,
          height: windowData.height,
        }}
      >
        <WindowHead />
        <div>{children}</div>
        <div className="flex w-full items-center justify-end rounded-b-md bg-blue-500 p-1">
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0}
            dragMomentum={false}
            dragTransition={{
              power: 0,
            }}
            onDrag={handleResizeWindow}
          >
            <MdOutlineRoundedCorner className="rotate-90 cursor-nwse-resize text-lg text-zinc-50 " />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
