import Logo from "#/logo.svg";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Menu } from "./menu";
export function Header() {
	return (
		<header className="flex items-center h-16 fixed w-full bg-zinc-900/50 backdrop-blur-sm z-50">
			<Container className="flex-1 flex items-center justify-between">
				<Link href="/" className="hidden md:block">
					<Image src={Logo} alt="logo" width={80} height={80} />
				</Link>
				<Menu />
				<Link
					href="https://www.linkedin.com/in/claudio-lins/"
					target="_blank"
					className="hidden md:block"
				>
					<Linkedin className="w-6 h-6" />
				</Link>
			</Container>
		</header>
	);
}
