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

          <p className="text-zinc-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod
            sed veniam repellat provident suscipit numquam consectetur ab dolor
            ex voluptatibus, dolore ullam cupiditate magni! Nam earum
            consequuntur tempora rem.
          </p>
          <p className="text-zinc-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod
            sed veniam repellat provident suscipit numquam consectetur ab dolor
            ex voluptatibus, dolore ullam cupiditate magni! Nam earum
            consequuntur tempora rem.
          </p>
          <p className="text-zinc-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod
            sed veniam repellat provident suscipit numquam consectetur ab dolor
            ex voluptatibus, dolore ullam cupiditate magni! Nam earum
            consequuntur tempora rem.
          </p>
          <p className="text-zinc-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod
            sed veniam repellat provident suscipit numquam consectetur ab dolor
            ex voluptatibus, dolore ullam cupiditate magni! Nam earum
            consequuntur tempora rem.
          </p>
        </div>
      </WindowLayout>
    </div>
  );
}
