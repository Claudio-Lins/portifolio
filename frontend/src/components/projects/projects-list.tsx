import { cn } from "@/lib/utils";
import type { Project } from "@core/index";
import { ProjectCard } from "./project-card";

interface ProjectsListProps {
	projectsList: Project[];
}

export function ProjectsList({ projectsList }: ProjectsListProps) {
	return (
		<div className={cn("")}>
			<h1>ProjectsList</h1>
			<div className={cn("flex items-center justify-center flex-wrap gap-4")}>
				{projectsList.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
