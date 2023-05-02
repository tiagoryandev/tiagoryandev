import React from "react";

export type WindowPages = "home" | "about" | "jobs" | "projects" | "source-code";

export type SourceCodeCommit = {
	sha: string;
	commit: {
		committer: {
			name: string;
			email: string;
			date: string;
		},
		message: string;
	};
	html_url: string;
	author: {
		avatar_url: string;
	};
};

export type WindowProviderProps = {
	children: React.ReactNode;
};

export type WindowContextData = {
	explorerSection: WindowPages | null;
	setExplorerSection: React.Dispatch<React.SetStateAction<WindowPages | null>>;
};