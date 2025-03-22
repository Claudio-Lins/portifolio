import type { Project } from "@core";
import { ProjectType } from "@core";
import { httpGet } from "./api";

export async function getProjects() {
	const projects: Project[] = await httpGet("/projects");

	return {
		allProjects: projects,
		get mobile() {
			return projects.filter((project) => project.type === ProjectType.MOBILE);
		},
		get web() {
			return projects.filter((project) => project.type === ProjectType.WEB);
		},
		get games() {
			return projects.filter((project) => project.type === ProjectType.GAME);
		},
		get highlights() {
			return projects.filter((project) => project.highlight);
		},
	};
}

export async function getProject(id: string): Promise<Project | null> {
	return await httpGet(`/projects/${id}`);
}
