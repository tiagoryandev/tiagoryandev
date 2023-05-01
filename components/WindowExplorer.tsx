import React from "react";
import { useRouter } from "next/router";

import WindowExplorerSourceCode from "./WindowExplorerSourceCode";
import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	sourceCodeCommits?: SourceCodeCommit[];
};

const WindowExplorer: React.FC<Props> = ({ sourceCodeCommits }) => {	
	const router = useRouter();
	const isOpen = ["/projects", "/jobs", "/source-code"].includes(router.route);
	
	return (
		<div className={`${!isOpen && "hidden"} col-span-1 row-span-1 h-full overflow-hidden`}>
			<WindowExplorerSourceCode sourceCodeCommits={sourceCodeCommits || []} />
		</div>
	);
};

export default WindowExplorer;