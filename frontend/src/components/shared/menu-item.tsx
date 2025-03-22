import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuItemProps {
	href: string;
	children: React.ReactNode;
	selected?: boolean;
	className?: string;
	blank?: boolean;
}

export function MenuItem({
	href,
	children,
	selected,
	className,
	blank,
}: MenuItemProps) {
	return (
		<Link
			href={href}
			target={blank ? "_blank" : undefined}
			className={cn(
				"text-lg font-medium transition-colors hover:text-zinc-100",
				selected && "text-zinc-100 font-bold border-b-2 border-zinc-100",
			)}
		>
			{children}
		</Link>
	);
}
