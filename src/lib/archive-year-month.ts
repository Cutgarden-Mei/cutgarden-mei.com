const YEAR_MONTH_KEY_RE = /^\d{4}-(0[1-9]|1[0-2])$/;

export function isValidYearMonthKey(value: string): boolean {
	return YEAR_MONTH_KEY_RE.test(value);
}

export function filterPostsByYearMonth<T extends { publishedAt: string }>(
	posts: T[],
	yearMonth: string,
): T[] {
	return posts.filter((p) => p.publishedAt.startsWith(yearMonth));
}

export function formatYearMonthTitleJp(yearMonth: string): string {
	const [y, m] = yearMonth.split("-");
	return `${y}年${m}月`;
}
