import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
// biome-ignore lint/style: Precisamos importar a classe real para injeção
import type { Gender, MaritalStatus, User } from "@prisma/client";
import { UserPrisma } from "./user.prisma";

interface CreateUserDto {
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
}

type UpdateUserDto = Partial<CreateUserDto>;

@Controller("users")
export class UserController {
	constructor(private readonly userPrisma: UserPrisma) {}

	@Get()
	async getUsers(): Promise<User[]> {
		return this.userPrisma.getUsers();
	}

	@Get(":id")
	async getUserById(@Param("id") id: string): Promise<User | null> {
		return this.userPrisma.getUserById(Number.parseInt(id));
	}

	@Post()
	async createUser(@Body() userData: CreateUserDto): Promise<User> {
		return this.userPrisma.createUser({
			...userData,
			birthDate: new Date(userData.birthDate),
		});
	}

	@Put(":id")
	async updateUser(
		@Param("id") id: string,
		@Body() userData: UpdateUserDto,
	): Promise<User> {
		const parsedData = userData.birthDate
			? {
					...userData,
					birthDate: new Date(userData.birthDate),
				}
			: userData;
		
		return this.userPrisma.updateUser(Number.parseInt(id), parsedData);
	}

	@Delete(":id")
	async deleteUser(@Param("id") id: string): Promise<User> {
		return this.userPrisma.deleteUser(Number.parseInt(id));
	}
} 