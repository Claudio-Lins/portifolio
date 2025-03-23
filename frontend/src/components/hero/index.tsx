import MinhaFoto from "#/minha-foto.jpg";
import type { Technology } from "@core/index";
import Image from "next/image";
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
		<div className="flex flex-col items-center justify-center h-dvh bg-black pb-20">
			<Container className="flex flex-col items-center justify-between h-full">
				<div className="flex-1 flex w-full items-center justify-between">
					<div className="flex flex-col items-center">
						<h1 className="text-6xl text-zinc-100 font-bold">Claudio Lins</h1>
						<p className="text-lg text-zinc-400">Frontend | Mobile Developer</p>
						<div className="mt-4">
							<Image src={MinhaFoto} alt="logo" width={380} height={380} />
						</div>
						<div className="mt-4">
							<HighlightTechs highlightTechs={highlightTechs} />
						</div>
					</div>
					<ChatWindow />
				</div>
				<Resume technologies={technologies} />
			</Container>
		</div>
	);
}
