import React from "react";

import WindowHeader from "./WindowHeader";
import WindowSidebar from "./WindowSidebar";
import WindowExplorer from "./WindowExplorer";
import WindowContent from "./WindowContent";
import WindowFooter from "./WindowFooter";
import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	children: React.ReactNode;
	sourceCodeCommits?: SourceCodeCommit[];
};

const WindowLayout: React.FC<Props> = ({ children, sourceCodeCommits }) => {
	return (
		<div className="grid grid-cols-[50px_225px_auto] grid-rows-[30px_auto_24px] w-full max-w-4xl h-full max-h-[550px] bg-slate-900 overflow-clip shadow-[0px_0px_20px_rgba(0,0,0,0.5)] rounded-lg">
			<WindowHeader />
			<WindowSidebar />
			<WindowExplorer sourceCodeCommits={sourceCodeCommits || []} />
			<WindowContent>
				{children}
			</WindowContent>
			<WindowFooter />
		</div>
	);
};

export default WindowLayout;