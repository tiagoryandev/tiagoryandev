import { useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineRoundedCorner } from "react-icons/md";
import {
  VscSourceControl,
  VscError,
  VscWarning,
  VscChevronRight,
  VscGithubAlt,
} from "react-icons/vsc";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

export default function WindowFooter() {
  const { handleResizeWindow } = useContext(MotionWindowContext);

  return (
    <div className="col-span-2 flex w-full items-center justify-between rounded-b-md border-x-[1px] border-b-[1px] border-fuchsia-700 bg-fuchsia-800 group-data-[show-explorer=true]:col-span-3">
      <div className="flex items-center">
        <div className="flex cursor-pointer items-center gap-1 rounded-bl-md px-2 py-1 hover:bg-fuchsia-700">
          <VscSourceControl className="text-sm text-zinc-100" />
          <span className="select-none text-xs font-light text-zinc-100">
            master
          </span>
        </div>
        <div className="flex cursor-pointer items-center gap-1 px-2 py-1 hover:bg-fuchsia-700">
          <div className="flex items-center gap-1">
            <VscError className="text-sm text-zinc-100" />
            <span className="select-none text-xs font-light text-zinc-100">
              0
            </span>
          </div>
          <div className="flex items-center gap-1">
            <VscWarning className="text-sm text-zinc-100" />
            <span className="select-none text-xs font-light text-zinc-100">
              0
            </span>
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-1 px-2 py-1 hover:bg-fuchsia-700">
          <VscGithubAlt className="flex-shrink-0 text-sm text-zinc-100" />
          <span className="line-clamp-1 select-none text-xs font-light text-zinc-100">
            tiagoryandev - Github
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="select-none text-xs font-light text-zinc-100">
            Arraste
          </span>
          <VscChevronRight className="text-zinc-100" />
        </div>
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
          <MdOutlineRoundedCorner className="mr-[3px] rotate-90 cursor-nwse-resize text-lg text-zinc-50 " />
        </motion.div>
      </div>
    </div>
  );
}
