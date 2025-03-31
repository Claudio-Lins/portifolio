import { cn } from "@/lib/utils";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	fullWidthOnMobile?: boolean;
}

export function Container({
	children,
	className,
	fullWidthOnMobile = false,
}: ContainerProps) {
	return (
		<div
			className={cn(
				"max-w-7xl mx-auto",
				fullWidthOnMobile ? "px-0 md:px-4" : "px-4",
				className,
			)}
		>
			{children}
		</div>
	);
}
