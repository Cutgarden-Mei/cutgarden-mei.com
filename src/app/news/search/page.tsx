import { Suspense } from "react";

import { NewsSearchClient } from "@/components/news/news-search-client";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { parseArchivePageParam } from "@/lib/paginate-posts";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

function parseQueryParam(
	value: string | string[] | undefined,
): string {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value[0] ?? "";
	return "";
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ q?: string | string[]; page?: string | string[] }>;
}) {
	const { q, page: pageParam } = await searchParams;
	const query = parseQueryParam(q).trim();
	const page = parseArchivePageParam(pageParam);
	const pageSuffix = page > 1 ? `（${page}ページ目）` : "";
	const title = query
		? buildPageTitle(`「${query}」の検索結果${pageSuffix}`)
		: buildPageTitle("キーワード検索");

	return buildMetadata({
		title,
		description: query
			? `「${query}」を含む記事の検索結果です。`
			: "お知らせ・ブログ記事をキーワードで検索できます。",
		path: ROUTES.newsSearch,
	});
}

const fallback = (
	<PageFrame
		title="キーワード検索"
		outerClassName="bg-black"
		backgroundImageSrc="/images/decoration/christmas-3.jpg"
	>
		<div className="mx-auto max-w-[760px] py-12 text-center text-[#6f5646]">
			読み込み中…
		</div>
	</PageFrame>
);

export default function NewsSearchPage() {
	return (
		<Suspense fallback={fallback}>
			<NewsSearchClient />
		</Suspense>
	);
}
