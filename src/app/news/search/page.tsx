import { PageFrame } from "@/components/page-frame";
import { PostArchiveList } from "@/components/post-archive-list";
import { PostKeywordSearchField } from "@/components/post-keyword-search-field";
import { PostSearchPagination } from "@/components/post-search-pagination";
import { getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { paginatePosts, parseArchivePageParam } from "@/lib/paginate-posts";
import { filterPostsByKeyword } from "@/lib/search-posts";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const revalidate = 60;

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

export default async function NewsSearchPage({
	searchParams,
}: {
	searchParams: Promise<{ q?: string | string[]; page?: string | string[] }>;
}) {
	const { q, page: pageParam } = await searchParams;
	const rawQuery = parseQueryParam(q);
	const trimmed = rawQuery.trim();
	const page = parseArchivePageParam(pageParam);
	const allPosts = await getPosts();
	const matched = trimmed ? filterPostsByKeyword(allPosts, rawQuery) : [];
	const { items, currentPage, totalPages, totalItems } = paginatePosts(
		matched,
		page,
	);

	const frameTitle = trimmed
		? `「${trimmed}」の検索結果`
		: "キーワード検索";

	return (
		<PageFrame
			title={frameTitle}
			titleVariant={trimmed ? "doubleRule" : "default"}
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px]">
				<div className="mb-6 flex justify-center md:justify-start">
					<PostKeywordSearchField defaultQuery={rawQuery} />
				</div>

				{!trimmed ? (
					<p className="py-6 text-center text-base text-[#6f5646] md:text-left">
						検索キーワードを入力して、お知らせ・ブログの記事を検索できます。
					</p>
				) : totalItems === 0 ? (
					<p className="py-8 text-center text-base text-[#6f5646]">
						「{trimmed}」に一致する記事はありませんでした。
					</p>
				) : (
					<>
						<p className="mb-4 text-sm text-[#5c4a40]">
							{totalItems}件の記事が見つかりました。
						</p>
						<PostArchiveList
							posts={items}
							listVariant="search"
							showPostType={false}
						/>
						<PostSearchPagination
							query={rawQuery}
							currentPage={currentPage}
							totalPages={totalPages}
						/>
					</>
				)}
			</div>
		</PageFrame>
	);
}
