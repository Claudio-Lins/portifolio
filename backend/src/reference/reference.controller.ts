import { Controller, Get } from "@nestjs/common";
import type { Reference } from "@prisma/client";
// biome-ignore lint/style/useImportType: Precisamos importar a classe real para injeção
import { ReferencePrisma } from "./reference.prisma";

@Controller("references")
export class ReferenceController {
	constructor(private readonly referencePrisma: ReferencePrisma) {}

	@Get()
	async getReferences(): Promise<Reference[]> {
		return this.referencePrisma.getReferences();
	}
}
