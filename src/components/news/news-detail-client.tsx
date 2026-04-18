"use client";

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostKeywordSearchField } from "@/components/post-keyword-search-field";
import { usePostsQuery } from "@/hooks/use-posts-query";
import { formatPostDetailShortYmd } from "@/lib/format-post-list-date";
import {
	displayTitle,
	getArchiveItems,
	getCategoryTagLabel,
	getTypeLabel,
	POST_AUTHOR_LABEL,
	SIDEBAR_CATEGORY_ITEMS,
} from "@/lib/news-detail-helpers";
import { getNewsDetailRoute, getArchiveMonthPath, ROUTES } from "@/lib/routes";

type NewsDetailClientProps = {
	slug: string;
};

export function NewsDetailClient({ slug }: NewsDetailClientProps) {
	const { data: posts, isPending, isError, error } = usePostsQuery();
	const post = posts?.find((item) => item.slug === slug) ?? null;

	if (isPending) {
		return (
			<section className="bg-[#f5f0eb] px-4 py-10 md:px-6 md:py-14">
				<div className="mx-auto max-w-[1040px] py-16 text-center text-[#6f5646]">
					読み込み中…
				</div>
			</section>
		);
	}

	if (isError) {
		return (
			<section className="bg-[#f5f0eb] px-4 py-10 md:px-6 md:py-14">
				<div className="mx-auto max-w-[1040px] py-16 text-center text-red-800">
					{error instanceof Error ? error.message : "記事を読み込めませんでした。"}
				</div>
			</section>
		);
	}

	if (!post) {
		notFound();
	}

	const sameTypePosts = posts!.filter((p) => p.type === post.type);
	const currentIndex = sameTypePosts.findIndex(
		(item) => item.slug === post.slug,
	);
	const newerPost = currentIndex > 0 ? sameTypePosts[currentIndex - 1] : null;
	const previousPost =
		currentIndex >= 0 && currentIndex < sameTypePosts.length - 1
			? sameTypePosts[currentIndex + 1]
			: null;

	const recentPosts = posts!.filter((p) => p.type === "news").slice(0, 5);

	const archiveItems = getArchiveItems(posts!);
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
					className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm"
					aria-label="パンくず"
				>
					<Link
						href={ROUTES.home}
						className="inline-flex items-center gap-1.5 text-top-pink transition hover:opacity-80"
					>
						<Image
							src="/images/news/home.png"
							alt=""
							width={14}
							height={14}
							className="h-[14px] w-[14px] shrink-0"
						/>
						<span>ホーム</span>
					</Link>
					<span className="text-[#b5a89c]" aria-hidden>
						&gt;
					</span>
					<Link
						href={listIndexPath}
						className="text-top-pink transition hover:opacity-80"
					>
						{getTypeLabel(post.type)}
					</Link>
					<span className="text-[#b5a89c]" aria-hidden>
						&gt;
					</span>
					<span className="line-clamp-2 text-[#3d2f28]">{post.title}</span>
				</nav>
				<div className="flex w-full flex-col gap-8 lg:flex-row">
					<aside className="order-2 w-full shrink-0 space-y-4 lg:order-1 lg:w-[260px]">
						<div className="overflow-hidden border-t-4 border-[#7a3a12] bg-[#fffdfa] shadow-sm">
							<div className="bg-[#f2f2f2] px-3 py-2 text-sm font-bold text-black">
								検索
							</div>
							<div className="p-3">
								<PostKeywordSearchField />
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
												className="inline-flex items-center gap-1.5 leading-snug text-top-pink transition hover:underline"
											>
												<ChevronRight
													className="h-4 w-4 shrink-0 text-top-pink"
													aria-hidden
												/>
												<span>{item.title}</span>
											</Link>
										</li>
									))
								) : (
									<li className="py-2 text-[#7e6b61]">記事がありません。</li>
								)}
							</ul>
						</div>

						<details className="group overflow-hidden border-t-4 border-[#7a3a12] bg-[#fffdfa] shadow-sm">
							<summary className="flex cursor-pointer list-none items-center justify-between gap-2 bg-[#f2f2f2] px-3 py-2 text-sm font-bold text-black [&::-webkit-details-marker]:hidden">
								<span>アーカイブ</span>
								<span className="text-top-pink group-open:hidden" aria-hidden>
									<ChevronDown className="h-4 w-4" />
								</span>
								<span
									className="hidden text-top-pink group-open:inline"
									aria-hidden
								>
									<ChevronUp className="h-4 w-4" />
								</span>
							</summary>
							<ul className="max-h-[420px] overflow-y-auto px-3 py-2 text-sm text-top-pink">
								{archiveItems.map((item) => (
									<li
										key={item.key}
										className="flex items-center justify-between gap-2 border-b border-dotted border-[#ead8cf] py-2 last:border-b-0"
									>
										<Link
											href={getArchiveMonthPath(item.key)}
											className="inline-flex flex-1 items-center gap-1.5 text-left text-top-pink transition hover:opacity-80"
										>
											<ChevronRight
												className="h-4 w-4 shrink-0 text-top-pink"
												aria-hidden
											/>
											<span>{item.label}</span>
										</Link>
										<span className="shrink-0 tabular-nums text-top-pink">
											{item.count}
										</span>
									</li>
								))}
							</ul>
						</details>

						<div className="overflow-hidden border-t-4 border-[#7a3a12] bg-[#fffdfa] shadow-sm">
							<div className="bg-[#f2f2f2] px-3 py-2 text-sm font-bold text-black">
								カテゴリー
							</div>
							<ul className="px-3 py-2 text-sm">
								{SIDEBAR_CATEGORY_ITEMS.map((item) => (
									<li
										key={item.href}
										className="border-b border-dotted border-[#ead8cf] py-2 last:border-b-0"
									>
										<Link
											href={item.href}
											aria-current={
												post.type === item.postType ? "page" : undefined
											}
											className="inline-flex w-full items-center gap-1.5 text-left transition text-top-pink"
										>
											<ChevronRight
												className="h-4 w-4 shrink-0 text-top-pink"
												aria-hidden
											/>
											<span>{item.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</aside>

					<div className="order-1 min-w-0 flex-1 lg:order-2">
						<article className="overflow-hidden bg-white shadow-[0_10px_28px_rgba(61,27,0,0.08)] border-t-4 border-[#7a3a12]">
							<div className="flex flex-wrap items-center justify-between gap-3 bg-[#f2f2f2] px-4 py-3 md:px-6">
								<p className="inline-flex items-center gap-2 text-sm text-[#4a3d36]">
									<Image
										src="/images/decoration/calendar.png"
										alt=""
										width={14}
										height={14}
										className="h-[14px] w-[14px]"
									/>
									<time dateTime={post.publishedAt}>
										{formatPostDetailShortYmd(post.publishedAt)}
									</time>
								</p>
								<p className="inline-flex items-center gap-2 text-sm text-[#4a3d36]">
									<Image
										src="/images/decoration/author.png"
										alt=""
										width={14}
										height={14}
										className="h-[14px] w-[14px]"
									/>
									<span>{POST_AUTHOR_LABEL}</span>
								</p>
							</div>

							<div className="px-4 py-5 md:px-8 md:py-6 border-b border-[#d5c5ba]">
								<h1 className="text-base leading-snug font-bold text-black md:leading-tight md:text-[20px] font-serif">
									{displayTitle(post.title)}
								</h1>
								<div className="mt-4 inline-flex items-center gap-2 rounded px-3 py-1.5 text-xs font-medium text-top-pink md:text-sm">
									<Image
										src="/images/decoration/file-category.png"
										alt=""
										width={14}
										height={14}
										className="h-[14px] w-[14px]"
									/>
									<span>{getCategoryTagLabel(post)}</span>
								</div>
							</div>

							<div className="space-y-5 px-4 py-6 text-[15px] leading-[1.9] text-[#3d332d] md:px-8 md:py-8 md:text-base md:leading-8">
								{paragraphs.map((paragraph, index) => (
									<p
										key={`${post.slug}-${index}`}
										className="whitespace-pre-line"
									>
										{paragraph}
									</p>
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
										<Image
											src="/images/decoration/circle-up.png"
											alt=""
											width={28}
											height={28}
											className="h-7 w-7 shrink-0 -rotate-90"
											aria-hidden
										/>
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
										<Image
											src="/images/decoration/circle-up.png"
											alt=""
											width={28}
											height={28}
											className="h-7 w-7 shrink-0 rotate-90"
											aria-hidden
										/>
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
