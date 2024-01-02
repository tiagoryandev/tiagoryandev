import { ReactNode, useContext } from "react";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowLayout from "./WindowLayout";

interface ScreenProps {
  children: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  const { screenRef } = useContext(MotionWindowContext);

  return (
    <div ref={screenRef} className="flex h-screen w-screen overflow-hidden">
      <WindowLayout>{children}</WindowLayout>
    </div>
  );
}
