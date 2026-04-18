import { Suspense } from "react";

import { SiteMapClient } from "@/components/site-map/site-map-client";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("サイトマップ"),
	description: "サイトマップページです。",
	path: ROUTES.siteMap,
});

const fallback = (
	<PageFrame
		title="サイトマップ"
		outerClassName="bg-black"
		backgroundImageSrc="/images/decoration/christmas-3.jpg"
	>
		<div className="mx-auto max-w-[760px] py-12 text-center text-[#6f5646]">
			読み込み中…
		</div>
	</PageFrame>
);

export default function SitemapPage() {
	return (
		<Suspense fallback={fallback}>
			<SiteMapClient />
		</Suspense>
	);
}
