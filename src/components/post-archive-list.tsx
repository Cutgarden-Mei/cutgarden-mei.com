import Link from "next/link";

import { formatPostListDate } from "@/lib/format-post-list-date";
import { getNewsDetailRoute } from "@/lib/routes";
import type { Post } from "@/lib/types";

type PostArchiveListProps = {
	posts: Post[];
	showPostType?: boolean;
	/** 検索結果一覧: タイトル先頭に ◆、種別バッジは出さない */
	listVariant?: "default" | "search";
};

function getPostTypeLabel(post: Post) {
	return post.type === "blog" ? "ブログ" : "お知らせ";
}

function displaySearchTitle(title: string) {
	return title.startsWith("◆") ? title : `◆${title}`;
}

export function PostArchiveList({
	posts,
	showPostType = false,
	listVariant = "default",
}: PostArchiveListProps) {
	if (posts.length === 0) {
		return (
			<p className="py-8 text-center text-base text-[#6f5646]">
				現在、記事はありません。
			</p>
		);
	}

	const showType = showPostType && listVariant !== "search";

	return (
		<ul className="divide-y divide-dashed divide-[#c8c0ba]">
			{posts.map((post) => (
				<li key={post.slug} className="py-5 first:pt-0 last:pb-0">
					<Link
						href={getNewsDetailRoute(post.slug)}
						className="group block transition hover:opacity-85"
					>
						<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
							{showType ? (
								<span className="rounded border border-[#d5c5ba] bg-[#f5f0eb] px-2 py-0.5 text-xs text-[#5c4a40]">
									{getPostTypeLabel(post)}
								</span>
							) : null}
							<p className="text-base font-medium text-top-pink md:text-lg group-hover:underline">
								{listVariant === "search"
									? displaySearchTitle(post.title)
									: post.title}
							</p>
						</div>
						<p
							className={
								listVariant === "search"
									? "mt-2 text-sm text-[#6f5646]"
									: "mt-2 text-sm text-[#3d2f28]"
							}
						>
							{formatPostListDate(post.publishedAt)}
						</p>
					</Link>
				</li>
			))}
		</ul>
	);
}
