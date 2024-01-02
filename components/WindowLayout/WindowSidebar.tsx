import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscGear,
  VscAccount,
} from "react-icons/vsc";

export default function WindowSidebar() {
  return (
    <div className="grid grid-rows-[1fr_min-content] content-between border-l-[1px] border-neutral-700 bg-neutral-800">
      <div className="overflow-hidden">
        <div
          data-selected="true"
          className="group cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
        >
          <VscFiles className="text-2xl text-zinc-500 group-hover:text-zinc-100 group-data-[selected=true]:text-zinc-100" />
        </div>
        <div
          data-selected="false"
          className="group cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
        >
          <VscSearch className="text-2xl text-zinc-500 group-hover:text-zinc-100 group-data-[selected=true]:text-zinc-100" />
        </div>
        <div
          data-selected="false"
          className="group cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
        >
          <VscSourceControl className="text-2xl text-zinc-500 group-hover:text-zinc-100 group-data-[selected=true]:text-zinc-100" />
        </div>
        <div
          data-selected="false"
          className="group cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
        >
          <VscDebugAlt className="text-2xl text-zinc-500 group-hover:text-zinc-100 group-data-[selected=true]:text-zinc-100" />
        </div>
        <div
          data-selected="false"
          className="group cursor-pointer border-l-2 border-l-transparent p-3 data-[selected=true]:border-l-zinc-200"
        >
          <VscExtensions className="text-2xl text-zinc-500 group-hover:text-zinc-100" />
        </div>
      </div>

      <div className="flex min-h-[min-content] flex-col">
        <div className="group cursor-pointer p-3">
          <VscAccount className="text-2xl text-zinc-500 group-hover:text-zinc-100" />
        </div>
        <div className="group cursor-pointer p-3">
          <VscGear className="text-2xl text-zinc-500 group-hover:text-zinc-100" />
        </div>
      </div>
    </div>
  );
}
