import React from "react";

import WindowExplorerSourceCode from "./WindowExplorerSourceCode";
import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	sourceCodeCommits?: SourceCodeCommit[];
};

const WindowExplorer: React.FC<Props> = ({ sourceCodeCommits }) => {	
	return (
		<div className="col-span-1 row-span-1 h-full overflow-hidden">
			<WindowExplorerSourceCode sourceCodeCommits={sourceCodeCommits || []} />
		</div>
	);
};

export default WindowExplorer;