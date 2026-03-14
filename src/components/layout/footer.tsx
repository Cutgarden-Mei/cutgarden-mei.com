import Image from "next/image";
import Link from "next/link";

type PageLinkItem = {
	href: string;
	label: string;
};

type FooterSectionTitleProps = {
	children: React.ReactNode;
};

const DUMMY_FOOTER_ARTICLES: PageLinkItem[] = [
	{ href: "/", label: "◆カットガーデンＭｅｉ・２月の定休日のお知らせ" },
	{ href: "/", label: "◆カットガーデンMei・年末年始と1月の定休日のお知らせ" },
	{
		href: "/",
		label: "◆カットガーデンＭｅｉ・12月の定休日と年末年始のお知らせ",
	},
	{ href: "/", label: "◆カットガーデンＭｅｉ・11月の定休日のお知らせ" },
	{ href: "/", label: "◆カットガーデンMei・10月の定休日のお知らせ" },
];

const PAGE_LINK_ITEMS: PageLinkItem[] = [
	{ href: "/", label: "お客様の声" },
	{ href: "/", label: "イオントリートメント" },
	{ href: "/", label: "クリニック縮毛矯正" },
	{ href: "/", label: "ケラチンパーマ" },
	{ href: "/", label: "シャンプーのお話" },
	{ href: "/", label: "スタッフ紹介" },
	{ href: "/", label: "メニュー・料金" },
	{ href: "/", label: "リセットカット" },
	{ href: "/", label: "旧指定成分について" },
	{ href: "/", label: "髪の基礎知識" },
];

const FOOTER_NAV_ITEMS: PageLinkItem[] = [
	{ href: "/", label: "アクセス" },
	{ href: "/", label: "お問い合わせ" },
	{ href: "/", label: "サイトマップ" },
	{ href: "/", label: "トップページ" },
];

function FooterSectionTitle({ children }: FooterSectionTitleProps) {
	return <p className="border-b border-[#904100] pb-2">{children}</p>;
}

export async function Footer() {
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
						{DUMMY_FOOTER_ARTICLES.map((item) => (
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
						<Link href="/" className="hover:underline">
							<Image
								src="/images/footer/facebook.png"
								alt="facebook"
								width={100}
								height={100}
								className="w-full h-10"
							/>
						</Link>
						<Link href="/" className="hover:underline">
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
