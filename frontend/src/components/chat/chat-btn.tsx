import Link from "next/link";
import { Button } from "../ui/button";
import { WhatsAppIcon } from "./whats-app";

export function ChatBtn() {
	return (
		<div className="bg-transparent fixed cursor-pointer md:bottom-10 md:right-10 top-5 right-5 z-50 hover:scale-110 transition-all duration-300">
			<Link href="https://wa.me/351910344904">
				<WhatsAppIcon className="size-8 text-zinc-100" />
			</Link>
		</div>
	);
}
