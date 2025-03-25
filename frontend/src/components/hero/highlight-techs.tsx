import { cn } from "@/lib/utils";
import type { Technology } from "@core";
import Image from "next/image";

interface HighlightTechsProps {
	highlightTechs: Technology[];
}

export function HighlightTechs({ highlightTechs }: HighlightTechsProps) {
	return highlightTechs ? (
		<div
			className={cn(
				"flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-full",
			)}
		>
			{highlightTechs.map((technology) => (
				<div
					key={technology.id}
					className={cn("flex flex-col items-center justify-center gap-1 p-1")}
				>
					<div className="relative size-6 sm:size-10 md:size-12">
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
				</div>
			))}
		</div>
	) : null;
}
