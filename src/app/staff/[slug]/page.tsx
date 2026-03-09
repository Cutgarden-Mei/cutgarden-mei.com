import Image from "next/image";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/page-hero";
import { getStaffMemberBySlug, getStaffMembers } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 60;

export async function generateStaticParams() {
  const members = await getStaffMembers();
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = await getStaffMemberBySlug(slug);

  if (!member) {
    return buildMetadata({ title: "Staff | CUT GARDEN MEI", description: "スタッフ詳細ページです。", path: `/staff/${slug}` });
  }

  return buildMetadata({ title: `${member.name} | CUT GARDEN MEI`, description: member.bio[0], path: `/staff/${slug}` });
}

export default async function StaffDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = await getStaffMemberBySlug(slug);

  if (!member) notFound();

  return (
    <>
      <PageHero title={member.name} subtitle={member.role} />
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid w-full max-w-[1120px] gap-8 md:grid-cols-[360px_minmax(0,1fr)] md:items-start">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
            <Image alt={member.name} fill sizes="(max-width: 960px) 100vw, 40vw" src={member.image} className="object-cover" />
          </div>
          <article className="rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]">
            <h2 className="text-2xl font-semibold text-[#26160f]">プロフィール</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#7e6b61]">
              {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#26160f]">得意なスタイル</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-8 text-[#7e6b61]">
              {member.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
            </ul>
            {member.instagramUrl ? (
              <p className="mt-4">
                <a className="text-sm font-medium text-[#73442b] transition hover:opacity-80" href={member.instagramUrl} rel="noreferrer" target="_blank">Instagramを見る</a>
              </p>
            ) : null}
          </article>
        </div>
      </section>
    </>
  );
}
