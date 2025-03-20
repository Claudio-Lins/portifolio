import type { Technology } from "@/core";
import { Controller, Get } from "@nestjs/common";
// biome-ignore lint/style: Precisamos importar a classe real para injeção
import { TechnologyPrisma } from "./technology.prisma";

@Controller("technologies")
export class TechnologyController {
	constructor(private readonly technologyPrisma: TechnologyPrisma) {}

	@Get()
	async getTechnologies(): Promise<Technology[]> {
		return this.technologyPrisma.getTechnologies();
	}

	@Get("highlighted")
	async getHighlightedTechnologies(): Promise<Technology[]> {
		return this.technologyPrisma.getHighlightedTechnologies();
	}
}
