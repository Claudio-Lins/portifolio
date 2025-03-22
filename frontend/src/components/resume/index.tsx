import { cn } from "@/lib/utils";
import type { Technology } from "@core";
import { UsedTechs } from "./used-techs";

interface ResumeProps {
	technologies: Technology[];
}

export function Resume({ technologies }: ResumeProps) {
	return (
		<div className={cn("")}>
			<UsedTechs technologies={technologies} />
		</div>
	);
}
