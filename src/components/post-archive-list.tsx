import Link from "next/link";

import { formatPostListDate } from "@/lib/format-post-list-date";
import { getNewsDetailRoute } from "@/lib/routes";
import type { Post } from "@/lib/types";

type PostArchiveListProps = {
	posts: Post[];
	showPostType?: boolean;
};

export function PostArchiveList({ posts }: PostArchiveListProps) {
	if (posts.length === 0) {
		return (
			<p className="py-8 text-center text-base text-[#6f5646]">
				現在、記事はありません。
			</p>
		);
	}

	return (
		<ul className="divide-y divide-dashed divide-[#c8c0ba]">
			{posts.map((post) => (
				<li key={post.slug} className="py-5 first:pt-0 last:pb-0">
					<Link
						href={getNewsDetailRoute(post.slug)}
						className="group block transition hover:opacity-85"
					>
						<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
							<p className="text-base font-medium text-top-pink md:text-lg group-hover:underline">
								{post.title}
							</p>
						</div>
						<p className="mt-2 text-sm text-[#3d2f28]">
							{formatPostListDate(post.publishedAt)}
						</p>
					</Link>
				</li>
			))}
		</ul>
	);
}
