import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { MapPin } from "phosphor-react";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Tiago Ryan | Programador BackEnd</title>
			</Head>
			<h1 className="mt-5 text-zinc-100 text-center text-2xl font-bold">Bem-vindo ao meu Portfólio</h1>
			<div className="mx-auto my-5 p-4 w-full max-w-xl border-2 bg-slate-800 border-slate-700 rounded shadow-2xl">
				<div className="flex items-center gap-4">
					<div className="w-28 h-28 border-2 bg-cover bg-center bg-[url(https://github.com/tiagoryandev.png)] border-slate-700 rounded" />
					<div className="flex flex-col gap-1">
						<h1 className="flex items-center gap-2 text-3xl text-zinc-100 font-bold">
							Tiago Ryan
							<span className="py-1 px-2 text-xs font-normal bg-emerald-600 rounded">Junior</span>
						</h1>
						<p className="text-xl text-zinc-400">Programador BackEnd</p>
						<p className="flex items-center gap-1 text-md text-zinc-400"><MapPin weight="bold" className="w-4 h-4" /> Prainha/PA - Brasil</p>
					</div>
				</div>
				<div className="my-4 w-full border-t-2 border-slate-700" />
				<h2 className="mb-2 text-xl text-zinc-300 font-bold">Biografia</h2>
				<p className="text-zinc-300">Sou Tiago Ryan, tenho 17 anos, moro na cidade de Prainha no Pará e estou estudando no Ensino Médio na 2º Série. Estou com mais de 3 anos de estudos em programação e desenvolvimento web, adquirindo muita experiencia durante meus estudos.</p>
				<div className="my-4 w-full border-t-2 border-slate-700" />
				<h2 className="mb-2 text-xl text-zinc-300 font-bold">Projetos</h2>
				<div className="flex flex-col gap-2">
					<div className="flex gap-4">
						<div className="border-l-2 border-slate-700" />
						<div>
							<h3 className="text-md text-zinc-300 font-bold"><a className="hover:underline cursor-pointer" href="https://busquedevs.com.br/">BusqueDevs</a><span className="ml-2 px-2 py-1 text-xs text-zinc-100 font-normal bg-emerald-600 rounded">Em Breve</span></h3>
							<p className="text-sm text-zinc-300">Está afim de procurar um bom programador para trabalhar no seu projeto ou empresa? Então você chegou no lugar certo, pois a BusqueDevs fornece uma plataforma que ajuda a conectar você com diversos desenvolvedores do Brasil.</p>
							<span className="text-xs text-zinc-400">Agosto de 2022 - até o momento</span>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="border-l-2 border-slate-700" />
						<div>
							<h3 className="text-md text-zinc-300 font-bold"><a className="hover:underline cursor-pointer" href="https://github.com/FinancesApp">Finances App</a><span className="ml-2 px-2 py-1 text-xs text-zinc-100 font-normal bg-emerald-600 rounded">Projeto Arquivado</span></h3>
							<p className="text-sm text-zinc-300">O Serviço para Gerenciar suas Receitas e Despesas. Esse é um projeto feito para ajudar pessoas com problemas para gerenciar suas receitas e despesas, assim dando um controle online sobre o que você recebeu e gastou no seu mês.</p>
							<span className="text-xs text-zinc-400">Fevereiro de 2022 - Julho de 2022</span>
						</div>
					</div>
				</div>
				<div className="my-4 w-full border-t-2 border-slate-700" />
				<h2 className="mb-2 text-xl text-zinc-300 font-bold">Contatos e Redes Sociais</h2>
				<ul className="flex flex-col gap-2">
					<li className="text-zinc-300 text-sm">Linkedin: <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/tiagoryan">tiagoryan</a></li>
					<li className="text-zinc-300 text-sm">Twitter: <a className="text-blue-500 hover:underline" href="https://twitter.com/tiagoryandev">@tiagoryandev</a></li>
					<li className="text-zinc-300 text-sm">Instagram: <a className="text-blue-500 hover:underline" href="https://instagram.com/tiagoryandev">@tiagoryandev</a></li>
					<li className="text-zinc-300 text-sm">Github: <a className="text-blue-500 hover:underline" href="https://github.com/tiagoryandev">tiagoryandev</a></li>
					<li className="text-zinc-300 text-sm">Email: <a className="text-blue-500 hover:underline" href="maito:tiagoryandev@gmail.com">tiagoryandev@gmail.com</a></li>
					<li className="text-zinc-300 text-sm">WhatsApp: <span className="px-2 py-1 bg-slate-900 rounded">+55 93 98412 1976</span></li>
				</ul>
			</div>
			<footer className="mb-5 text-zinc-500 text-center text-sm">Copyright &copy; {new Date().getFullYear()} - BusqueDevs</footer>
		</>
	);
};

export default Home;