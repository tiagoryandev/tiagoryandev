import React from "react";

type Props = {
	children: React.ReactNode;
};

const TitleArea: React.FC<Props> = (props) => {
	return (
		<h2
			className="mb-2 text-xl text-zinc-300 font-bold select-none"
			{...props}
		/>
	);
};

export default TitleArea;