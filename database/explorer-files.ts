export type ExplorerFolder = {
	type: "folder";
	name: string;
	files: ExplorerFile[];
};

export type ExplorerFile = {
	type: "file";
	name: string;
	extension: string;
};