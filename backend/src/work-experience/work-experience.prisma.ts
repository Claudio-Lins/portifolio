// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from "src/db/prisma.provider";

import { Injectable } from "@nestjs/common";
import type { WorkExperience } from "@prisma/client";

@Injectable()
export class WorkExperiencePrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getWorkExperiences(): Promise<WorkExperience[]> {
		try {
			const workExperiences = await this.prisma.workExperience.findMany();
			return workExperiences;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar experiências de trabalho");
		}
	}

	async getWorkExperienceById(id: string): Promise<WorkExperience | null> {
		try {
			const workExperience = await this.prisma.workExperience.findUnique({
				where: { id },
			});

			if (!workExperience) return null;

			return workExperience;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar experiência de trabalho por ID");
		}
	}
}
