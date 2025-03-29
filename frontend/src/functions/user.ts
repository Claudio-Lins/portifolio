import type { User } from "@core/user";
import { httpGet } from "./api";

export async function getUsers(): Promise<{ users: User[] }> {
	try {
		const users: User[] = await httpGet("/users");
		return {
			users,
		};
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		throw new Error("Erro ao buscar usuários");
	}
}
