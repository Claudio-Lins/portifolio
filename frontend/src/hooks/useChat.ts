"use client";

import { talk } from "@/functions/chat";
import type { Message } from "@/model/message";
import { Id } from "@core";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.generate());
	const [messages, setMessages] = useLocalStorage<Message[]>("messages", []);
	const [thinking, setThinking] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function addMessage(text: string) {
		try {
			setThinking(true);
			setError(null);

			const newMessage: Message = {
				id: Id.generate(),
				text: text,
				author: "Guest",
				side: "right",
			};

			setMessages((msgs) => [...msgs, newMessage]);

			const answer = await talk(chatId, newMessage);
			console.log("Resposta recebida:", answer);

			if (!answer) {
				setError(
					"Não foi possível obter uma resposta do servidor. Tente novamente mais tarde.",
				);
				console.log("Não consegui entender a sua mensagem");
				return;
			}

			const answerMessage: Message = {
				id: Id.generate(),
				text: answer,
				author: "Claudio",
				side: "left",
			};

			setMessages((msgs) => [...msgs, answerMessage]);
		} catch (err) {
			console.error("Erro ao processar mensagem:", err);
			setError("Ocorreu um erro ao processar sua mensagem. Tente novamente.");
		} finally {
			setThinking(false);
		}
	}

	function clearMessages() {
		setMessages([]);
		setError(null);
	}

	return {
		chatId,
		messages,
		thinking,
		error,
		addMessage,
		clearMessages,
	};
}
