import React from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { WindowProvider } from "@/contexts/WindowContext";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<WindowProvider>
			<Component {...pageProps} />
		</WindowProvider>
	);
};

export default App;