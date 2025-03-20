import type { Technology } from "../technology/Technology";
import type { Level } from "./Level";
import type { ProjectType } from "./Type";

export interface Project {
	id: number;
	name: string;
	description: string;
	imagesUrl: string[];
	highlight: boolean;
	type: ProjectType;
	level: Level;
	repositoryUrl: string;
	technologies: Technology[];
}
