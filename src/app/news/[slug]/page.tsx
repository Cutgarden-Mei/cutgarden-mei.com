import { NewsDetailClient } from "@/components/news/news-detail-client";
import { getPostBySlug, getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return buildMetadata({
			title: buildPageTitle("Post"),
			description: "投稿詳細ページです。",
			path: `${ROUTES.news}/${slug}`,
		});
	}

	return buildMetadata({
		title: buildPageTitle(post.title),
		description: post.excerpt,
		path: `${ROUTES.news}/${slug}`,
	});
}

export default async function NewsDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	return <NewsDetailClient slug={slug} />;
}
