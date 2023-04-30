import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";

import {
	WindowContextData,
	WindowProviderProps,
	WindowPages
} from "../types/WindowContextTypes";

export const WindowContext = createContext<WindowContextData>({} as WindowContextData);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
	const router = useRouter();
	const [explorerSection, setExplorerSection] = useState<WindowPages | null>(null);
	
	useEffect(() => {
	}, []);

	return (
		<WindowContext.Provider value={{
			explorerSection,
			setExplorerSection
		}}>
			{children}
		</WindowContext.Provider>
	);
};