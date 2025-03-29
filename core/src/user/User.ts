export interface User {
	id: number;
	name: string;
	lastName: string;
	email: string;
	phone: string;
	imageUrl: string;
	gender: Gender;
	maritalStatus: MaritalStatus;
	personalAbout: string;
	professionalAbout: string;
	birthDate: Date;
	location: string;
	street: string;
	city: string;
	state: string;
	country: string;
	zip: string;
}

export enum Gender {
	MALE = "MALE",
	FEMALE = "FEMALE",
}

export enum MaritalStatus {
	MARRIED = "MARRIED",
	DIVORCED = "DIVORCED",
	WIDOWER = "WIDOWER",
	SEPARATED = "SEPARATED",
}
