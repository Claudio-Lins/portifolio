import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Erro ao acessar localStorage:", error);
			return initialValue;
		}
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				localStorage.setItem(key, JSON.stringify(storedValue));
			} catch (error) {
				console.error("Erro ao salvar no localStorage:", error);
			}
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue] as const;
}
