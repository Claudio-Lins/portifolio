import Link from "next/link";
import { Button } from "../ui/button";
import { WhatsAppIcon } from "./whats-app";

export function ChatBtn() {
	return (
		<div className="bg-transparent cursor-pointer  hover:scale-110 transition-all duration-300">
			<Link href="https://wa.me/351910344904">
				<WhatsAppIcon className="size-6 text-zinc-100" />
			</Link>
		</div>
	);
}
