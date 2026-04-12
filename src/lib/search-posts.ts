import type { Post } from "@/lib/types";

/** 空白区切りの各語がすべて本文・タイトル等に含まれる投稿に絞り込む */
export function filterPostsByKeyword(posts: Post[], rawQuery: string): Post[] {
	const terms = rawQuery
		.trim()
		.toLowerCase()
		.split(/\s+/)
		.filter(Boolean);
	if (terms.length === 0) return [];

	return posts.filter((post) => {
		const haystack = [
			post.title,
			post.excerpt,
			post.category,
			...post.body,
			post.type === "blog" ? "ブログ" : "お知らせ",
		]
			.join("\n")
			.toLowerCase();
		return terms.every((t) => haystack.includes(t));
	});
}
