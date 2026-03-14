import Link from "next/link";

import { getNewsPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "News | CUT GARDEN MEI", description: "お知らせ一覧ページです。", path: "/news" });
export const revalidate = 60;

export default async function NewsPage() {
  const posts = await getNewsPosts();

  return (
    <>
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid w-full max-w-[1120px] gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]">
              <p className="inline-flex gap-3 text-sm text-[#7e6b61]"><span>{post.category}</span><span>{post.publishedAt}</span></p>
              <h2 className="mt-3 text-2xl font-semibold text-[#26160f]">{post.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#7e6b61]">{post.excerpt}</p>
              <Link className="mt-4 inline-flex text-sm font-medium text-[#73442b] transition hover:opacity-80" href={`/news/${post.slug}`}>記事を読む</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
