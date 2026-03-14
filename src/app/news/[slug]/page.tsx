import { notFound } from "next/navigation";

import { getNewsPostBySlug, getNewsPosts } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getNewsPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    return buildMetadata({ title: "News | CUT GARDEN MEI", description: "お知らせ詳細ページです。", path: `/news/${slug}` });
  }

  return buildMetadata({ title: `${post.title} | CUT GARDEN MEI`, description: post.excerpt, path: `/news/${slug}` });
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto w-full max-w-[800px]">
          <p className="inline-flex gap-3 text-sm text-[#7e6b61]"><span>{post.category}</span><span>{post.publishedAt}</span></p>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#7e6b61]">
            {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
    </>
  );
}
