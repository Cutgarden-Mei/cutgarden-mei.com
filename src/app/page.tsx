import type { ReactNode } from "react";

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
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata = buildMetadata({
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	path: "/",
});

function TopSectionAnchor({
	id,
	children,
}: {
	id: string;
	children: ReactNode;
}) {
	return (
		<div id={id} className="scroll-mt-40">
			{children}
		</div>
	);
}

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
			<TopSectionAnchor id="menu">
				<HomeMenuSection />
			</TopSectionAnchor>
			<SectionDivider />
			<TopSectionAnchor id="keratin-perm">
				<HomeKeratinPermSection />
			</TopSectionAnchor>
			<SectionDivider />
			<TopSectionAnchor id="clinic-straightening">
				<HomeClinicStraighteningSection />
			</TopSectionAnchor>
			<SectionDivider />
			<TopSectionAnchor id="reset-cut">
				<HomeResetCutSection />
			</TopSectionAnchor>
			<SectionDivider />
			<TopSectionAnchor id="ion-treatment">
				<HomeIonTreatmentSection />
			</TopSectionAnchor>
		</>
	);
}
