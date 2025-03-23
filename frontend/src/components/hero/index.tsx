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
		<div className="w-full overflow-y-auto overflow-x-hidden flex flex-col items-center bg-black min-h-dvh pt-10">
			<Container className="flex flex-col items-center justify-start gap-8 w-full px-4 py-8">
				<div className="flex flex-col md:flex-row w-full items-center justify-between gap-6">
					<div className="flex flex-col items-center justify-center w-full md:w-1/2">
						<h1 className="text-4xl md:text-6xl text-zinc-100 font-bold text-center">
							Claudio Lins
						</h1>
						<p className="text-lg text-zinc-400 text-center mb-4">
							Frontend | Mobile Developer
						</p>
						<div className="hidden md:block">
							<Image
								src={MinhaFoto}
								alt="Claudio Lins"
								width={380}
								height={380}
								className="rounded-lg"
							/>
						</div>
						<div className="mt-4 w-full flex justify-center px-2">
							<HighlightTechs highlightTechs={highlightTechs} />
						</div>
					</div>
					<div className="w-full md:w-1/2 flex justify-center">
						<ChatWindow />
					</div>
				</div>
				<div className="w-full pt-4 overflow-x-auto">
					<Resume technologies={technologies} />
				</div>
			</Container>
		</div>
	);
}
