import Link from "next/link";
import { Container } from "./Container";
import { LinkedInIcon } from "./linked-in";
import { Menu } from "./menu";

export function Header() {
	return (
		<header className="flex items-center h-16 fixed w-full bg-transparent backdrop-blur-sm z-50">
			<Container className="flex-1 flex items-center justify-between">
				<Menu />
				<Link
					href="https://www.linkedin.com/in/claudio-lins/"
					target="_blank"
					className="hidden md:block"
				>
					<LinkedInIcon className="w-6 h-6 text-zinc-100" />
				</Link>
			</Container>
		</header>
	);
}
