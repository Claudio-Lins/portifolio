import type { Technology } from "@core";
import { httpGet } from "./api";
export async function getTechnologies() {
	const technologies: Technology[] = await httpGet("/technologies");

	return {
		all: technologies,
		get highlight() {
			return technologies.filter((technology) => technology.highlight);
		},
	};
}
