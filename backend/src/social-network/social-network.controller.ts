import { Controller, Get, Param } from "@nestjs/common";
import type { SocialNetwork } from "@prisma/client";
// biome-ignore lint/style/useImportType: Precisamos importar a classe real para injeção
import { SocialNetworkPrisma } from "./social-network.prisma";

@Controller("social-networks")
export class SocialNetworkController {
	constructor(private readonly socialNetworkPrisma: SocialNetworkPrisma) {}

	@Get()
	async getSocialNetworks(): Promise<SocialNetwork[]> {
		return this.socialNetworkPrisma.getSocialNetworks();
	}
}
