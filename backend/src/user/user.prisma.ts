// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from "src/db/prisma.provider";

import { Injectable } from "@nestjs/common";
import type { Gender, MaritalStatus, User } from "@prisma/client";

@Injectable()
export class UserPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getUsers(): Promise<User[]> {
		try {
			const users = await this.prisma.user.findMany();
			return users;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar usuários");
		}
	}

	async getUserById(id: number): Promise<User | null> {
		try {
			const user = await this.prisma.user.findUnique({
				where: { id },
			});

			if (!user) return null;

			return user;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar usuário por ID");
		}
	}

	async createUser(userData: {
		name: string;
		lastName: string;
		email: string;
		phone: string;
		imageUrl: string;
		gender: Gender;
		maritalStatus?: MaritalStatus;
		personalAbout: string;
		professionalAbout: string;
		birthDate: Date;
		location: string;
		street: string;
		city: string;
		state: string;
		country: string;
		zip: string;
	}): Promise<User> {
		try {
			const user = await this.prisma.user.create({
				data: userData,
			});
			return user;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao criar usuário");
		}
	}

	async updateUser(
		id: number,
		userData: Partial<Omit<User, "id" | "createdAt">>,
	): Promise<User> {
		try {
			const user = await this.prisma.user.update({
				where: { id },
				data: userData,
			});
			return user;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao atualizar usuário");
		}
	}

	async deleteUser(id: number): Promise<User> {
		try {
			const user = await this.prisma.user.delete({
				where: { id },
			});
			return user;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao excluir usuário");
		}
	}
}
