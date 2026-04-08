import { Calendar, ChevronRight, FileText, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostBySlug, getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { getArchiveMonthPath, getNewsDetailRoute, ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";
import type { HomeUpdatePostType, Post } from "@/lib/types";

export const revalidate = 60;

const POST_AUTHOR_LABEL = "管理者";

function formatShortYmd(value: string) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	const yy = String(date.getFullYear()).slice(-2);
	return `${yy}/${date.getMonth() + 1}/${date.getDate()}`;
}

function getTypeLabel(type: HomeUpdatePostType) {
	return type === "blog" ? "ブログ" : "お知らせ";
}

function getCategoryTagLabel(post: Post) {
	if (post.category?.trim()) return post.category;
	return post.type === "blog" ? "ブログ" : "お知らせ";
}

function getArchiveLabel(value: string) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, "0")}月`;
}

function getArchiveItems(posts: Post[]) {
	const archiveMap = new Map<string, number>();
	for (const p of posts) {
		const key = p.publishedAt.slice(0, 7);
		archiveMap.set(key, (archiveMap.get(key) ?? 0) + 1);
	}
	return [...archiveMap.entries()]
		.map(([key, count]) => ({
			key,
			label: getArchiveLabel(`${key}-01`),
			count,
		}))
		.sort((a, b) => b.key.localeCompare(a.key));
}

function displayTitle(title: string) {
	return title.startsWith("◆") ? title : `◆${title}`;
}

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
			path: `/news/${slug}`,
		});
	}

	return buildMetadata({
		title: buildPageTitle(post.title),
		description: post.excerpt,
		path: `/news/${slug}`,
	});
}

export default async function NewsDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const posts = await getPosts();
	const post = posts.find((item) => item.slug === slug) ?? null;

	if (!post) notFound();

	const sameTypePosts = posts.filter((p) => p.type === post.type);
	const currentIndex = sameTypePosts.findIndex(
		(item) => item.slug === post.slug,
	);
	const newerPost = currentIndex > 0 ? sameTypePosts[currentIndex - 1] : null;
	const previousPost =
		currentIndex >= 0 && currentIndex < sameTypePosts.length - 1
			? sameTypePosts[currentIndex + 1]
			: null;

	// 閲覧中の記事を除外すると、お知らせが1件だけのとき0件になり「記事がありません」になるため、最新5件はそのまま表示する
	const recentPosts = posts.filter((p) => p.type === "news").slice(0, 5);

	const archiveItems = getArchiveItems(posts);
	const hasSeparateBody = post.body.length > 0;
	const paragraphs = hasSeparateBody
		? post.body
		: post.excerpt
			? [post.excerpt]
			: [];

	const listIndexPath = post.type === "blog" ? ROUTES.blog : ROUTES.news;

	return (
		<section className="bg-[#f5f0eb] px-4 py-10 md:px-6 md:py-14">
			<div className="mx-auto flex w-full max-w-[1040px] flex-col gap-4 items-start">
				<nav
					className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6f5646] md:text-sm"
					aria-label="パンくず"
				>
					<Link href={ROUTES.home} className="transition hover:text-top-pink">
						ホーム
					</Link>
					<span className="text-[#b5a89c]" aria-hidden>
						&gt;
					</span>
					<Link href={listIndexPath} className="transition hover:text-top-pink">
						{getTypeLabel(post.type)}
					</Link>
					<span className="text-[#b5a89c]" aria-hidden>
						&gt;
					</span>
					<span className="line-clamp-2 text-[#3d2f28]">{post.title}</span>
				</nav>
				<div className="flex flex-col gap-8 lg:flex-row">
					{/* サイドバー */}
					<aside className="w-full shrink-0 space-y-4 lg:w-[260px]">
						<div className="overflow-hidden border-t-4 border-[#7a3a12] bg-[#fffdfa] shadow-sm">
							<div className="bg-[#f2f2f2] px-3 py-2 text-sm font-bold text-black">
								検索
							</div>
							<div className="p-3">
								<div className="relative h-[36px]">
									<input
										type="text"
										placeholder="キーワード検索"
										className="h-full w-full rounded-sm border border-[#c4b5a8] bg-white px-3 pr-10 text-sm text-[#3d2f28] placeholder:text-[#a8988c]"
										readOnly
									/>
									<button
										type="button"
										className="absolute top-1/2 right-2 flex h-[20px] w-[20px] -translate-y-1/2 items-center justify-center text-[#6f5646]"
										aria-label="検索"
									>
										<Image
											src="/images/decoration/search.png"
											alt=""
											width={18}
											height={18}
											className="h-[18px] w-[18px]"
										/>
									</button>
								</div>
							</div>
						</div>

						<div className="overflow-hidden border-t-4 border-[#7a3a12] bg-[#fffdfa] shadow-sm">
							<div className="bg-[#f2f2f2] px-3 py-2 text-sm font-bold text-black">
								最新記事
							</div>
							<ul className="space-y-0 px-3 py-3 text-sm">
								{recentPosts.length > 0 ? (
									recentPosts.map((item) => (
										<li
											key={item.slug}
											className="border-b border-dotted border-[#e5d8cf] py-2.5 last:border-b-0"
										>
											<Link
												href={getNewsDetailRoute(item.slug)}
												aria-current={
													item.slug === post.slug ? "page" : undefined
												}
												className={`inline-flex gap-1.5 leading-snug text-top-pink transition hover:underline ${
													item.slug === post.slug ? "font-semibold opacity-100" : ""
												}`}
											>
												<span>{item.title}</span>
											</Link>
										</li>
									))
								) : (
									<li className="py-2 text-[#7e6b61]">記事がありません。</li>
								)}
							</ul>
						</div>

						<div className="overflow-hidden border-t-4 border-[#7a3a12] bg-[#fffdfa] shadow-sm">
							<div className="bg-[#f2f2f2] px-3 py-2 text-sm font-bold text-black">
								アーカイブ
							</div>
							<ul className="max-h-[420px] overflow-y-auto px-3 py-2 text-sm">
								{archiveItems.map((item) => (
									<li
										key={item.key}
										className="flex items-center justify-between gap-2 border-b border-dotted border-[#ead8cf] py-2 last:border-b-0"
									>
										<Link
											href={getArchiveMonthPath(item.key)}
											className="inline-flex flex-1 items-center gap-1.5 text-left text-[#5c4a40] transition hover:text-top-pink"
										>
											<ChevronRight
												className="h-4 w-4 shrink-0 text-top-pink"
												aria-hidden
											/>
											<span>{item.label}</span>
										</Link>
										<span className="shrink-0 tabular-nums text-[#7e6b61]">
											{item.count}
										</span>
									</li>
								))}
							</ul>
						</div>
					</aside>

					{/* メイン */}
					<div className="min-w-0 flex-1">
						<article className="overflow-hidden bg-white shadow-[0_10px_28px_rgba(61,27,0,0.08)] border-t-4 border-[#7a3a12]">
							<div className="flex flex-wrap items-center justify-between gap-3 bg-[#f2f2f2] px-4 py-3 md:px-6">
								<p className="inline-flex items-center gap-2 text-sm text-[#4a3d36]">
									<Calendar
										className="h-4 w-4 shrink-0 text-top-pink"
										aria-hidden
									/>
									<time dateTime={post.publishedAt}>
										{formatShortYmd(post.publishedAt)}
									</time>
								</p>
								<p className="inline-flex items-center gap-2 text-sm text-[#4a3d36]">
									<User
										className="h-4 w-4 shrink-0 text-top-pink"
										aria-hidden
									/>
									<span>{POST_AUTHOR_LABEL}</span>
								</p>
							</div>

							<div className="px-4 py-5 md:px-8 md:py-6">
								<h1 className="text-base leading-snug font-bold text-black md:leading-tight md:text-[20px] font-serif">
									{displayTitle(post.title)}
								</h1>
								<div className="mt-4 inline-flex items-center gap-2 rounded border border-top-pink px-3 py-1.5 text-xs font-medium text-top-pink md:text-sm">
									<FileText className="h-3.5 w-3.5 shrink-0" aria-hidden />
									<span>{getCategoryTagLabel(post)}</span>
								</div>
							</div>

							<div className="space-y-5 px-4 py-6 text-[15px] leading-[1.9] text-[#3d332d] md:px-8 md:py-8 md:text-base md:leading-8">
								{paragraphs.map((paragraph, index) => (
									<p key={`${post.slug}-${index}`}>{paragraph}</p>
								))}
							</div>

							<nav
								className="flex items-center justify-between gap-4 border-t border-[#d5c5ba] px-4 py-5 text-sm text-top-brown md:px-8"
								aria-label="前後の記事"
							>
								{newerPost ? (
									<Link
										href={getNewsDetailRoute(newerPost.slug)}
										className="inline-flex items-center gap-2 transition hover:opacity-70"
									>
										<span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-[11px]">
											‹
										</span>
										<span>NEW</span>
									</Link>
								) : (
									<span />
								)}

								{previousPost ? (
									<Link
										href={getNewsDetailRoute(previousPost.slug)}
										className="inline-flex items-center gap-2 transition hover:opacity-70"
									>
										<span>PREV</span>
										<span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-[11px]">
											›
										</span>
									</Link>
								) : (
									<span />
								)}
							</nav>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
