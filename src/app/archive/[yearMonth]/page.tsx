import { notFound } from "next/navigation";

import { PageFrame } from "@/components/page-frame";
import { PostArchiveList } from "@/components/post-archive-list";
import { PostArchivePagination } from "@/components/post-archive-pagination";
import {
	filterPostsByYearMonth,
	formatYearMonthTitleJp,
	isValidYearMonthKey,
} from "@/lib/archive-year-month";
import { getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { paginatePosts, parseArchivePageParam } from "@/lib/paginate-posts";
import { getArchiveMonthPath } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const revalidate = 60;

export async function generateStaticParams() {
	const posts = await getPosts();
	const months = new Set(posts.map((p) => p.publishedAt.slice(0, 7)));
	return [...months].map((yearMonth) => ({ yearMonth }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ yearMonth: string }>;
}) {
	const { yearMonth } = await params;
	const path = getArchiveMonthPath(yearMonth);
	if (!isValidYearMonthKey(yearMonth)) {
		return buildMetadata({
			title: buildPageTitle("記事一覧"),
			description: "月別の記事一覧です。",
			path,
		});
	}
	const ymLabel = formatYearMonthTitleJp(yearMonth);
	return buildMetadata({
		title: buildPageTitle(`${ymLabel}の記事一覧`),
		description: `${ymLabel}に公開したお知らせ・ブログの一覧です。`,
		path,
	});
}

export default async function ArchiveMonthPage({
	params,
	searchParams,
}: {
	params: Promise<{ yearMonth: string }>;
	searchParams: Promise<{ page?: string | string[] }>;
}) {
	const { yearMonth } = await params;
	if (!isValidYearMonthKey(yearMonth)) notFound();

	const { page: pageParam } = await searchParams;
	const page = parseArchivePageParam(pageParam);
	const posts = await getPosts();
	const monthPosts = filterPostsByYearMonth(posts, yearMonth);
	const { items, currentPage, totalPages } = paginatePosts(monthPosts, page);

	const title = `${formatYearMonthTitleJp(yearMonth)}の記事一覧`;

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
