import React from "react";
import Link from "next/link";
import {
	VscError,
	VscWarning,
	VscFeedback,
	VscBell,
	VscGithubAlt
} from "react-icons/vsc";

const WindowFooter: React.FC = () => {
	return (
		<div className="col-span-3 flex items-center justify-between bg-violet-800">
			<div className="flex items-center gap-2 px-2 h-full hover:bg-violet-700 cursor-pointer">
				<div className="flex items-center gap-1">
					<VscError className="text-sm text-zinc-100" />
					<span className="text-sm text-zinc-100 select-none">0</span>
				</div>
				<div className="flex items-center gap-1">
					<VscWarning className="text-sm text-zinc-100" />
					<span className="text-sm text-zinc-100 select-none">0</span>
				</div>
			</div>
			<div className="flex items-center h-full">
				<div className="flex items-center gap-2 px-2 h-full hover:bg-violet-700 cursor-pointer">
					<VscFeedback className="text-sm text-zinc-100" />
					<VscBell className="text-sm text-zinc-100" />
				</div>
				<div className="flex items-center gap-1 px-2 h-full hover:bg-violet-700 cursor-pointer">
					<VscGithubAlt className="text-sm text-zinc-100" />
					<Link href="https://github.com/tiagoryandev/tiagoryandev" className="text-sm text-zinc-100 select-none">Github</Link>
				</div>
			</div>
		</div>
	);
};

export default WindowFooter;