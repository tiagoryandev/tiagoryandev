import { ReactNode } from "react";

interface WindowExplorerProps {
  children: ReactNode;
}

export default function WindowExplorer({ children }: WindowExplorerProps) {
  return (
    <div className="h-full w-[250px] overflow-y-hidden bg-neutral-800">
      {children}
    </div>
  );
}
