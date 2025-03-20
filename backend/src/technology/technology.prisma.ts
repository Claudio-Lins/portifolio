import type { Technology } from "@/core";
import { Injectable } from "@nestjs/common";
// biome-ignore lint/style: Precisamos importar a classe real para injeção
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class TechnologyPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getTechnologies(): Promise<Technology[]> {
		return this.prisma.technology.findMany();
	}

	async getHighlightedTechnologies(): Promise<Technology[]> {
		return this.prisma.technology.findMany({
			where: {
				highlight: true,
			},
		});
	}
}
