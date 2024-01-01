import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowHead from "./WindowHead";

interface WindowLayoutProps {
  children?: ReactNode;
}

export default function WindowLayout({ children }: WindowLayoutProps) {
  const { controls } = useContext(MotionWindowContext);

  return (
    <>
      <motion.div
        drag
        dragListener={false}
        dragControls={controls}
        dragTransition={{
          power: 0,
        }}
        className="h-96 w-full max-w-4xl grid-rows-[fit-content(100%)_auto_fit-content(100%)] rounded-md bg-neutral-800"
      >
        <WindowHead />
        <div>{children}</div>
        <div></div>
      </motion.div>
    </>
  );
}
