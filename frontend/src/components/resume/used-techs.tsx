import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Technology } from "@core";

interface UsedTechsProps {
	technologies: Technology[];
}

export function UsedTechs({ technologies }: UsedTechsProps) {
	return technologies ? (
		<div className={cn("flex flex-wrap items-center justify-center gap-4")}>
			{technologies.map((technology) => (
				<TooltipProvider key={technology.id}>
					<Tooltip>
						<TooltipTrigger className="flex items-center text-sm text-zinc-100 justify-center bg-zinc-800 rounded-lg px-3 py-1 cursor-pointer">
							{technology.name}
						</TooltipTrigger>
						<TooltipContent className="bg-zinc-800 text-white">
							<p>{technology.description}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			))}
		</div>
	) : null;
}
