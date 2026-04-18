"use client";

import { useSearchParams } from "next/navigation";

import { PageFrame } from "@/components/page-frame";
import { PostArchiveList } from "@/components/post-archive-list";
import { PostArchivePagination } from "@/components/post-archive-pagination";
import { usePostsQuery } from "@/hooks/use-posts-query";
import { paginatePosts, parseArchivePageParam } from "@/lib/paginate-posts";
import { ROUTES } from "@/lib/routes";

const frameProps = {
	title: "お知らせカテゴリー：の記事一覧",
	outerClassName: "bg-black",
	backgroundImageSrc: "/images/decoration/christmas-3.jpg",
} as const;

export function NewsIndexClient() {
	const searchParams = useSearchParams();
	const page = parseArchivePageParam(searchParams.get("page") ?? undefined);
	const { data: allPosts = [], isPending, isError, error } = usePostsQuery();
	const filtered = allPosts.filter((p) => p.type === "news");
	const { items, currentPage, totalPages } = paginatePosts(filtered, page);

	if (isPending) {
		return (
			<PageFrame {...frameProps}>
				<div className="mx-auto max-w-[760px] py-12 text-center text-[#6f5646]">
					読み込み中…
				</div>
			</PageFrame>
		);
	}

	if (isError) {
		return (
			<PageFrame {...frameProps}>
				<div className="mx-auto max-w-[760px] py-12 text-center text-red-800">
					{error instanceof Error
						? error.message
						: "記事を読み込めませんでした。"}
				</div>
			</PageFrame>
		);
	}

	return (
		<PageFrame {...frameProps}>
			<div className="mx-auto max-w-[760px]">
				<PostArchiveList posts={items} />
				<PostArchivePagination
					basePath={ROUTES.news}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
		</PageFrame>
	);
}
