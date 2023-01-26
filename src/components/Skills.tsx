import React from "react";

type Skill = {
	code: string;
	name: string;
};

type Props = {
	skills: Skill[];
};

const Skills: React.FC<Props> = ({ skills }) => {
	return (
		<div className="flex flex-wrap gap-2">
			{skills.map(({ code, name }) => (
				<span key={code} className="px-2 py-1 text-sm text-zinc-100 border-2 border-transparent bg-slate-700 hover:border-slate-600 cursor-pointer select-none rounded">{name}</span>
			))}
		</div>
	);
};

export default Skills;