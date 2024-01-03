import { useContext } from "react";
import {
  VscLayoutSidebarLeftOff,
  VscLayoutPanelOff,
  VscLayoutSidebarRightOff,
  VscLayout,
} from "react-icons/vsc";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

export default function WindowHead() {
  const { handleStartDrag } = useContext(MotionWindowContext);

  return (
    <div
      onPointerDown={handleStartDrag}
      className="col-span-2 grid grid-cols-3 justify-between rounded-t-md border-x-[1px] border-t-[1px] border-neutral-600 bg-neutral-700 p-2 group-data-[show-explorer=true]:col-span-3"
    >
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 cursor-pointer rounded-full bg-red-400 transition-colors duration-150 hover:bg-red-500"></div>
        <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500 transition-colors duration-150 hover:bg-yellow-500"></div>
        <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500 transition-colors duration-150 hover:bg-green-600"></div>
      </div>
      <span className="line-clamp-1 select-none text-ellipsis text-center text-xs text-zinc-300">
        Tiago Ryan - Visual Studio Code
      </span>
      <div className="flex items-center justify-end gap-1">
        <VscLayoutSidebarLeftOff className="text-md cursor-pointer text-zinc-400 hover:text-zinc-200" />
        <VscLayoutPanelOff className="text-md cursor-pointer text-zinc-400 hover:text-zinc-200" />
        <VscLayoutSidebarRightOff className="text-md cursor-pointer text-zinc-400 hover:text-zinc-200" />
        <div className="h-4 w-[1px] bg-zinc-400" />
        <VscLayout className="text-md cursor-pointer text-zinc-400 hover:text-zinc-200" />
      </div>
    </div>
  );
}
