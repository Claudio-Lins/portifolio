// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Id {
	static generate(): string {
		const p1 = Math.random().toString(36).substring(2, 9);
		const p2 = Math.random().toString(36).substring(2, 9);
		const p3 = Math.random().toString(36).substring(2, 9);
		return `${p1}-${p2}-${p3}`;
	}
}
