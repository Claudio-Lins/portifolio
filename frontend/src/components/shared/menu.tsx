"use client";

import { usePathname } from "next/navigation";
import { MenuItem } from "./menu-item";

export function Menu() {
	const pathname = usePathname();
	return (
		<nav className="flex items-center gap-8 text-zinc-100">
			<MenuItem href="/" selected={pathname === "/"}>
				Home
			</MenuItem>
			<MenuItem href="/projects" selected={pathname === "/projects"}>
				Projects
			</MenuItem>
			<MenuItem href="/about" selected={pathname === "/about"}>
				About
			</MenuItem>
			{/* <MenuItem href="/contact" selected={pathname === "/contact"}>
				Contact
			</MenuItem> */}
		</nav>
	);
}
