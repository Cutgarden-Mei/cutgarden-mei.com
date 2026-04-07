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
			<div id="top">
				<HomeHero />
			</div>
			<SectionDivider />
			<HomeUpdatesSection />
			<SectionDivider />
			<HomeConceptSection />
			<SectionDivider />
			<div id="menu" className="scroll-mt-40">
				<HomeMenuSection />
			</div>
			<SectionDivider />
			<div id="keratin-perm" className="scroll-mt-40">
				<HomeKeratinPermSection />
			</div>
			<SectionDivider />
			<div id="clinic-straightening" className="scroll-mt-40">
				<HomeClinicStraighteningSection />
			</div>
			<SectionDivider />
			<div id="reset-cut" className="scroll-mt-40">
				<HomeResetCutSection />
			</div>
			<SectionDivider />
			<div id="ion-treatment" className="scroll-mt-40">
				<HomeIonTreatmentSection />
			</div>
		</>
	);
}
