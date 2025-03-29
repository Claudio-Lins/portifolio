// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from "src/db/prisma.provider";

import { Injectable } from "@nestjs/common";
import type { Education } from "@prisma/client";

@Injectable()
export class EducationPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getEducations(): Promise<Education[]> {
		try {
			const educations = await this.prisma.education.findMany();
			return educations;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar formações acadêmicas");
		}
	}

	async getEducationById(id: string): Promise<Education | null> {
		try {
			const education = await this.prisma.education.findUnique({
				where: { id },
			});

			if (!education) return null;

			return education;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao buscar formação acadêmica por ID");
		}
	}

	async createEducation(educationData: {
		school: string;
		field: string;
		startDate: Date;
		endDate?: Date | null;
	}): Promise<Education> {
		try {
			const education = await this.prisma.education.create({
				data: educationData,
			});
			return education;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao criar formação acadêmica");
		}
	}

	async updateEducation(
		id: string,
		educationData: Partial<Omit<Education, "id">>,
	): Promise<Education> {
		try {
			const education = await this.prisma.education.update({
				where: { id },
				data: educationData,
			});
			return education;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao atualizar formação acadêmica");
		}
	}

	async deleteEducation(id: string): Promise<Education> {
		try {
			const education = await this.prisma.education.delete({
				where: { id },
			});
			return education;
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			throw new Error("Erro ao excluir formação acadêmica");
		}
	}
}
