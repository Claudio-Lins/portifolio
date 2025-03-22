"use server";
import type { Message } from "@/model/message";

export async function talk(
	chatId: string,
	message: Message,
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK;
	console.log("Webhook URL:", webhookUrl);
	if (!webhookUrl) return null;

	try {
		console.log("Enviando mensagem:", message.text);
		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chatId,
				message: message.text,
			}),
		});

		console.log("Status da resposta:", response.status);

		if (!response.ok) {
			console.error("Erro na resposta:", response.statusText);
			return null;
		}

		const responseText = await response.text();
		console.log("Resposta completa:", responseText);

		try {
			const msg = JSON.parse(responseText);
			console.log("Objeto da resposta:", msg);

			// Verifica a estrutura da resposta
			if (msg && typeof msg === "object") {
				// Tenta encontrar a resposta em diferentes propriedades comuns
				if (msg.answer !== undefined) return msg.answer;
				if (msg.response !== undefined) return msg.response;
				if (msg.message !== undefined) return msg.message;
				if (msg.text !== undefined) return msg.text;
				if (msg.content !== undefined) return msg.content;

				// Se for uma string direta
				if (typeof msg === "string") return msg;

				// Mostra as chaves disponíveis para debug
				console.log("Chaves disponíveis na resposta:", Object.keys(msg));

				// Tenta usar a primeira propriedade string se existir
				for (const key in msg) {
					if (typeof msg[key] === "string") {
						console.log(`Usando propriedade '${key}' como resposta`);
						return msg[key];
					}
				}
			}

			console.error(
				"Não foi possível encontrar uma resposta válida na mensagem",
			);
			return null;
		} catch (parseError) {
			console.error("Erro ao processar JSON:", parseError);

			// Se não for JSON válido, retorna o texto como está
			if (responseText && typeof responseText === "string") {
				return responseText;
			}

			return null;
		}
	} catch (error) {
		console.error("Erro ao comunicar com webhook:", error);
		return null;
	}
}
