"use client";

import { useSearchParams } from "next/navigation";

import { PageFrame } from "@/components/page-frame";
import { PostArchiveList } from "@/components/post-archive-list";
import { PostArchivePagination } from "@/components/post-archive-pagination";
import { usePostsQuery } from "@/hooks/use-posts-query";
import {
	filterPostsByYearMonth,
	formatYearMonthTitleJp,
} from "@/lib/archive-year-month";
import { paginatePosts, parseArchivePageParam } from "@/lib/paginate-posts";
import { getArchiveMonthPath } from "@/lib/routes";

type ArchiveMonthClientProps = {
	yearMonth: string;
};

export function ArchiveMonthClient({ yearMonth }: ArchiveMonthClientProps) {
	const searchParams = useSearchParams();
	const page = parseArchivePageParam(searchParams.get("page") ?? undefined);

	const { data: posts = [], isPending, isError, error } = usePostsQuery();
	const monthPosts = filterPostsByYearMonth(posts, yearMonth);
	const { items, currentPage, totalPages } = paginatePosts(monthPosts, page);

	const title = `${formatYearMonthTitleJp(yearMonth)}の記事一覧`;

	if (isPending) {
		return (
			<PageFrame
				title={title}
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
				title={title}
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
			title={title}
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px]">
				<PostArchiveList posts={items} showPostType />
				<PostArchivePagination
					basePath={getArchiveMonthPath(yearMonth)}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
		</PageFrame>
	);
}
