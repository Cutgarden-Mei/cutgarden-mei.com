import { HomeHero } from "@/components/sections/home-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
	title: "CUT GARDEN MEI | Home",
	description:
		"現サイトの雰囲気を引き継ぎつつ、更新しやすいヘッドレス構成へ置き換えたトップページです。",
	path: "/",
});

export default async function HomePage() {
	return (
		<>
			<HomeHero />
		</>
	);
}
