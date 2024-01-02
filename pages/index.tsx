import { useContext } from "react";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowLayout from "@components/WindowLayout";

export default function Home() {
  const { screenRef } = useContext(MotionWindowContext);

  return (
    <div ref={screenRef} className="flex h-screen w-screen overflow-hidden">
      <WindowLayout></WindowLayout>
    </div>
  );
}
