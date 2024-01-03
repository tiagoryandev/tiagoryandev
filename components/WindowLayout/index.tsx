import { ReactNode, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowHead from "./WindowHead";
import WindowSidebar from "./WindowSidebar";
import WindowFooter from "./WindowFooter";

interface WindowLayoutProps {
  children?: ReactNode;
}

export default function WindowLayout({ children }: WindowLayoutProps) {
  const router = useRouter();
  const { controls, draggableArea, windowData, screenRef, windowRef } =
    useContext(MotionWindowContext);

  const animationControls = useAnimationControls();

  useEffect(() => {
    if (screenRef.current && windowRef.current) {
      animationControls.set({
        x: (screenRef.current.clientWidth - windowRef.current.clientWidth) / 2,
        y:
          (screenRef.current.clientHeight - windowRef.current.clientHeight) / 2,
      });
    }
  }, [animationControls, screenRef, windowRef]);

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
        animate={animationControls}
        ref={windowRef}
        data-show-explorer={router.pathname == "/commits"}
        className="group grid grid-cols-[fit-content(100%)_1fr] grid-rows-[fit-content(100%)_auto_fit-content(100%)] rounded-md bg-neutral-900 drop-shadow-[0px_0px_10px_#000000] data-[show-explorer=true]:grid-cols-[fit-content(100%)_fit-content(100%)_1fr]"
        style={{
          width: windowData.width,
          height: windowData.height,
        }}
      >
        <WindowHead />
        <WindowSidebar />
        {children}
        <WindowFooter />
      </motion.div>
    </>
  );
}
