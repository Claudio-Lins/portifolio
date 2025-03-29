import { Controller, Get } from "@nestjs/common";
import type { Education } from "@prisma/client";
// biome-ignore lint/style/useImportType: Precisamos importar a classe real para injeção
import { EducationPrisma } from "./education.prisma";

@Controller("educations")
export class EducationController {
	constructor(private readonly educationPrisma: EducationPrisma) {}

	@Get()
	async getEducations(): Promise<Education[]> {
		return this.educationPrisma.getEducations();
	}
}
