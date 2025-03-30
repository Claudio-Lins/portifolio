import { httpGet } from "./api";

export interface WorkLocation {
	REMOTE: string;
	ONSITE: string;
	HYBRID: string;
}
export interface EmploymentType {
	FREELANCER: string;
	VOLUNTEER: string;
	EMPLOYEE: string;
}

export interface WorkExperienceProps {
	id: string;
	title: string;
	description: string;
	company: string;
	location: string;
	startDate: string | Date;
	endDate: string | Date | null;
	isCurrent: boolean;
	link: string | null;
	employmentType: EmploymentType;
	workLocation: WorkLocation;
}
export async function getWorkExperiences() {
	const workExperiences: WorkExperienceProps[] =
		await httpGet("/work-experiences");

	return workExperiences;
}
