import { cn } from "@/lib/utils";
import type { Technology } from "@core";
import Image from "next/image";

interface HighlightTechsProps {
	highlightTechs: Technology[];
}

export function HighlightTechs({ highlightTechs }: HighlightTechsProps) {
	return highlightTechs ? (
		<div className={cn("flex items-center justify-center gap-4")}>
			{highlightTechs.map((technology) => (
				<div
					key={technology.id}
					className={cn("flex items-center justify-center relative size-12")}
				>
					<Image
						src={technology?.imageUrl}
						alt={technology.name}
						fill
						className="object-contain"
					/>
				</div>
			))}
		</div>
	) : null;
}
