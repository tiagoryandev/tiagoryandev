import React from "react";

export type WindowPages = "home" | "about" | "jobs" | "projects" | "source-code";

export type WindowProviderProps = {
	children: React.ReactNode;
};

export type WindowContextData = {
	explorerSection: WindowPages | null;
	setExplorerSection: React.Dispatch<React.SetStateAction<WindowPages | null>>;
};