import { useContext } from "react";
import Image from "next/image";

import { MotionWindowContext } from "@contexts/MotionWindowContext";

import WindowLayout from "@components/WindowLayout";

export default function Home() {
  const { screenRef } = useContext(MotionWindowContext);

  return (
    <div ref={screenRef} className="flex h-screen w-screen overflow-hidden">
      <WindowLayout>
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
            </div>
          </div>

          <div className="w-full border-t-[1px] border-neutral-700" />

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium text-zinc-100">Quem sou eu?</h1>
            <p className="w-full max-w-2xl text-zinc-100">
              Olá, sou Tiago Ryan. Ingressei na programação aos 13-14 anos,
              iniciando com o desenvolvimento de bots para Discord em JavaScript
              por cerca de dois anos. Posteriormente, direcionei meu foco para o
              desenvolvimento web, começando no backend com Node.js e
              posteriormente explorando o frontend com React. Essa jornada
              enriqueceu minhas habilidades técnicas e proporcionou uma
              compreensão abrangente do ciclo de desenvolvimento de software.
              Estou entusiasmado para continuar aprendendo e contribuindo para a
              comunidade.
            </p>
          </div>
        </div>
      </WindowLayout>
    </div>
  );
}
