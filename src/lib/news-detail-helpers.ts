import { ROUTES } from "@/lib/routes";
import type { HomeUpdatePostType, Post } from "@/lib/types";

export const POST_AUTHOR_LABEL = "管理者";

export const SIDEBAR_CATEGORY_ITEMS: {
	href: string;
	label: string;
	postType: HomeUpdatePostType;
}[] = [
	{ href: ROUTES.news, label: "お知らせ", postType: "news" },
	{ href: ROUTES.blog, label: "ブログ", postType: "blog" },
];

export function getTypeLabel(type: HomeUpdatePostType) {
	return type === "blog" ? "ブログ" : "お知らせ";
}

export function getCategoryTagLabel(post: Post) {
	if (post.category?.trim()) return post.category;
	return post.type === "blog" ? "ブログ" : "お知らせ";
}

/** `YYYY-MM` → `YYYY年MM月`（暦日文字列から直接、サーバTZに依存しない） */
export function formatYearMonthJapanese(yearMonth: string) {
	const m = /^(\d{4})-(\d{2})$/.exec(yearMonth.trim());
	if (!m) return yearMonth;
	return `${m[1]}年${m[2]}月`;
}

export function getArchiveItems(posts: Post[]) {
	const archiveMap = new Map<string, number>();
	for (const p of posts) {
		const key = p.publishedAt.slice(0, 7);
		archiveMap.set(key, (archiveMap.get(key) ?? 0) + 1);
	}
	return [...archiveMap.entries()]
		.map(([key, count]) => ({
			key,
			label: formatYearMonthJapanese(key),
			count,
		}))
		.sort((a, b) => b.key.localeCompare(a.key));
}

export function displayTitle(title: string) {
	return title.startsWith("◆") ? title : `◆${title}`;
}
