import { NextPage } from "next";
import Image from "next/image";

import WindowLayout from "@/components/WindowLayout";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-blue-500">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<Image
						src="/avatar.jpeg"
						alt="Tiago Ryan Avatar"
						width={150}
						height={150}
						className="rounded-xl mb-5"
					/>
					<h1 className="text-center text-4xl text-zinc-100 font-bold">Tiago Ryan</h1>
					<h2 className="text-center text-xl text-green-500">FullStack Developer</h2>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;