import { NextPage } from "next";

import WindowLayout from "@/components/WindowLayout";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-blue-500">
			<WindowLayout>
				<h1>Hello, World!</h1>
			</WindowLayout>
		</div>
	);
};

export default Home;