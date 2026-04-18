"use client";

import { useSearchParams } from "next/navigation";

import { PageFrame } from "@/components/page-frame";
import { PostArchiveList } from "@/components/post-archive-list";
import { PostKeywordSearchField } from "@/components/post-keyword-search-field";
import { PostSearchPagination } from "@/components/post-search-pagination";
import { usePostsQuery } from "@/hooks/use-posts-query";
import { paginatePosts, parseArchivePageParam } from "@/lib/paginate-posts";
import { filterPostsByKeyword } from "@/lib/search-posts";

function parseQueryParam(value: string | string[] | undefined): string {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value[0] ?? "";
	return "";
}

export function NewsSearchClient() {
	const searchParams = useSearchParams();
	const rawQuery = parseQueryParam(searchParams.get("q") ?? undefined);
	const trimmed = rawQuery.trim();
	const page = parseArchivePageParam(searchParams.get("page") ?? undefined);

	const { data: allPosts = [], isPending, isError, error } = usePostsQuery();
	const matched = trimmed ? filterPostsByKeyword(allPosts, rawQuery) : [];
	const { items, currentPage, totalPages, totalItems } = paginatePosts(
		matched,
		page,
	);

	const frameTitle = trimmed
		? `「${trimmed}」の検索結果`
		: "キーワード検索";

	if (isPending) {
		return (
			<PageFrame
				title={frameTitle}
				titleVariant={trimmed ? "doubleRule" : "default"}
				outerClassName="bg-black"
				backgroundImageSrc="/images/decoration/christmas-3.jpg"
			>
				<div className="mx-auto max-w-[760px] py-12 text-center text-[#6f5646]">
					読み込み中…
				</div>
			</PageFrame>
		);
	}

	if (isError) {
		return (
			<PageFrame
				title={frameTitle}
				titleVariant={trimmed ? "doubleRule" : "default"}
				outerClassName="bg-black"
				backgroundImageSrc="/images/decoration/christmas-3.jpg"
			>
				<div className="mx-auto max-w-[760px] py-12 text-center text-red-800">
					{error instanceof Error
						? error.message
						: "記事を読み込めませんでした。"}
				</div>
			</PageFrame>
		);
	}

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
