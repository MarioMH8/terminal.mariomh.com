export default function uniqueId(prefix = 'id'): string {
	const rand = Math.random().toString(16).slice(2);

	return `${prefix}_${rand}`;
}
