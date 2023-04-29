import { NextPage, GetServerSideProps } from "next";
import axios from "axios";

import WindowLayout from "../components/WindowLayout";
import { SourceCodeCommit } from "../types/WindowContextTypes";

type Props = {
	sourceCodeCommits: SourceCodeCommit[]
};

const SourceCode: NextPage<Props> = ({ sourceCodeCommits }) => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-blue-500">
			<WindowLayout sourceCodeCommits={sourceCodeCommits}>
				<h1>SourceCode!</h1>
			</WindowLayout>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const commits = await axios.get<SourceCodeCommit[]>("https://api.github.com/repos/tiagoryandev/tiagoryandev/commits");

	return {
		props: {
			sourceCodeCommits: commits.data
		}
	};
};

export default SourceCode;