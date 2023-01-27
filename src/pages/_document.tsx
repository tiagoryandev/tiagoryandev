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
			<Head>
				<meta name="description" content="Portfólio de Programador do Tiago Ryan." />
				<meta name="keywords" content="Programador,BackEnd,JavaScript,React.js,Node.js,Portfolio" />
				<meta name="robots" content="index,follow"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;