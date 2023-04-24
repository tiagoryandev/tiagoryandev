import React from "react";
import {
	VscNewFile as NewFile,
	VscNewFolder as NewFolder,
	VscRefresh as Refresh,
	VscCollapseAll as CollapseAll,
	VscEllipsis as Ellipsis,
	VscChevronDown as ChrevronDown,
	VscFolder as Folder
} from "react-icons/vsc";

import explorerFilesData from "../database/explorer-files.json";

const WindowExplorerFiles: React.FC = () => {
	return (
		<div className="w-full h-full bg-slate-800">
			<div className="flex items-center justify-between px-2 py-1">
				<h1 className="text-xs text-zinc-200 whitespace-nowrap overflow-hidden select-none">EXPLORER</h1>
				<div className="flex flex-shrink-0 items-center">
					<div className="p-1 hover:bg-slate-600 rounded cursor-pointer">
						<NewFile className="text-zinc-200" />
					</div>
					<div className="p-1 hover:bg-slate-00 rounded cursor-pointer">
						<NewFolder className="text-zinc-200" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<Refresh className="text-zinc-200" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<CollapseAll className="text-zinc-200" />
					</div>
					<div className="p-1 hover:bg-slate-700 rounded cursor-pointer">
						<Ellipsis className="text-zinc-200" />
					</div>
				</div>
			</div>

			{/* Explorer Files */}


		</div>
	);
};

export default WindowExplorerFiles;