import React from "react";
import { useRouter } from "next/router";

type Props = {
	children: React.ReactNode;
};

const WindowContent: React.FC<Props> = ({ children }) => {
	const router = useRouter();
	const isOpen = ["/projects", "/jobs", "/source-code"].includes(router.route);

	return (
		<div className={`${isOpen ? "col-span-1" : "col-span-2"}`}>{children}</div>
	);
};

export default WindowContent;