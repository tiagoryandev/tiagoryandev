import React from "react";
import {
	Html,
	Head,
	Main,
	NextScript
} from "next/document";

const Document = () => {
	return (
		<Html lang="pt">
			<Head />
			<body className="bg-slate-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;