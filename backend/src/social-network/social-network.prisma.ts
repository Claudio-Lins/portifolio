// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from "src/db/prisma.provider";

import { Injectable } from "@nestjs/common";
import type { SocialNetwork } from "@prisma/client";

@Injectable()
export class SocialNetworkPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getSocialNetworks(): Promise<SocialNetwork[]> {
		try {
			const socialNetworks = await this.prisma.socialNetwork.findMany();
			return socialNetworks;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar redes sociais");
		}
	}

	async getSocialNetworkById(id: string): Promise<SocialNetwork | null> {
		try {
			const socialNetwork = await this.prisma.socialNetwork.findUnique({
				where: { id },
			});

			if (!socialNetwork) return null;

			return socialNetwork;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar rede social por ID");
		}
	}

	async createSocialNetwork(socialNetworkData: {
		name: string;
		url: string;
	}): Promise<SocialNetwork> {
		try {
			const socialNetwork = await this.prisma.socialNetwork.create({
				data: socialNetworkData,
			});
			return socialNetwork;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao criar rede social");
		}
	}

	async updateSocialNetwork(
		id: string,
		socialNetworkData: Partial<Omit<SocialNetwork, "id" | "createdAt">>,
	): Promise<SocialNetwork> {
		try {
			const socialNetwork = await this.prisma.socialNetwork.update({
				where: { id },
				data: socialNetworkData,
			});
			return socialNetwork;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao atualizar rede social");
		}
	}

	async deleteSocialNetwork(id: string): Promise<SocialNetwork> {
		try {
			const socialNetwork = await this.prisma.socialNetwork.delete({
				where: { id },
			});
			return socialNetwork;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao excluir rede social");
		}
	}
}
