import React from "react";
import {
	VscLayoutSidebarLeftOff as LayoytToLeft,
	VscLayoutPanelOff as LayoytToPanel,
	VscLayoutSidebarRightOff as LayoytToRight,
	VscLayout as Layout
} from "react-icons/vsc";

const WindowHeader: React.FC = () => {
	return (
		<div className="col-span-3 grid grid-cols-[100px_auto_100px] place-items-stretch bg-slate-800">
			<div className="flex items-center gap-2 pl-2">
				<div className="w-3 h-3 bg-red-400 rounded-full cursor-pointer hover:bg-red-500 transition-colors" />
				<div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition-colors" />
				<div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition-colors" />
			</div>
			<div className="flex justify-center items-center">
				<span className="text-center text-zinc-300 text-xs select-none">Tiago Ryan - Visual Studio Code</span>
			</div>
			<div className="flex items-center justify-end gap-1 pr-2">
				<LayoytToLeft className="text-zinc-400 text-md cursor-pointer hover:text-zinc-200" />
				<LayoytToPanel className="text-zinc-400 text-md cursor-pointer hover:text-zinc-200" />
				<LayoytToRight className="text-zinc-400 text-md cursor-pointer hover:text-zinc-200" />
				<div className="w-[1px] h-4 bg-zinc-400" />
				<Layout className="text-zinc-400 text-md cursor-pointer hover:text-zinc-200" />
			</div>
		</div>
	);
};

export default WindowHeader;