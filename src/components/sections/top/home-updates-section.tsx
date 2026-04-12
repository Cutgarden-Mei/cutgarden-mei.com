import Link from "next/link";

import { PostKeywordSearchField } from "@/components/post-keyword-search-field";
import { DecoratedTextRow } from "@/components/sections/decorated-text-row";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";
import { getHomeUpdatePosts } from "@/lib/contentful";
import { getNewsDetailRoute } from "@/lib/routes";

type HomeUpdatesListItemProps = {
	id: string;
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
		<div className="flex flex-col items-center justify-center gap-1 w-full md:w-auto">
			<DecoratedTextRow
				text={title}
				iconSrc="/images/decoration/clip-blue.png"
				iconAlt=""
				textClassName="font-bold font-serif"
			/>
			<ul className="flex flex-col gap-1 w-full md:w-[400px] rounded-[4px] border-4 border-contact-panel p-[4px] pt-[8px]">
				{items.length > 0 ? (
					items.map((item) => (
						<HomeUpdatesListItem
							key={item.id}
							id={item.id}
							href={item.href}
							title={item.title}
						/>
					))
				) : (
					<li className="text-sm text-[#7e6b61]">まだ記事がありません。</li>
				)}
			</ul>
		</div>
	);
}

export async function HomeUpdatesSection() {
	const { news, blog } = await getHomeUpdatePosts();
	const noticeItems = news.map((post) => ({
		id: post.id,
		href: getNewsDetailRoute(post.slug),
		title: post.title,
	}));
	const articleItems = blog.map((post) => ({
		id: post.id,
		href: getNewsDetailRoute(post.slug),
		title: post.title,
	}));

	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col items-center justify-center gap-4">
				<PostKeywordSearchField className="flex w-full max-w-[300px] justify-center" />
				<div className="flex gap-4 items-start md:flex-row flex-col w-full md:justify-center px-[37.5px]">
					<HomeUpdatesColumn title="最新のおしらせ" items={noticeItems} />
					<HomeUpdatesColumn title="最新の記事" items={articleItems} />
				</div>
			</div>
		</TopSectionContainer>
	);
}
