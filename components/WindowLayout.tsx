import React from "react";

import WindowHeader from "./WindowHeader";
import WindowSidebar from "./WindowSidebar";
import WindowExplorer from "./WindowExplorer";
import WindowContent from "./WindowContent";
import WindowFooter from "./WindowFooter";

const WindowLayout: React.FC = () => {
	return (
		<div className="grid grid-cols-[50px_200px_auto] grid-rows-[30px_auto_30px] w-full max-w-4xl h-full max-h-96 bg-slate-800 rounded-md">
			<WindowHeader />
			<WindowSidebar />
			<WindowExplorer />
			<WindowContent />
			<WindowFooter />
		</div>
	);
};

export default WindowLayout;