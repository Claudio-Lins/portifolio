import { ProjectsList } from "@/components/projects/projects-list";
import { Container } from "@/components/shared/Container";
import { getProjects } from "@/functions/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@core/index";

// interface ProjectProps {
// 	project: Project;
// }

export default async function Projects() {
	const projects = await getProjects();
	return (
		<div className={cn("flex flex-col gap-4 pt-24 bg-zinc-950")}>
			<Container>
				<ProjectsList projectsList={projects.allProjects} />
			</Container>
		</div>
	);
}
