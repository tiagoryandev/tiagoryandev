import React, { useContext } from "react";

import WindowExplorerSourceCode from "./WindowExplorerSourceCode";
import { WindowContext } from "../contexts/WindowContext";
import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	sourceCodeCommits?: SourceCodeCommit[];
};

const WindowExplorer: React.FC<Props> = ({ sourceCodeCommits }) => {	
	const { explorerSection } = useContext(WindowContext);

	return (
		<div className="col-span-1 overflow-hidden">
			<WindowExplorerSourceCode isOpen={explorerSection == "source-code"} sourceCodeCommits={sourceCodeCommits || []} />
		</div>
	);
};

export default WindowExplorer;