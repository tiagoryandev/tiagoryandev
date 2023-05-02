import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	sourceCodeCommits: SourceCodeCommit[];
};

const WindowExplorerSourceCode: React.FC<Props> = ({ sourceCodeCommits }) => {
	const router = useRouter();

	return (
		<div className={`${!router.route.startsWith("/source-code") && "hidden"} w-full h-full bg-slate-800`}>
			<div className="px-2 py-3">
				<h1 className="text-xs text-zinc-100 select-none">SOURCE CODE</h1>
			</div>

			<div className="h-full pb-10 overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600">
				{sourceCodeCommits.map((data) => (
					<div key={data.sha} className="flex flex-col gap-1 w-full p-2 hover:bg-slate-700">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2">
								<Image
									src={data.author.avatar_url}
									alt="Github Avatar"
									width={20}
									height={20}
									className="rounded-full"
								/>
								<Link href={`https://github.com/${data.commit.committer.name}`} className="text-sm text-zinc-200 select-none cursor-pointer hover:underline">{data.commit.committer.name}</Link>
							</div>
							<Link href={data.html_url} className="text-sm text-blue-500 select-none cursor-pointer hover:underline">#{data.sha.slice(0, 7)}</Link>
						</div>
						<p className="text-sm text-zinc-300 whitespace-nowrap text-ellipsis overflow-clip select-none">{data.commit.message}</p>
						<p className="text-xs text-zinc-500 select-none">{new Date(data.commit.committer.date).toDateString()}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WindowExplorerSourceCode;