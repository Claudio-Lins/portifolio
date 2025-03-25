import Link from "next/link";
import { Button } from "../ui/button";
import { WhatsAppIcon } from "./whats-app";

export function ChatBtn() {
	return (
		<div className="bg-transparent fixed cursor-pointer bottom-10 right-10 hover:scale-110 transition-all duration-300">
			<Link href="https://wa.me/5511999999999">
				<WhatsAppIcon className="size-12 text-zinc-100" />
			</Link>
		</div>
	);
}
