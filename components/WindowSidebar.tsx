import React from "react";
import {
	VscFiles as Files,
	VscSearch as Search,
	VscSourceControl as SourceControl,
	VscDebugAlt as DebugAlt,
	VscExtensions as Extensions,
	VscAccount as Account,
	VscSettingsGear as SettingsGear
} from "react-icons/vsc";

type Pages = "files" | "search" | "source-control" | "debug" | "extensions" | null;

type Props = {
	pageIn: Pages;
	setOpenExplorer: React.Dispatch<React.SetStateAction<Pages>>;
};

const WindowSidebar: React.FC<Props> = ({ pageIn, setOpenExplorer }) => {
	const handleExplorer = (page: Pages) => {
		const value = pageIn == null ? page : (pageIn == page ? null : page);

		setOpenExplorer(value);
	};

	return (
		<div className="col-span-1 flex flex-col justify-between bg-slate-800">
			<div className="flex flex-col items-center">
				<div onClick={() => handleExplorer("files")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${pageIn == "files" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Files className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorer("search")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${pageIn == "search" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Search className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorer("source-control")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${pageIn == "source-control" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<SourceControl className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorer("debug")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${pageIn == "debug" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<DebugAlt className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorer("extensions")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${pageIn == "extensions" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Extensions className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
			</div>
			<div className="flex flex-col items-center px-2 py-3 gap-5">
				<Account className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
				<SettingsGear className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
			</div>
		</div>
	);
};

export default WindowSidebar;