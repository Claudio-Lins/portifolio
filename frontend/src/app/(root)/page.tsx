import { Hero } from "@/components/hero";
import { Resume } from "@/components/resume";
import { Container } from "@/components/shared/Container";
import { getTechnologies } from "@/functions/technologies";

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
