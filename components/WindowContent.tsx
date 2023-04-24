import React from "react";

type Props = {
	children: React.ReactNode;
};

const WindowContent: React.FC<Props> = ({ children }) => {
	return (
		<div className="col-span-1">{children}</div>
	);
};

export default WindowContent;