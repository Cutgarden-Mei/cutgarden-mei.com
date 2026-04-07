import Image from "next/image";
import Link from "next/link";

import { getStaffMembers } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({ title: buildPageTitle("Staff"), description: "スタッフ一覧ページです。", path: "/staff" });
export const revalidate = 60;

export default async function StaffPage() {
  const staffMembers = await getStaffMembers();

  return (
    <>
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid w-full max-w-[1120px] gap-4 md:grid-cols-2">
          {staffMembers.map((member) => (
            <article key={member.slug} className="grid gap-5 rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]">
              <div className="relative min-h-[260px] overflow-hidden rounded-[20px]">
                <Image alt={member.name} fill sizes="(max-width: 960px) 100vw, 33vw" src={member.image} className="object-cover" />
              </div>
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.18em] text-[#73442b]">{member.role}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#26160f]">{member.name}</h2>
                <p className="mt-3 text-base leading-8 text-[#7e6b61]">{member.bio[0]}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-8 text-[#7e6b61]">
                  {member.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
                </ul>
                <Link className="mt-4 inline-flex text-sm font-medium text-[#73442b] transition hover:opacity-80" href={`/staff/${member.slug}`}>詳細を見る</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
