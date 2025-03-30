import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Technology } from "@core";
import Image from "next/image";

interface SkillsProps {
	technologies: Technology[];
}

export function Skills({ technologies }: SkillsProps) {
	return technologies ? (
		<div className={cn("flex flex-col items-start justify-start gap-2")}>
			<h3 className="uppercase font-light text-zinc-100 myPrintingSubTitle">
				Skills
			</h3>
			{technologies
				// .filter((technology) => !technology?.highlight)
				.map((technology) => (
					<TooltipProvider key={technology.id}>
						<Tooltip>
							<TooltipTrigger className=" flex flex-wrap items-center text-sm text-zinc-100 justify-center   rounded-lg px-3 py-1 cursor-pointer hover:scale-105 transition-all duration-300 gap-2">
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
