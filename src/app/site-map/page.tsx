import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { getNewsDetailRoute, ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("Sitemap"),
	description: "サイトマップページです。",
	path: ROUTES.siteMap,
});

type SitemapLinkItem = {
	href: string;
	label: string;
	children?: SitemapLinkItem[];
};

type SitemapRowProps = {
	item: SitemapLinkItem;
};

function SitemapRow({ item }: SitemapRowProps) {
	if (item.children?.length) {
		return (
			<li className="border-b border-dotted border-[#d9cfc6] pb-4">
				<details className="group">
					<summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13px] text-[#4f392d] transition hover:opacity-80">
						<span className="inline-flex items-center gap-3">
							<Image
								src="/images/decoration/ico_lv1.png"
								alt=""
								width={9}
								height={9}
								className="h-[9px] w-[9px]"
							/>
							<span>{item.label}</span>
						</span>
						<span className="text-top-brown group-open:hidden">
							<ChevronDown className="h-4 w-4" aria-hidden="true" />
						</span>
						<span className="hidden text-top-brown group-open:inline">
							<ChevronUp className="h-4 w-4" aria-hidden="true" />
						</span>
					</summary>

					<ul className="mt-3 ml-6 space-y-2 text-[12px] text-[#6f5646]">
						{item.children.map((child) => (
							<li key={child.href}>
								<Link
									href={child.href}
									className="inline-flex items-center gap-2 transition hover:opacity-80"
								>
									<span>{child.label}</span>
								</Link>
							</li>
						))}
					</ul>
				</details>
			</li>
		);
	}

	return (
		<li className="border-b border-dotted border-[#d9cfc6] pb-4">
			<Link
				href={item.href}
				className="inline-flex items-center gap-3 text-[13px] text-[#4f392d] transition hover:opacity-80"
			>
				<Image
					src="/images/decoration/ico_lv1.png"
					alt=""
					width={9}
					height={9}
					className="h-[9px] w-[9px]"
				/>
				<span>{item.label}</span>
			</Link>
		</li>
	);
}

export default async function SitemapPage() {
	const posts = await getPosts();

	const pageLinks: SitemapLinkItem[] = [
		{ href: ROUTES.home, label: "カットガーデンMei" },
		{ href: ROUTES.contact, label: "お問い合わせ" },
		{ href: ROUTES.voice, label: "お客様の声" },
		{ href: ROUTES.access, label: "アクセス" },
		{ href: ROUTES.topIonTreatment, label: "イオントリートメント" },
		{ href: ROUTES.topClinicStraightening, label: "クリニック縮毛矯正" },
		{ href: ROUTES.topKeratinPerm, label: "ケラチンパーマ" },
		{ href: ROUTES.siteMap, label: "サイトマップ" },
		{ href: ROUTES.home, label: "シャンプーのお話" },
		{ href: ROUTES.staff, label: "スタッフ紹介" },
		{ href: ROUTES.menu, label: "メニュー・料金" },
		{ href: ROUTES.topResetCut, label: "リセットカット" },
		{ href: ROUTES.home, label: "旧指定成分について" },
		{ href: ROUTES.hairBasics, label: "髪の基礎知識" },
		{
			href: ROUTES.news,
			label: "お知らせ",
			children: posts
				.filter((post) => post.type === "news")
				.slice(0, 5)
				.map((post) => ({
					href: getNewsDetailRoute(post.slug),
					label: post.title,
				})),
		},
		{
			href: ROUTES.news,
			label: "ブログ",
			children: posts
				.filter((post) => post.type === "blog")
				.slice(0, 5)
				.map((post) => ({
					href: getNewsDetailRoute(post.slug),
					label: post.title,
				})),
		},
	];

	return (
		<PageFrame
			title="サイトマップ"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px]">
				<ul className="space-y-4">
					{pageLinks.map((item) => (
						<SitemapRow key={item.label} item={item} />
					))}
				</ul>
			</div>
		</PageFrame>
	);
}
