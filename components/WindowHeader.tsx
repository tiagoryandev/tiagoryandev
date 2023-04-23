import React from "react";

const WindowHeader: React.FC = () => {
	return (
		<div className="col-span-3 grid grid-cols-[100px_auto_100px] place-items-stretch bg-slate-800">
			<div className="flex items-center gap-2 pl-3">
				<div className="w-3 h-3 bg-red-400 rounded-full cursor-pointer hover:bg-red-500 transition-colors" />
				<div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition-colors" />
				<div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition-colors" />
			</div>
			<div className="flex justify-center items-center">
				<span className="text-center text-zinc-300 text-xs select-none">Tiago Ryan - Visual Studio Code</span>
			</div>
			<div className="flex items-center justify-end">
				
			</div>
		</div>
	);
};

export default WindowHeader;