import React from "react";
import {
	VscFiles as Files,
	VscSearch as Search,
	VscSourceControl as SourceControl,
	VscDebugAlt as DebugAlt,
	VscExtensions as Extensions
} from "react-icons/vsc";

type Props = {
	pageIn: "files" | "search" | "source-control" | "debug" | "extensions";
};

const WindowSidebar: React.FC<Props> = ({ pageIn }) => {
	return (
		<div className="col-span-1 bg-slate-800">
			<div className="flex flex-col items-center">
				<div className={`flex items-center justify-center p-2 py-3 w-full border-l-2 ${pageIn == "files" ? "border-slate-500" : "border-slate-800 hover:border-slate-700"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Files className="text-zinc-400 text-2xl hover:text-zinc-100" />
				</div>
				<div className={`flex items-center justify-center px-2 py-3 w-full border-l-2 ${pageIn == "search" ? "border-slate-500" : "border-slate-800 hover:border-slate-700"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Search className="text-zinc-400 text-2xl hover:text-zinc-100" />
				</div>
				<div className={`flex items-center justify-center p-2 py-3 w-full border-l-2 ${pageIn == "source-control" ? "border-slate-500" : "border-slate-800 hover:border-slate-700"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<SourceControl className="text-zinc-400 text-2xl hover:text-zinc-100" />
				</div>
				<div className={`flex items-center justify-center p-2 py-3 w-full border-l-2 ${pageIn == "debug" ? "border-slate-500" : "border-slate-800 hover:border-slate-700"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<DebugAlt className="text-zinc-400 text-2xl hover:text-zinc-100" />
				</div>
				<div className={`flex items-center justify-center p-2 py-3 w-full border-l-2 ${pageIn == "extensions" ? "border-slate-500" : "border-slate-800 hover:border-slate-700"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Extensions className="text-zinc-400 text-2xl hover:text-zinc-100" />
				</div>
			</div>
		</div>
	);
};

export default WindowSidebar;