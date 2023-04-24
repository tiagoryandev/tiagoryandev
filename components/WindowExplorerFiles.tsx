import React from "react";
import {
	VscNewFile as NewFile,
	VscNewFolder as NewFolder,
	VscRefresh as Refresh,
	VscCollapseAll as CollapseAll,
	VscEllipsis as Ellipsis
} from "react-icons/vsc";

const WindowExplorerFiles: React.FC = () => {
	return (
		<div className="w-full h-full bg-slate-800">
			<div className="flex items-center justify-between p-2">
				<h1 className="text-xs text-zinc-100 whitespace-nowrap overflow-hidden select-none">EXPLORER</h1>
				<div className="flex flex-shrink-0 items-center">
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<NewFile className="text-zinc-100" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<NewFolder className="text-zinc-100" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<Refresh className="text-zinc-100" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<CollapseAll className="text-zinc-100" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<Ellipsis className="text-zinc-100" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WindowExplorerFiles;