// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from "src/db/prisma.provider";

import type { Project } from "@/core";
// biome-ignore lint/style: Precisamos do enum em tempo de execução
import { ProjectType } from "@/core";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectsPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getProjects(): Promise<Project[]> {
		const projects = await this.prisma.project.findMany();

		return projects as Project[];
	}

	async getProjectById(id: number): Promise<Project | null> {
		const project = await this.prisma.project.findUnique({
			where: { id },
			include: {
				technologies: true,
			},
		});

		if (!project) return null;

		return {
			...project,
			type: project.type as unknown as ProjectType,
		};
	}
}
