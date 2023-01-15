import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { MapPin } from "phosphor-react";
import profileData from "../data/profile-data.json";

type HomeProps = typeof profileData;

const Home: NextPage<HomeProps> = ({
	avatarURL,
	fullName,
	userBagde,
	occupation,
	location,
	biography,
	projects,
	links
}) => {
	return (
		<>
			<Head>
				<title>{fullName} | {occupation}</title>
			</Head>
			<h1 className="mt-5 text-zinc-100 text-center text-2xl font-bold">Bem-vindo ao meu Portfólio</h1>
			<div className="mx-auto my-5 p-4 w-full max-w-xl border-2 bg-slate-800 border-slate-700 rounded shadow-2xl">
				<div className="flex items-center gap-4">
					<div className="w-28 h-28 border-2 bg-cover bg-center border-slate-700 rounded" style={{ backgroundImage: `url(${avatarURL})` }} />
					<div className="flex flex-col gap-1">
						<h1 className="flex items-center gap-2 text-3xl text-zinc-100 font-bold">
							{fullName}
							<span className="py-1 px-2 text-xs font-normal bg-emerald-600 rounded">{userBagde}</span>
						</h1>
						<p className="text-xl text-zinc-400">{occupation}</p>
						<p className="flex items-center gap-1 text-md text-zinc-400"><MapPin weight="bold" className="w-4 h-4" />{location}</p>
					</div>
				</div>
				<div className="my-4 w-full border-t-2 border-slate-700" />
				<h2 className="mb-2 text-xl text-zinc-300 font-bold">Biografia</h2>
				<p className="text-zinc-300">{biography}</p>
				<div className="my-4 w-full border-t-2 border-slate-700" />
				<h2 className="mb-2 text-xl text-zinc-300 font-bold">Projetos</h2>
				<div className="flex flex-col gap-2">
					{projects.map(({
						title,
						projectURL,
						bagde,
						description,
						timestamp
					}) => (
						<>
							<div className="flex gap-4">
								<div className="border-l-2 border-slate-700" />
								<div>
									<h3 className="text-md text-zinc-300 font-bold">
										<a className="hover:underline cursor-pointer" href={projectURL}>{title}</a>
										<span className="ml-2 px-2 py-1 text-xs text-zinc-100 font-normal bg-emerald-600 rounded">{bagde}</span>
									</h3>
									<p className="text-sm text-zinc-300">{description}</p>
									<span className="text-xs text-zinc-400">{timestamp}</span>
								</div>
							</div>
						</>
					))}
				</div>
				<div className="my-4 w-full border-t-2 border-slate-700" />
				<h2 className="mb-2 text-xl text-zinc-300 font-bold">Contatos e Redes Sociais</h2>
				<ul className="flex flex-col gap-2">
					{links.map(({ name, value, url }) => (
						<>
							<li className="text-zinc-300 text-sm">{name}: <a className="text-blue-500 hover:underline" href={url}>{value}</a></li>
						</>
					))}
				</ul>
			</div>
			<footer className="mb-5 text-zinc-500 text-center text-sm">Copyright &copy; {new Date().getFullYear()} - BusqueDevs</footer>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: profileData,
		revalidate: 60 * 60 * 4
	};
};

export default Home;