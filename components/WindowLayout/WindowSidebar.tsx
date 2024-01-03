import {
  VscFiles,
  VscBook,
  VscSourceControl,
  VscGear,
  VscAccount,
} from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";

export default function WindowSidebar() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[1fr_min-content] content-between border-l-[1px] border-neutral-700 bg-neutral-800">
      <div className="overflow-hidden">
        <Link href="/">
          <div
            data-selected={router.pathname == "/"}
            className="group/link cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
          >
            <VscFiles className="text-2xl text-zinc-500 group-hover/link:text-zinc-100 group-data-[selected=true]/link:text-zinc-100" />
          </div>
        </Link>

        <Link href="/about-me" className="outline-none">
          <div
            data-selected={router.pathname == "/about-me"}
            className="group/link cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
          >
            <VscBook className="text-2xl text-zinc-500 group-hover/link:text-zinc-100 group-data-[selected=true]/link:text-zinc-100" />
          </div>
        </Link>

        <Link href="/commits" className="outline-none">
          <div
            data-selected={router.pathname == "/commits"}
            className="group/link cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
          >
            <VscSourceControl className="text-2xl text-zinc-500 group-hover/link:text-zinc-100 group-data-[selected=true]/link:text-zinc-100" />
          </div>
        </Link>
      </div>

      <div className="flex min-h-[min-content] flex-col">
        <div className="group/link cursor-pointer p-3">
          <VscAccount className="text-2xl text-zinc-500 group-hover/link:text-zinc-100" />
        </div>
        <div className="group/link cursor-pointer p-3">
          <VscGear className="text-2xl text-zinc-500 group-hover/link:text-zinc-100" />
        </div>
      </div>
    </div>
  );
}
