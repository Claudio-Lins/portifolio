import { ProjectsList } from "@/components/projects/projects-list";
import { Container } from "@/components/shared/Container";
// import { getProjects } from "@/functions/projects";
import { httpGet } from "@/functions/api";
import { cn } from "@/lib/utils";
import { ProjectType, type Project } from "@core/project";

export const revalidate = 1;

async function getProjects(): Promise<Project[]> {
	const projects = await httpGet("/projects");
	return projects;
}

export default async function Projects() {
	const projects = await getProjects();
	return (
		<div className={cn("flex flex-col pt-24 bg-zinc-950 w-full min-h-dvh")}>
			<Container className="flex flex-col gap-8">
				{projects.some((project) => project.type === ProjectType.WEB) && (
					<ProjectsList
						title="Web"
						projectsList={projects.filter(
							(project) => project.type === ProjectType.WEB,
						)}
					/>
				)}
				{projects.some((project) => project.type === ProjectType.MOBILE) && (
					<ProjectsList
						title="Mobile"
						projectsList={projects.filter(
							(project) => project.type === ProjectType.MOBILE,
						)}
					/>
				)}
				{projects.some((project) => project.type === ProjectType.GAME) && (
					<ProjectsList
						title="Games"
						projectsList={projects.filter(
							(project: Project) => project.type === ProjectType.GAME,
						)}
					/>
				)}
			</Container>
		</div>
	);
}
