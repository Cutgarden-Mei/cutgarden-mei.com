import Image from "next/image";
import Link from "next/link";

import { getPosts } from "@/lib/contentful";
import { getNewsDetailRoute, ROUTES } from "@/lib/routes";

type PageLinkItem = {
	href: string;
	label: string;
};

type FooterSectionTitleProps = {
	children: React.ReactNode;
};

const PAGE_LINK_ITEMS: PageLinkItem[] = [
	{ href: "/", label: "お客様の声" },
	{ href: ROUTES.ionTreatment, label: "イオントリートメント" },
	{ href: "/", label: "クリニック縮毛矯正" },
	{ href: ROUTES.keratinPerm, label: "ケラチンパーマ" },
	{ href: ROUTES.shampooTalk, label: "シャンプーのお話" },
	{ href: ROUTES.staff, label: "スタッフ紹介" },
	{ href: "/", label: "メニュー・料金" },
	{ href: ROUTES.resetCut, label: "リセットカット" },
	{ href: ROUTES.oldDesignatedIngredients, label: "旧指定成分について" },
	{ href: "/", label: "髪の基礎知識" },
];

const FOOTER_NAV_ITEMS: PageLinkItem[] = [
	{ href: ROUTES.access, label: "アクセス" },
	{ href: ROUTES.contact, label: "お問い合わせ" },
	{ href: ROUTES.siteMap, label: "サイトマップ" },
	{ href: ROUTES.home, label: "トップページ" },
];

function FooterSectionTitle({ children }: FooterSectionTitleProps) {
	return <p className="border-b border-[#904100] pb-2">{children}</p>;
}

export async function Footer() {
	const footerArticles = (await getPosts())
		.filter((post) => post.type === "news")
		.slice(0, 5)
		.map((post) => ({
			href: getNewsDetailRoute(post.slug),
			label: `${post.title}`,
		}));

	return (
		<footer className="bg-[#321600] text-white">
			<div className="max-w-[1056px] mx-auto flex items-start justify-center pt-6 pb-12 gap-16">
				<div className="w-1/3 flex flex-col gap-4">
					<FooterSectionTitle>ページ</FooterSectionTitle>
					<ul className="text-sm flex flex-col gap-4">
						{PAGE_LINK_ITEMS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="flex w-fit items-center gap-2 hover:underline group"
							>
								<div>
									<Image
										src="/images/footer/play-w.png"
										alt="play-w"
										width={6}
										height={6}
									/>
								</div>
								<li className="group-hover:underline">{item.label}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="w-1/3 flex flex-col gap-4">
					<FooterSectionTitle>最新記事</FooterSectionTitle>
					<ul className="text-sm flex flex-col gap-2">
						{footerArticles.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="flex w-fit items-center gap-2 hover:underline group"
							>
								<div>
									<Image
										src="/images/footer/play-w.png"
										alt="play-w"
										width={6}
										height={6}
									/>
								</div>
								<li className="group-hover:underline">{item.label}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="w-1/3 flex flex-col gap-4">
					<FooterSectionTitle>リンク</FooterSectionTitle>
					<div className="flex flex-col gap-2">
						<Link href={ROUTES.home} className="hover:underline">
							<Image
								src="/images/footer/facebook.png"
								alt="facebook"
								width={100}
								height={100}
								className="w-full h-10"
							/>
						</Link>
						<Link href={ROUTES.home} className="hover:underline">
							<Image
								src="/images/footer/line.png"
								alt="line"
								width={100}
								height={100}
								className="w-full h-10"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full justify-center py-2 bg-[#1E0D00]">
				<ul className="flex items-center gap-2 w-full justify-between py-2 max-w-[1056px] mx-auto text-sm">
					{FOOTER_NAV_ITEMS.map((item) => (
						<Link key={item.label} href={item.href} className="group">
							<li className="group-hover:underline">{item.label}</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="text-white text-xs bg-black flex items-center justify-center py-2">
				© 2015 CUT GARDEN Mei.
			</div>
		</footer>
	);
}
