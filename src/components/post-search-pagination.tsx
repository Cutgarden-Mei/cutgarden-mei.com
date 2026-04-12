import Image from "next/image";
import Link from "next/link";

import { buildNewsSearchUrl } from "@/lib/routes";

type PostSearchPaginationProps = {
	/** 検索クエリ（ページ URL の `q` と一致） */
	query: string;
	currentPage: number;
	totalPages: number;
};

/**
 * 記事詳細の NEW / PREV ナビと同じ見た目。
 * 新しい結果（前のページ）が左 NEW、より古い結果（次のページ）が右 PREV。
 */
export function PostSearchPagination({
	query,
	currentPage,
	totalPages,
}: PostSearchPaginationProps) {
	if (totalPages <= 1) return null;

	const canGoNewer = currentPage > 1;
	const canGoOlder = currentPage < totalPages;

	return (
		<nav
			className="mt-6 flex items-center justify-between gap-4 border-t border-[#d5c5ba] px-0 py-5 text-sm text-top-brown"
			aria-label="検索結果のページ送り"
		>
			<div>
				{canGoNewer ? (
					<Link
						href={buildNewsSearchUrl(query, currentPage - 1)}
						className="inline-flex items-center gap-2 transition hover:opacity-70"
					>
						<Image
							src="/images/decoration/circle-up.png"
							alt=""
							width={28}
							height={28}
							className="h-7 w-7 shrink-0 -rotate-90"
							aria-hidden
						/>
						<span>NEW</span>
					</Link>
				) : (
					<span />
				)}
			</div>

			<p className="shrink-0 tabular-nums text-[#6f5646]">
				{currentPage} / {totalPages}
			</p>

			<div>
				{canGoOlder ? (
					<Link
						href={buildNewsSearchUrl(query, currentPage + 1)}
						className="inline-flex items-center gap-2 transition hover:opacity-70"
					>
						<span>PREV</span>
						<Image
							src="/images/decoration/circle-up.png"
							alt=""
							width={28}
							height={28}
							className="h-7 w-7 shrink-0 rotate-90"
							aria-hidden
						/>
					</Link>
				) : (
					<span />
				)}
			</div>
		</nav>
	);
}
