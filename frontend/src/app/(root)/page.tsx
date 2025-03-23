import { Hero } from "@/components/hero";
import { getTechnologies } from "@/functions/technologies";

export const revalidate = 1;
export default async function Home() {
	const technologies = await getTechnologies();
	return (
		<div className="flex flex-col h-screen">
			<Hero
				technologies={technologies.all}
				highlightTechs={technologies.highlight}
			/>
		</div>
	);
}
