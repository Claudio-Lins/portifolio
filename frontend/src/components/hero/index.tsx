import type { Technology } from "@core/index";
import { ChatWindow } from "../chat/chat-window";
import { Resume } from "../resume";
import { Container } from "../shared/Container";
import { HighlightTechs } from "./highlight-techs";

interface HeroProps {
	technologies: Technology[];
	highlightTechs: Technology[];
}

export function Hero({ technologies, highlightTechs }: HeroProps) {
	return (
		<div className="flex flex-col h-dvh bg-[url('/principal.jpg')] bg-cover bg-center pt-24">
			<Container className="flex-1 flex flex-col items-center justify-between">
				<div className="flex flex-col items-center">
					<h1 className="text-6xl font-bold">Claudio Lins</h1>
					<p className="text-lg text-zinc-400">Frontend | Mobile Developer</p>
					<div className="mt-4">
						<HighlightTechs highlightTechs={highlightTechs} />
					</div>
					<div className="mt-4">
						<ChatWindow />
					</div>
				</div>
				<Resume technologies={technologies} />
			</Container>
		</div>
	);
}
