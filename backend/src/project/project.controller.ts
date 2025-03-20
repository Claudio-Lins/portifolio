import { Controller, Get, Param } from "@nestjs/common";
// biome-ignore lint/style: Precisamos importar a classe real para injeção
import { ProjectsPrisma } from "./projects.prisma";

import type { Project } from "@/core";

@Controller("projects")
export class ProjectController {
	constructor(private readonly projectsPrisma: ProjectsPrisma) {}

	@Get()
	async getProjects(): Promise<Project[]> {
		return this.projectsPrisma.getProjects();
	}
	@Get(":id")
	async getProjectById(@Param("id") id: string): Promise<Project | null> {
		return this.projectsPrisma.getProjectById(Number.parseInt(id));
	}
}
