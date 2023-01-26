import React from "react";

type Props = {
	title: string;
	description?: string;
	children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, description, children }) => {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-xl text-zinc-300 font-bold select-none">{title}</h2>
			{description && <p className="text-zinc-300 select-none">{description}</p>}
			{children}
		</div>
	);
};

export default Section;