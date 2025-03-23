import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
	params: Promise<{ id: string }>;
}

export const revalidate = 1;

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { id } = await params;

	return (
		<div className={cn("flex flex-col gap-4 pt-16 bg-zinc-950 min-h-screen")}>
			<Container>
				<h1 className={cn("text-4xl font-bold text-zinc-100")}>Project {id}</h1>
			</Container>
		</div>
	);
}
