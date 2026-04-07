import Link from "next/link";

import { getAccessInfo } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({ title: buildPageTitle("Access"), description: "アクセス情報ページです。", path: "/access" });
export const revalidate = 60;

export default async function AccessPage() {
  const access = await getAccessInfo();

  return (
    <>
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid w-full max-w-[1120px] gap-4 md:grid-cols-2">
          <article className="rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]">
            <h2 className="text-2xl font-semibold text-[#26160f]">{access.storeName}</h2>
            <div className="mt-4 space-y-2 text-base leading-8 text-[#7e6b61]">
              <p>〒{access.postalCode}</p>
              <p>{access.address}</p>
              <p>TEL: {access.phoneNumber}</p>
              <p>営業時間: {access.businessHours}</p>
              <p>定休日: {access.holiday}</p>
              <p>{access.parking}</p>
            </div>
          </article>
          <article className="rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]">
            <h2 className="text-2xl font-semibold text-[#26160f]">ご来店案内</h2>
            <div className="mt-4 space-y-3 text-base leading-8 text-[#7e6b61]">
              {access.directions.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <p className="mt-4">
              <a className="text-sm font-medium text-[#73442b] transition hover:opacity-80" href={access.mapEmbedUrl} rel="noreferrer" target="_blank">Google Maps で見る</a>
            </p>
            <Link className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#73442b] px-5 text-sm font-medium text-white transition hover:-translate-y-0.5" href="/contact">お問い合わせ</Link>
          </article>
        </div>
      </section>
    </>
  );
}
