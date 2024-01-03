import Image from "next/image";

import WindowPage from "@components/WindowLayout/WindowPage";

export default function Home() {
  return (
    <WindowPage>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="https://github.com/tiagoryandev.png"
            alt="Tiago Ryan"
            width={460}
            height={460}
            className="h-40 w-40 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="select-none text-center text-3xl font-bold text-zinc-100">
              Tiago Ryan
            </h1>
            <div className="flex flex-col gap-1">
              <p className="select-none text-center text-emerald-500">
                {"<"} Desenvolvedor BackEnd {"/>"}
              </p>
              <span className="select-none text-center text-sm text-zinc-400">
                Seja Bem-vindo ao meu Portfólio!
              </span>
            </div>
          </div>
        </div>
      </div>
    </WindowPage>
  );
}
