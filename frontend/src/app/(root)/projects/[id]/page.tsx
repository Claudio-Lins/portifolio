import { Readme } from "@/components/projects/Readme";
import { Resume } from "@/components/resume";
import { Container } from "@/components/shared/Container";
import { ImagesCarousel } from "@/components/shared/images-carousel";
import { Technologies } from "@/components/technologies/technologies";
import { getReadme } from "@/functions/github";
import { getProject } from "@/functions/projects";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
	params: Promise<{ id: string }>;
}

export const revalidate = 1;

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { id } = await params;
	const project = await getProject(id);

	if (!project) return null;

	const readme = await getReadme(project.repositoryUrl);

	return (
		<div className="bg-black">
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{project.name}</h1>
				<ImagesCarousel images={project.imagesUrl} />
				<Technologies list={project.technologies} smaller />
				<Readme markdown={readme} />
			</Container>
		</div>
	);
}
