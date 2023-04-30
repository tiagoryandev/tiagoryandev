import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	VscHome as Home,
	VscSearch as About,
	VscExtensions as Projects,
	VscBriefcase as Jobs,
	VscSourceControl as SourceCode,
	VscAccount as Account,
	VscSettingsGear as SettingsGear
} from "react-icons/vsc";

const WindowSidebar: React.FC = () => {
	const router = useRouter();

	return (
		<div className="col-span-1 flex flex-col justify-between bg-slate-800">
			<div className="flex flex-col items-center">
				<Link href="/" className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${router.route == "/" && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Home className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link href="/about" className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${router.route.startsWith("/about") && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<About className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link href="/projects" className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${router.route.startsWith("/jobs") && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Projects className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link href="/jobs" className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${router.route.startsWith("/projects") && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<Jobs className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link href="/source-code" className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${router.route.startsWith("/source-code") && "border-l-slate-500"} hover:bg-slate-700 transition-colors cursor-pointer`}>
					<SourceCode className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
			</div>
			<div className="flex flex-col items-center px-2 py-3 gap-5">
				<Account className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
				<SettingsGear className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
			</div>
		</div>
	);
};

export default WindowSidebar;