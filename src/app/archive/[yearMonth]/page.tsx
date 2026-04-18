import { Suspense } from "react";
import { notFound } from "next/navigation";

import { ArchiveMonthClient } from "@/components/news/archive-month-client";
import { PageFrame } from "@/components/page-frame";
import {
	formatYearMonthTitleJp,
	isValidYearMonthKey,
} from "@/lib/archive-year-month";
import { getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { getArchiveMonthPath } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

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

type ArchiveMonthPageProps = {
	params: Promise<{ yearMonth: string }>;
};

export default async function ArchiveMonthPage({ params }: ArchiveMonthPageProps) {
	const { yearMonth } = await params;
	if (!isValidYearMonthKey(yearMonth)) notFound();

	const title = `${formatYearMonthTitleJp(yearMonth)}の記事一覧`;
	const fallback = (
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

	return (
		<Suspense fallback={fallback}>
			<ArchiveMonthClient yearMonth={yearMonth} />
		</Suspense>
	);
}
