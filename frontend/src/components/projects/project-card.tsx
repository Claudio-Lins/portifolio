import { cn } from "@/lib/utils";
import type { Project } from "@core/index";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link href={`/projects/${project.id}`} className={cn("group")}>
			<div
				className={cn(
					"relative rounded-lg overflow-hidden min-w-64 min-h-64 border border-zinc-800",
				)}
			>
				<Image
					src={project.imagesUrl[0]}
					alt={project.name}
					fill
					className="object-cover"
				/>
				<div className="invisible group-hover:visible absolute inset-0 flex items-center justify-center p-2 bg-black/50 text-white">
					<h3 className="text-2xl font-bold">{project.name}</h3>
				</div>
			</div>
		</Link>
	);
}
