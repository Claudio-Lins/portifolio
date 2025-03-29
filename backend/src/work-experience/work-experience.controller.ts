import { Controller, Get, Param } from "@nestjs/common";
import type { WorkExperience } from "@prisma/client";
// biome-ignore lint/style/useImportType: Precisamos importar a classe real para injeção
import { WorkExperiencePrisma } from "./work-experience.prisma";

@Controller("work-experiences")
export class WorkExperienceController {
	constructor(private readonly workExperiencePrisma: WorkExperiencePrisma) {}

	@Get()
	async getWorkExperiences(): Promise<WorkExperience[]> {
		return this.workExperiencePrisma.getWorkExperiences();
	}
}
