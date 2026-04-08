import { PageFrame } from "@/components/page-frame";
import { PostArchiveList } from "@/components/post-archive-list";
import { PostArchivePagination } from "@/components/post-archive-pagination";
import { getBlogPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import {
	paginatePosts,
	parseArchivePageParam,
} from "@/lib/paginate-posts";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("ブログの記事一覧"),
	description: "カットガーデンMeiのブログ記事一覧です。",
	path: ROUTES.blog,
});
export const revalidate = 60;

export default async function BlogIndexPage({
	searchParams,
}: {
	searchParams: Promise<{ page?: string | string[] }>;
}) {
	const { page: pageParam } = await searchParams;
	const page = parseArchivePageParam(pageParam);
	const allPosts = await getBlogPosts();
	const { items, currentPage, totalPages } = paginatePosts(allPosts, page);

	return (
		<PageFrame
			title="ブログカテゴリー：の記事一覧"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px]">
				<PostArchiveList posts={items} />
				<PostArchivePagination
					basePath={ROUTES.blog}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
		</PageFrame>
	);
}
