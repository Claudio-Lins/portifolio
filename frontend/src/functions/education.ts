import { httpGet } from "./api";

interface EducationTypes {
	id: string;
	school: string;
	field: string;
	startDate: Date;
	endDate: Date | null;
}

export async function getEducations(): Promise<{
	educations: EducationTypes[];
}> {
	try {
		const educations: EducationTypes[] = await httpGet("/educations");
		return {
			educations,
		};
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		throw new Error("Erro ao buscar educações");
	}
}
