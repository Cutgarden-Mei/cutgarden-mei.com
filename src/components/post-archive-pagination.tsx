import Link from "next/link";

type PostArchivePaginationProps = {
	basePath: string;
	currentPage: number;
	totalPages: number;
};

export function PostArchivePagination({
	basePath,
	currentPage,
	totalPages,
}: PostArchivePaginationProps) {
	if (totalPages <= 1) return null;

	const prevHref =
		currentPage <= 2 ? basePath : `${basePath}?page=${currentPage - 1}`;
	const nextHref = `${basePath}?page=${currentPage + 1}`;

	const linkClass =
		"inline-flex items-center gap-2 text-sm font-medium text-top-brown transition hover:opacity-70";
	const disabledClass =
		"inline-flex cursor-not-allowed items-center gap-2 text-sm font-medium text-[#a8988c]";

	return (
		<nav
			className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-[#c8c0ba] pt-8"
			aria-label="ページ送り"
		>
			<div>
				{currentPage > 1 ? (
					<Link href={prevHref} className={linkClass}>
						<span
							className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-xs"
							aria-hidden
						>
							‹
						</span>
						PREV
					</Link>
				) : (
					<span className={disabledClass}>
						<span
							className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-xs"
							aria-hidden
						>
							‹
						</span>
						PREV
					</span>
				)}
			</div>

			<p className="text-sm tabular-nums text-[#6f5646]">
				{currentPage} / {totalPages}
			</p>

			<div>
				{currentPage < totalPages ? (
					<Link href={nextHref} className={linkClass}>
						NEXT
						<span
							className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-xs"
							aria-hidden
						>
							›
						</span>
					</Link>
				) : (
					<span className={disabledClass}>
						NEXT
						<span
							className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-xs"
							aria-hidden
						>
							›
						</span>
					</span>
				)}
			</div>
		</nav>
	);
}
