import dayjs from "dayjs";

export function calculateDuration(startDate: string, endDate?: string): string {
	try {
		const start = dayjs(startDate);
		const end = endDate ? dayjs(endDate) : dayjs();

		// Verificar se as datas são válidas
		if (!start.isValid() || !end.isValid()) {
			return "Duração desconhecida";
		}

		const diffYears = end.diff(start, "year");
		const adjustedStart = start.add(diffYears, "year");

		const diffMonths = end.diff(adjustedStart, "month");

		if (diffYears === 0) {
			return diffMonths === 1 ? `${diffMonths} mês` : `${diffMonths} meses`;
		}

		const yearText = diffYears === 1 ? "ano" : "anos";
		const monthText = diffMonths === 1 ? "mês" : "meses";

		return diffMonths === 0
			? `${diffYears} ${yearText}`
			: `${diffYears} ${yearText}, ${diffMonths} ${monthText}`;
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		return "Duração desconhecida";
	}
}
