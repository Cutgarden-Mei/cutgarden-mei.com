import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostBySlug, getPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import type { HomeUpdatePostType, Post } from "@/lib/types";

export const revalidate = 60;

function formatPublishedAt(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getPostTypeLabel(type: HomeUpdatePostType) {
  return type === "blog" ? "記事" : "おしらせ";
}

function getArchiveLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, "0")}月`;
}

function getArchiveItems(posts: Post[]) {
  const archiveMap = new Map<string, number>();

  for (const post of posts) {
    const key = post.publishedAt.slice(0, 7);
    archiveMap.set(key, (archiveMap.get(key) ?? 0) + 1);
  }

  return [...archiveMap.entries()].map(([key, count]) => ({
    key,
    label: getArchiveLabel(`${key}-01`),
    count,
  }));
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return buildMetadata({ title: "Post | CUT GARDEN MEI", description: "投稿詳細ページです。", path: `/news/${slug}` });
  }

  return buildMetadata({ title: `${post.title} | CUT GARDEN MEI`, description: post.excerpt, path: `/news/${slug}` });
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === slug) ?? null;

  if (!post) notFound();

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const previousPost = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const categoryCounts = [
    {
      key: "news",
      label: "おしらせ",
      count: posts.filter((item) => item.type === "news").length,
    },
    {
      key: "blog",
      label: "記事",
      count: posts.filter((item) => item.type === "blog").length,
    },
  ].filter((item) => item.count > 0);
  const archiveItems = getArchiveItems(posts);
  const body = post.body.length > 0 ? post.body : [post.excerpt];

  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-8 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-[250px]">
          <div className="rounded-[4px] border border-[#b89f90] bg-[#fffdfa] p-3">
            <div className="relative h-[32px]">
              <input
                type="text"
                placeholder="キーワード検索"
                className="h-full w-full rounded-full border border-[#b89f90] bg-white px-4 pr-10 text-sm text-[#6f5646]"
                readOnly
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center"
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

          <div className="mt-4 rounded-[4px] border border-[#b89f90] bg-[#fffdfa]">
            <h2 className="border-b border-[#b89f90] px-4 py-2 text-sm font-bold text-top-brown">カテゴリー</h2>
            <ul className="px-4 py-3 text-sm text-[#7e6b61]">
              {categoryCounts.map((item) => (
                <li key={item.key} className="flex items-center justify-between border-b border-dotted border-[#d2c1b7] py-2 last:border-b-0">
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-[4px] border border-[#b89f90] bg-[#fffdfa]">
            <h2 className="border-b border-[#b89f90] px-4 py-2 text-sm font-bold text-top-brown">アーカイブ</h2>
            <ul className="max-h-[700px] overflow-y-auto px-4 py-3 text-sm text-top-pink">
              {archiveItems.map((item) => (
                <li key={item.key} className="flex items-center justify-between border-b border-dotted border-[#ead8cf] py-1.5 last:border-b-0">
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0 flex-1 rounded-[4px] border border-[#c8b4a3] bg-[#fffdfa] px-5 py-6 shadow-[0_10px_24px_rgba(61,27,0,0.06)] md:px-8 md:py-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d5c5ba] pb-3">
            <p className="text-sm text-[#7e6b61]">{post.category || getPostTypeLabel(post.type)}</p>
            <p className="text-sm text-[#7e6b61]">{formatPublishedAt(post.publishedAt)}</p>
          </div>

          <h1 className="mt-5 text-[28px] leading-tight font-bold text-top-brown md:text-[32px]">
            {post.title}
          </h1>

          {post.excerpt ? (
            <p className="mt-4 border-l-4 border-[#d8c0af] bg-[#fff7f2] px-4 py-3 text-sm leading-7 text-[#7e6b61]">
              {post.excerpt}
            </p>
          ) : null}

          <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#6f5646] md:text-base">
            {body.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <nav className="mt-10 flex items-center justify-between gap-4 border-t border-[#d5c5ba] pt-6 text-sm text-top-brown">
            {newerPost ? (
              <Link
                href={`/news/${newerPost.slug}`}
                className="inline-flex items-center gap-2 transition hover:opacity-70"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[10px]">
                  ○
                </span>
                <span>NEW</span>
              </Link>
            ) : (
              <span />
            )}

            {previousPost ? (
              <Link
                href={`/news/${previousPost.slug}`}
                className="inline-flex items-center gap-2 transition hover:opacity-70"
              >
                <span>PREV</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[10px]">
                  ○
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
