export const POST_ARCHIVE_PAGE_SIZE = 20;

export type PaginatedResult<T> = {
	items: T[];
	currentPage: number;
	totalPages: number;
	totalItems: number;
};

export function paginatePosts<T>(
	items: T[],
	page: number,
	pageSize = POST_ARCHIVE_PAGE_SIZE,
): PaginatedResult<T> {
	const totalItems = items.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
	const currentPage = Math.min(Math.max(1, Math.floor(page) || 1), totalPages);
	const start = (currentPage - 1) * pageSize;

	return {
		items: items.slice(start, start + pageSize),
		currentPage,
		totalPages,
		totalItems,
	};
}

export function parseArchivePageParam(value: string | string[] | undefined): number {
	const raw = Array.isArray(value) ? value[0] : value;
	const n = raw ? Number.parseInt(raw, 10) : 1;
	if (!Number.isFinite(n) || n < 1) return 1;
	return n;
}
