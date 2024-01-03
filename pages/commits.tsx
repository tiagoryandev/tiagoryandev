import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import WindowExplorer from "@components/WindowLayout/WindowExplorer";
import WindowPage from "@components/WindowLayout/WindowPage";

interface CommitsProps {
  sourceCodeCommits: {
    sha: string;
    commit: {
      committer: {
        name: string;
        email: string;
        date: string;
      };
      message: string;
    };
    html_url: string;
    author: {
      avatar_url: string;
    };
  }[];
}

export default function Commits({ sourceCodeCommits }: CommitsProps) {
  return (
    <>
      <Head>
        <title>Commits - Tiago Ryan | Portfólio</title>
      </Head>
      <WindowExplorer>
        <div className="flex h-10 items-center px-3">
          <h1 className="select-none text-sm text-zinc-100">COMMITS</h1>
        </div>

        <div className="h-[calc(100%-40px)] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800">
          {sourceCodeCommits.map((data) => (
            <div
              key={data.sha}
              className="flex w-full flex-col gap-1 p-2 hover:bg-neutral-700"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={data.author.avatar_url}
                    alt="Github Avatar"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <Link
                    href={`https://github.com/${data.commit.committer.name}`}
                    className="cursor-pointer select-none text-sm text-zinc-200 hover:underline"
                  >
                    {data.commit.committer.name}
                  </Link>
                </div>
                <Link
                  href={data.html_url}
                  className="cursor-pointer select-none text-sm text-blue-500 hover:underline"
                >
                  #{data.sha.slice(0, 7)}
                </Link>
              </div>
              <p className="select-none text-sm text-zinc-300">
                {data.commit.message}
              </p>
              <p className="select-none text-xs text-zinc-500">
                {new Date(data.commit.committer.date).toLocaleDateString(
                  "pt-BR",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </p>
            </div>
          ))}
        </div>
      </WindowExplorer>
      <WindowPage>
        <div className="flex flex-col gap-2">
          <h1 className="select-none text-lg text-zinc-100">
            Commits do Projeto
          </h1>
          <p className="font-light text-zinc-300">
            Bem-vindo à página de commits do meu portfólio! Aqui, você pode
            acompanhar todas as recentes modificações neste espaço que reflete
            meu trabalho e habilidades.
          </p>
          <p className="font-light text-zinc-300">
            Fique a vontade para explorar e analisar todas as alterações feitas
            nesse projeto.
          </p>
          <span className="select-none text-sm font-light text-zinc-500">
            Att. Tiago Ryan
          </span>
        </div>
      </WindowPage>
    </>
  );
}

export async function getStaticProps() {
  const commits = await axios.get(
    "https://api.github.com/repos/tiagoryandev/tiagoryandev/commits",
  );

  return {
    props: {
      sourceCodeCommits: commits.data,
    },
  };
}
