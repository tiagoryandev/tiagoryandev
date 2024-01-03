import { ReactNode } from "react";

interface WindowPageProps {
  children?: ReactNode;
}

export default function WindowPage({ children }: WindowPageProps) {
  return (
    <div className="h-full w-full overflow-auto scroll-smooth border-r-[1px] border-neutral-700 p-5 scrollbar-thin scrollbar-track-neutral-900 scrollbar-thumb-neutral-800">
      {children}
    </div>
  );
}
