import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { MapPin } from "phosphor-react";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Tiago Ryan | FrontEnd & BackEnd Developer</title>
			</Head>
			<div className="mx-auto mt-10 p-4 w-full max-w-xl h-60 border-2 bg-slate-800 border-slate-700 rounded shadow-2xl">
				<div className="flex items-center gap-4">
					<div className="w-32 h-32 border-2 bg-cover bg-center bg-[url(https://github.com/tiagoryandev.png)] border-slate-700 rounded" />
					<div className="flex flex-col gap-1">
						<h1 className="flex items-center gap-2 text-3xl text-zinc-100 font-bold">
							Tiago Ryan
							<span className="py-1 px-2 text-xs font-normal bg-emerald-600 rounded">Junior</span>
						</h1>
						<p className="text-xl text-zinc-400">BackEnd Developer</p>
						<p className="flex items-center gap-2 text-md text-zinc-400"><MapPin weight="bold" className="w-5 h-5" /> Prainha/PA - Brasil</p>
					</div>
				</div>
				<div className="my-4 w-full border-t-2 border-slate-700" />
			</div>
		</>
	);
};

export default Home;