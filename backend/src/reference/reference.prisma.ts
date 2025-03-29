// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from "src/db/prisma.provider";

import { Injectable } from "@nestjs/common";
import type { Reference } from "@prisma/client";

@Injectable()
export class ReferencePrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getReferences(): Promise<Reference[]> {
		try {
			const references = await this.prisma.reference.findMany();
			return references;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar referências");
		}
	}
}
