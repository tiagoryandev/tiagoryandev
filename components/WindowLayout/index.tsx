import { ReactNode } from "react";

import WindowHead from "./WindowHead";

interface WindowLayoutProps {
  children?: ReactNode;
}

export default function WindowLayout({ children }: WindowLayoutProps) {
  return (
    <div className="h-96 w-full max-w-4xl grid-rows-[fit-content(100%)_auto_fit-content(100%)] rounded-md bg-neutral-800">
      <WindowHead />
      <div>{children}</div>
      <div></div>
    </div>
  );
}
