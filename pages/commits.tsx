import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-zinc-100">Commits</h1>
      <Link href="/" className="text-zinc-100">
        Home
      </Link>
    </>
  );
}
