import Head from "next/head";
import Link from "next/link";
import { SiVisualstudiocode } from "react-icons/si";

import WindowPage from "@components/WindowLayout/WindowPage";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não Encontrada - Tiago Ryan | Portfólio</title>
      </Head>
      <WindowPage>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <SiVisualstudiocode className="text-9xl text-[#111111]" />
            <div className="flex flex-col items-center gap-2">
              <p className="select-none text-center text-zinc-400">
                Página não encontrada!
              </p>
              <div className="flex items-center gap-2">
                <span className="select-none text-xs text-zinc-400">
                  Ir para o Início
                </span>
                <Link
                  href="/"
                  className="cursor-pointer select-none rounded-[3px] bg-neutral-800 p-[2px_3px] text-xs font-light text-zinc-400 outline-none hover:bg-neutral-700 hover:text-zinc-300"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WindowPage>
    </>
  );
}
