import React, { useContext } from "react";
import {
	VscHome as Home,
	VscSearch as About,
	VscExtensions as Projects,
	VscBriefcase as Jobs,
	VscSourceControl as SourceCode,
	VscAccount as Account,
	VscSettingsGear as SettingsGear
} from "react-icons/vsc";

import { WindowContext } from "../contexts/WindowContext";
import { WindowPages } from "../types/WindowContextTypes";

const WindowSidebar: React.FC = () => {
	const { explorerSection, setExplorerSection } = useContext(WindowContext);
	
	const handleExplorerSection = (section: WindowPages) => {
		const newSection = explorerSection == null ? section : (explorerSection == section ? null : section);

		setExplorerSection(newSection);
	};

	return (
		<div className="col-span-1 flex flex-col justify-between bg-slate-800">
			<div className="flex flex-col items-center">
				<div onClick={() => handleExplorerSection("home")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${explorerSection == "home" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Home className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorerSection("about")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${explorerSection == "about" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<About className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorerSection("jobs")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${explorerSection == "jobs" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Projects className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorerSection("projects")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${explorerSection == "projects" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Jobs className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</div>
				<div onClick={() => handleExplorerSection("source-code")} className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${explorerSection == "source-code" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<SourceCode className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
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