import { Suspense } from "react";

import { NewsIndexClient } from "@/components/news/news-index-client";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("お知らせの記事一覧"),
	description: "カットガーデンMeiからのお知らせ一覧です。",
	path: ROUTES.news,
});

const fallback = (
	<PageFrame
		title="お知らせカテゴリー：の記事一覧"
		outerClassName="bg-black"
		backgroundImageSrc="/images/decoration/christmas-3.jpg"
	>
		<div className="mx-auto max-w-[760px] py-12 text-center text-[#6f5646]">
			読み込み中…
		</div>
	</PageFrame>
);

export default function NewsIndexPage() {
	return (
		<Suspense fallback={fallback}>
			<NewsIndexClient />
		</Suspense>
	);
}
