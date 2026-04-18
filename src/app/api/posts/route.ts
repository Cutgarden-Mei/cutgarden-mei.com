import { NextResponse } from "next/server";

import { getPosts } from "@/lib/contentful";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		const posts = await getPosts();
		return NextResponse.json(posts);
	} catch {
		return NextResponse.json(
			{ error: "記事の読み込みに失敗しました。" },
			{ status: 500 },
		);
	}
}
