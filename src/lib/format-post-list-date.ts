/** 一覧用: `2026-04-08` → `2026/4/8` */
export function formatPostListDate(isoDate: string): string {
	const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
	if (!m) return isoDate;
	const y = Number(m[1]);
	const mo = Number(m[2]);
	const d = Number(m[3]);
	return `${y}/${mo}/${d}`;
}
