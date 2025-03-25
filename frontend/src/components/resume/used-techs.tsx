import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Technology } from "@core";
import Image from "next/image";
interface UsedTechsProps {
	technologies: Technology[];
}

export function UsedTechs({ technologies }: UsedTechsProps) {
	return technologies ? (
		<div
			className={cn(
				"flex flex-wrap items-center justify-center gap-2 sm:px-40",
			)}
		>
			{technologies.map((technology) => (
				<TooltipProvider key={technology.id}>
					<Tooltip>
						<TooltipTrigger className="flex flex-col items-center text-sm text-zinc-100 justify-center bg-transparent  rounded-lg px-3 py-1 cursor-pointer hover:scale-105 transition-all duration-300 gap-2">
							<div className="relative size-6">
								<Image
									src={technology?.imageUrl}
									alt={technology.name}
									fill
									className="object-contain"
								/>
							</div>
							<span className="hidden sm:block text-xs text-zinc-400 text-center whitespace-nowrap">
								{technology.name}
							</span>
						</TooltipTrigger>
						<TooltipContent className="bg-zinc-800 text-white text-center max-w-[200px]">
							<p>{technology.description}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			))}
		</div>
	) : null;
}
