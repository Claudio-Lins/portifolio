import { ChatBtn } from "@/components/chat/chat-btn";
import { Header } from "@/components/shared/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="">
			<Header />
			{children}
			<ChatBtn />
		</div>
	);
}
