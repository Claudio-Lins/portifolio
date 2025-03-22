import chatIcon from "#/chat.svg";
import Image from "next/image";

export function ChatBtn() {
	return (
		<div className="bg-transparent fixed cursor-pointer bottom-10 right-10">
			<Image
				src={chatIcon}
				alt="chat icon"
				className="size-14 hover:scale-110 transition-all duration-300"
			/>
		</div>
	);
}
