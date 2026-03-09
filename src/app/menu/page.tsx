import { PageHero } from "@/components/sections/page-hero";
import { getMenuCategories } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Menu | CUT GARDEN MEI", description: "メニューと料金をカテゴリごとに整理したページです。", path: "/menu" });
export const revalidate = 60;

export default async function MenuPage() {
  const categories = await getMenuCategories();

  return (
    <>
      <PageHero title="MENU" subtitle="メニュー・料金" />
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto w-full max-w-[1120px]">
          <p className="max-w-3xl text-base leading-8 text-[#7e6b61]">WordPressの自由入力に依存しすぎず、カテゴリと項目を分けてContentfulで管理しやすい構成にしています。</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <section key={category.slug} className="rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]">
                <h2 className="text-2xl font-semibold text-[#26160f]">{category.name}</h2>
                <p className="mt-3 text-base leading-8 text-[#7e6b61]">{category.description}</p>
                <div className="mt-5 grid gap-5">
                  {category.items.map((item) => (
                    <article key={item.name} className="border-t border-[#73442b]/12 pt-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-lg font-semibold text-[#26160f]">{item.name}</h3>
                        <strong className="text-[#73442b]">{item.price}</strong>
                      </div>
                      <p className="mt-2 text-sm text-[#7e6b61]">{item.duration}</p>
                      <p className="mt-2 text-base leading-8 text-[#7e6b61]">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
