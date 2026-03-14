import { HomeClinicStraighteningSection } from "@/components/sections/top/home-clinic-straightening-section";
import { HomeConceptSection } from "@/components/sections/top/home-concept-section";
import { HomeHero } from "@/components/sections/top/home-hero";
import { HomeIonTreatmentSection } from "@/components/sections/top/home-ion-treatment-section";
import { HomeKeratinPermSection } from "@/components/sections/top/home-keratin-perm-section";
import { HomeMenuSection } from "@/components/sections/top/home-menu-section";
import { HomeResetCutSection } from "@/components/sections/top/home-reset-cut-section";
import { HomeUpdatesSection } from "@/components/sections/top/home-updates-section";
import { SectionDivider } from "@/components/sections/section-divider";
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
			<SectionDivider />
			<HomeUpdatesSection />
			<SectionDivider />
			<HomeConceptSection />
			<SectionDivider />
			<HomeMenuSection />
			<SectionDivider />
			<HomeKeratinPermSection />
			<SectionDivider />
			<HomeClinicStraighteningSection />
			<SectionDivider />
			<HomeResetCutSection />
			<SectionDivider />
			<HomeIonTreatmentSection />
		</>
	);
}
