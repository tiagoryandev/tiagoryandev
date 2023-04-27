import React from "react";
import {
	VscNewFile as NewFile,
	VscNewFolder as NewFolder,
	VscRefresh as Refresh,
	VscCollapseAll as CollapseAll,
	VscEllipsis as Ellipsis,
	VscChevronDown as ChevronDown,
	VscFolder as Folder,
	VscFileCode as File
} from "react-icons/vsc";

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

			<div className="w-full">
				<div className="flex items-center gap-1 h-6 cursor-pointer hover:bg-slate-700">
					<ChevronDown className="text-md text-zinc-300" />
					<Folder className="text-md text-zinc-300" />
					<span className="text-sm text-zinc-300 select-none">visual-studio-code</span>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center h-6 gap-1 pl-4 cursor-pointer hover:bg-slate-700">
						<File className="text-md text-zinc-300" />
						<span className="text-sm text-zinc-300 select-none">index.js</span>
					</div>
					<div className="flex items-center h-6 gap-1 pl-4 cursor-pointer hover:bg-slate-700">
						<File className="text-md text-zinc-300" />
						<span className="text-sm text-zinc-300 select-none">package.json</span>
					</div>
					<div className="flex items-center h-6 gap-1 pl-4 cursor-pointer hover:bg-slate-700">
						<File className="text-md text-zinc-300" />
						<span className="text-sm text-zinc-300 select-none">.gitignore</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WindowExplorerFiles;