import React from "react";

export type WindowPages = "home" | "jobs";

export type WindowProviderProps = {
	children: React.ReactNode;
};

export type WindowContextData = {
	explorerSection: WindowPages | null;
	setExplorerSection: React.Dispatch<React.SetStateAction<WindowPages | null>>;
};