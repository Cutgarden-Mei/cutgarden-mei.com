import type { Post } from "@/lib/types";

export async function fetchPosts(): Promise<Post[]> {
	const res = await fetch("/api/posts");
	if (!res.ok) {
		throw new Error(`記事の取得に失敗しました (${res.status})`);
	}
	return res.json() as Promise<Post[]>;
}
