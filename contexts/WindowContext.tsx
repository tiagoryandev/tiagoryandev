import React, { useState, createContext } from "react";

import {
	WindowContextData,
	WindowProviderProps,
	WindowPages
} from "../types/WindowContextTypes";

export const WindowContext = createContext<WindowContextData | null>(null);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
	const [explorerSection, setExplorerSection] = useState<WindowPages | null>(null);
	
	return (
		<WindowContext.Provider value={{
			explorerSection,
			setExplorerSection
		}}>
			{children}
		</WindowContext.Provider>
	);
};