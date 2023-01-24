import React from "react";

type Props = {
	avatarURL: string;
	fullName: string;
	developerBagde: string;
	occupation: string;
	location: string;
};

const Header: React.FC<Props> = ({
	avatarURL,
	fullName,
	developerBagde,
	occupation,
	location
}) => {
	return (
		<div className="flex flex-wrap items-center gap-4">
			<div className="w-28 h-28 border-2 bg-cover bg-center border-slate-700 rounded" style={{ backgroundImage: `url(${avatarURL})` }} />
			<div className="flex flex-col gap-1">
				<h1 className="flex flex-wrap items-center gap-2 text-3xl text-zinc-100 font-bold select-none">
					{fullName}
					<span className="py-1 px-2 text-xs font-normal bg-emerald-600 rounded">{developerBagde}</span>
				</h1>
				<p className="text-xl text-zinc-400 select-none">{occupation}</p>
				<p className="flex items-center gap-1 text-md text-zinc-400 select-none">{location}</p>
			</div>
		</div>
	);
};

export default Header;