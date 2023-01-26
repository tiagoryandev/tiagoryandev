import React from "react";

type Props = {
	children: React.ReactNode;
};

const Modal: React.FC<Props> = props => {
	return (
		<div
			className="mx-auto mt-10 mb-5 p-4 w-full max-w-xl border-2 bg-slate-800 border-slate-700 rounded shadow-2xl"
			{...props}
		/>
	);
};

export default Modal;