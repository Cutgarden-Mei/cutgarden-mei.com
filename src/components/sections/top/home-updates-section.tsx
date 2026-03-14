import Image from "next/image";
import Link from "next/link";
import { DecoratedTextRow } from "@/components/sections/decorated-text-row";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";

const NOTICE_ITEMS = [
	{ href: "/news/1", title: "◆カットガーデンＭｅｉ・２月の定休日のお知らせ" },
	{
		href: "/news/1",
		title: "◆カットガーデンMei・年末年始と1月の定休日のお知らせ",
	},
	{
		href: "/news/1",
		title: "◆カットガーデンＭｅｉ・12月の定休日と年末年始のお知らせ",
	},
	{ href: "/news/1", title: "◆カットガーデンＭｅｉ・11月の定休日のお知らせ" },
	{ href: "/news/1", title: "◆カットガーデンMei・10月の定休日のお知らせ" },
];

const ARTICLE_ITEMS = [
	{ href: "/news/1", title: "新型コロナウィルス対策" },
	{ href: "/news/1", title: "クリスマスですね～" },
	{ href: "/news/1", title: "看板がぁ～～" },
	{ href: "/news/1", title: "ブローのお話" },
	{ href: "/news/1", title: "難しいですね～(^_^;)" },
];

type HomeUpdatesListItemProps = {
	href: string;
	title: string;
};

type HomeUpdatesColumnProps = {
	title: string;
	items: HomeUpdatesListItemProps[];
};

function HomeUpdatesListItem({ href, title }: HomeUpdatesListItemProps) {
	return (
		<li className="text-top-pink text-sm underline">
			<Link href={href}>{title}</Link>
		</li>
	);
}

function HomeUpdatesColumn({ title, items }: HomeUpdatesColumnProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<DecoratedTextRow
				text={title}
				iconSrc="/images/decoration/clip-blue.png"
				iconAlt=""
				textClassName="font-bold font-serif"
			/>
			<ul className="flex flex-col gap-1 w-[400px] rounded-[4px] border-4 border-contact-panel p-[4px] pt-[8px]">
				{items.map((item) => (
					<HomeUpdatesListItem
						key={item.title}
						href={item.href}
						title={item.title}
					/>
				))}
			</ul>
		</div>
	);
}

export function HomeUpdatesSection() {
	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col items-center justify-center gap-4">
				<div className="relative h-[32px] max-w-[300px] w-full">
					<input
						type="text"
						className="w-full h-full rounded-full border-3 border-contact-panel pr-8"
					/>
					<button
						type="button"
						className="absolute top-1/2 right-1 mr-1 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer"
						aria-label="検索"
					>
						<Image
							src="/images/decoration/search.png"
							alt=""
							width={18}
							height={18}
							className="h-5 w-5"
						/>
					</button>
				</div>
				<div className="flex gap-4 items-start">
					<HomeUpdatesColumn title="最新のおしらせ" items={NOTICE_ITEMS} />
					<HomeUpdatesColumn title="最新の記事" items={ARTICLE_ITEMS} />
				</div>
			</div>
		</TopSectionContainer>
	);
}
