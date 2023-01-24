import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Separator from "@/components/Separator";
import TitleArea from "@/components/TitleArea";
import profileData from "../data/profile-data.json";

type HomeProps = typeof profileData;

const Home: NextPage<HomeProps> = (props) => {
	return (
		<>
			<Head>
				<title>{`${props.fullName} | ${props.occupation}`}</title>
			</Head>
			<div className="mx-auto mt-10 mb-5 p-4 w-full max-w-xl border-2 bg-slate-800 border-slate-700 rounded shadow-2xl">
				<Header
					{...props}
				/>
				<Separator />
				<TitleArea>Biografia</TitleArea>
				<p className="text-zinc-300 select-none">{props.biography}</p>
				<Separator />
				<TitleArea>Tecnologias</TitleArea>
				<div className="flex flex-wrap gap-2">
					{props.skills.map((skill, key) => (
						<span key={key} className="px-2 py-1 text-sm text-zinc-100 border-2 border-transparent bg-slate-700 hover:border-slate-600 cursor-pointer select-none rounded">{skill}</span>
					))}
				</div>
				<Separator />
				<TitleArea>Projetos</TitleArea>
				<div className="flex flex-col gap-2">
					{props.projects.map(({
						title,
						projectURL,
						bagde,
						description,
						timestamp
					}, key) => (
						<div key={key} className="flex gap-4">
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
					))}
				</div>
				<Separator />
				<TitleArea>Contatos e TitleArea Sociais</TitleArea>
				<ul className="flex flex-col gap-2">
					{props.links.map(({ name, value, url }, key) => (
						<li key={key} className="text-zinc-300 text-sm">{name}: <a className="text-blue-500 hover:underline" href={url}>{value}</a></li>
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