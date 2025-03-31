import { cn } from "@/lib/utils";
import type { Project } from "@core/index";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { ProjectCard } from "./project-card";

interface ProjectsListProps {
	title: string;
	projectsList: Project[];
}

export function ProjectsList({ title, projectsList }: ProjectsListProps) {
	return (
		<div className="flex flex-col items-center sm:items-start w-[40%] md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-white/70">{title}</h3>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent
					className={cn("flex", projectsList.length < 4 && "gap-12")}
				>
					{projectsList.map((project) => (
						<CarouselItem
							key={project.id}
							className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
							<ProjectCard project={project} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
