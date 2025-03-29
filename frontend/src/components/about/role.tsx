import { cn } from "@/lib/utils";

// interface RoleProps {
// 	role?: string;
// }

export function Role() {
	return (
		<div
			className={cn(
				"w-full flex items-center justify-center py-6 uppercase space-x-2 print:border-t print:border-b print:py-2",
			)}
		>
			<span className="text-2xl font-semibold print:text-lg tracking-[1rem] print:tracking-[0.5rem] text-zinc-100">
				Frontend and Mobile Developer
			</span>
		</div>
	);
}
