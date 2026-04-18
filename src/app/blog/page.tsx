import { Suspense } from "react";

import { BlogIndexClient } from "@/components/news/blog-index-client";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("ブログの記事一覧"),
	description: "カットガーデンMeiのブログ記事一覧です。",
	path: ROUTES.blog,
});

const fallback = (
	<PageFrame
		title="ブログカテゴリー：の記事一覧"
		outerClassName="bg-black"
		backgroundImageSrc="/images/decoration/christmas-3.jpg"
	>
		<div className="mx-auto max-w-[760px] py-12 text-center text-[#6f5646]">
			読み込み中…
		</div>
	</PageFrame>
);

export default function BlogIndexPage() {
	return (
		<Suspense fallback={fallback}>
			<BlogIndexClient />
		</Suspense>
	);
}
