import Image from "next/image";

import WindowPage from "@components/WindowLayout/WindowPage";

export default function AboutMe() {
  return (
    <WindowPage>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <Image
            src="https://github.com/tiagoryandev.png"
            alt="Tiago Ryan"
            width={460}
            height={460}
            className="h-20 w-20 rounded-md"
          />
          <div className="flex flex-col">
            <h1 className="select-none text-2xl font-bold text-zinc-100">
              Tiago Ryan
            </h1>
            <p className="select-none font-medium text-emerald-500">
              Desenvolvedor BackEnd
            </p>
            <span className="select-none text-sm text-zinc-400">
              {" "}
              Santarém - PA
            </span>
          </div>
        </div>

        <div className="w-full border-t-[1px] border-neutral-700" />

        <div className="flex flex-col gap-2">
          <h1 className="select-none text-xl font-medium text-zinc-100">
            Quem sou eu?
          </h1>
          <p className="w-full max-w-2xl text-sm font-thin text-zinc-100">
            &emsp;Olá, sou Tiago Ryan. Ingressei na programação aos 13-14 anos,
            iniciando com o desenvolvimento de bots para Discord em JavaScript
            por cerca de dois anos. Posteriormente, direcionei meu foco para o
            desenvolvimento web, começando no backend com Node.js e
            posteriormente explorando o frontend com React.
          </p>
          <p className="w-full max-w-2xl text-sm font-thin text-zinc-100">
            &emsp;Essa jornada enriqueceu minhas habilidades técnicas e
            proporcionou uma compreensão abrangente do ciclo de desenvolvimento
            de software. Estou entusiasmado para continuar aprendendo e
            contribuindo para a comunidade.
          </p>
        </div>

        <div className="w-full border-t-[1px] border-neutral-700" />

        <div className="flex flex-col gap-2">
          <h1 className="select-none text-xl font-medium text-zinc-100">
            Experiência
          </h1>
          <div className="flex flex-col">
            <div className="relative ml-2 border-l-[1px] border-l-neutral-700 pb-4 pl-4">
              <div className="absolute -left-[7px] top-0 h-[14px] w-[14px] rounded-full bg-neutral-700" />
              <div className="flex flex-col">
                <span className="select-none text-xs text-zinc-500">
                  Maio de 2023 até Outubro de 2023 - 6 meses
                </span>
                <div className="flex flex-col">
                  <h1 className="select-none text-zinc-100">
                    Auxiliar de Desenvolvimento de Software
                  </h1>
                  <span className="select-none text-sm text-zinc-300">
                    A.J Creative Business And Design · Estágio
                  </span>
                </div>
                <span className="select-none text-xs text-zinc-400">
                  Prainha, Pará, Brasil - Presencial
                </span>
              </div>
            </div>
            <div className="relative ml-2 border-l-[1px] border-l-neutral-700 pl-4">
              <div className="absolute -left-[7px] top-0 h-[14px] w-[14px] rounded-full bg-neutral-700" />
              <div className="flex flex-col">
                <span className="select-none text-xs text-zinc-500">
                  Maio de 2023 até Junho de 2023 - 2 meses
                </span>
                <div className="flex flex-col">
                  <h1 className="select-none text-zinc-100">
                    BackEnd Developer
                  </h1>
                  <span className="select-none text-sm text-zinc-300">
                    Oluha Group - Tempo Integral
                  </span>
                </div>
                <span className="select-none text-xs text-zinc-400">
                  Virgínia, Estados Unidos - Remota
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t-[1px] border-neutral-700" />

        <div className="flex flex-col gap-2">
          <h1 className="select-none text-xl font-medium text-zinc-100">
            Formações
          </h1>
          <div className="flex items-center gap-3">
            <Image
              src="/estacio-logo.png"
              alt="Estácio Logo"
              width={200}
              height={200}
              className="h-16 w-16 rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="select-none text-sm font-light text-zinc-100">
                Análise e Desenvolvimento de Sistemas
              </h1>
              <p className="select-none text-sm font-light text-zinc-400">
                Estácio - Cursando
              </p>
              <span className="select-none text-xs text-zinc-500">
                Janeiro de 2024
              </span>
            </div>
          </div>
        </div>

        <span className="select-none text-sm text-zinc-500">
          Desenvolvido por Tiago Ryan.
        </span>
      </div>
    </WindowPage>
  );
}
