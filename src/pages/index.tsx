import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Separator from "@/components/Separator";
import profileData from "../data/profile-data.json";

type HomeProps = typeof profileData;

const Home: NextPage<HomeProps> = (props) => {
	return (
		<>
			<Head>
				<title>{`${props.fullName} | ${props.occupation}`}</title>
			</Head>
			<Modal>
				<Header {...props} />
				
				<Separator />
				
				<Section title="Biografia" description={props.biography} />
				
				<Separator />
				
				<Section title="Tecnologias" description="Essas são principais tecnologias que eu uso para desenvolver projetos.">
					<Skills skills={props.skills} />
				</Section>
				
				<Separator />

				<Section title="Projetos" description="Abaixo está a lista dos meus principais projetos desenvolvidos durante a minha carreira na programação.">
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
				</Section>
				
				<Separator />

				<Section title="Contatos e Redes Sociais">
					<ul className="flex flex-col gap-2">
						{props.links.map(({ name, value, url }, key) => (
							<li key={key} className="text-zinc-300 text-sm">{name}: <a className="text-blue-500 hover:underline" href={url}>{value}</a></li>
						))}
					</ul>
				</Section>
			</Modal>
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