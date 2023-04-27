import React from "react";

import WindowExplorerFiles from "./WindowExplorerFiles";

type Props = {
	content: "search" | "files" | "source-control" | "debug" | "extensions";
};

const WindowExplorer: React.FC<Props> = ({ content }) => {
	return (
		<div className="col-span-1">
			<WindowExplorerFiles />
		</div>
	);
};

export default WindowExplorer;