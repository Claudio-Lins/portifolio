"use client";

import thinkingBallon from "#/pensando.gif";
import { ContentMD } from "@/components/shared/ContentMD";
import { useChat } from "@/hooks/useChat";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export function ChatWindow() {
	const { chatId, messages, addMessage, thinking, clearMessages, error } =
		useChat();
	const [text, setText] = useState("");
	const endChatRef = useRef<HTMLDivElement>(null);

	// Efeito para rolar a visualização para o fim do chat
	useEffect(() => {
		if (endChatRef.current) {
			endChatRef.current.scrollIntoView({ behavior: "smooth" });
		}
	});

	return (
		<div
			className={cn(
				"bg-zinc-950 w-full max-w-sm md:max-w-xl rounded-lg text-zinc-100 p-2",
			)}
		>
			<div className={cn("w-full mx-auto")}>
				<div className={cn("flex flex-col gap-4")}>
					<h1
						className={cn(
							"text-xl md:text-2xl font-bold text-zinc-50 text-center",
						)}
					>
						Chat com Claudio Lins
					</h1>

					{error && (
						<div
							className={cn(
								"bg-red-900/30 border border-red-800 text-red-300 p-3 rounded-md text-sm",
							)}
						>
							{error}
						</div>
					)}

					<div
						className={cn(
							"border border-zinc-800 bg-zinc-900 rounded-lg p-4 h-[250px] md:h-[300px] overflow-y-auto",
						)}
					>
						{messages.length === 0 ? (
							<div className="text-center text-zinc-500 p-4">
								Envie uma mensagem para iniciar a conversa com o Claudio Lins.
							</div>
						) : (
							<div className={cn("flex flex-col gap-3")}>
								{messages.map((message) => (
									<div
										key={message.id}
										className={cn(
											"p-3 rounded-lg max-w-[90%]",
											message.side === "right"
												? "bg-indigo-900/70 self-end text-zinc-100"
												: "bg-zinc-800 self-start text-zinc-100",
										)}
									>
										<div
											className={cn(
												"text-xs font-medium mb-1",
												message.side === "right"
													? "text-indigo-300"
													: "text-zinc-400",
											)}
										>
											{message.author}
										</div>
										<ContentMD markdown={message.text} />
									</div>
								))}

								{thinking && (
									<div
										className={cn(
											"bg-zinc-800 self-start p-3 rounded-lg animate-pulse",
										)}
									>
										<div
											className={cn("text-xs font-medium mb-1 text-zinc-400")}
										>
											Claudio Lins
										</div>
										<div className={cn("text-sm")}>
											<Image
												src={thinkingBallon}
												alt="Loading"
												width={50}
												height={50}
											/>
										</div>
										<div ref={endChatRef} />
									</div>
								)}
							</div>
						)}
					</div>

					<div className="mt-4">
						<div className="flex gap-2">
							<input
								type="text"
								value={text}
								disabled={thinking}
								onKeyDown={(e) => {
									if (e.key === "Enter" && text.trim() !== "") {
										addMessage(text);
										setText("");
									}
								}}
								onChange={(e) => setText(e.target.value)}
								placeholder="Digite sua mensagem..."
								className={cn(
									"flex-1 rounded-md border border-zinc-700 bg-zinc-900 p-3 text-zinc-100 placeholder:text-zinc-500",
									thinking && "opacity-50 cursor-not-allowed",
								)}
							/>
							<button
								type="button"
								onClick={() => {
									if (text.trim() !== "") {
										addMessage(text);
										setText("");
									}
								}}
								disabled={thinking || !text.trim()}
								className={cn(
									"px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-md",
									(thinking || !text.trim()) && "opacity-50 cursor-not-allowed",
								)}
							>
								Enviar
							</button>
						</div>

						{messages.length > 0 && (
							<button
								type="button"
								onClick={clearMessages}
								className="mt-2 text-sm text-zinc-500 hover:text-zinc-300 hover:underline"
							>
								Limpar conversa
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
