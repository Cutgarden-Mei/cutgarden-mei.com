import Image from "next/image";

import { HeroAnimatedCatchphrase } from "@/components/sections/top/hero-animated-catchphrase";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";

export function HomeHero() {
	return (
		<TopSectionContainer>
			<div className="relative">
				<Image
					src="/images/top/hero.jpg"
					alt="hero"
					width={960}
					height={540}
					className="h-full w-full object-cover"
				/>
				<HeroAnimatedCatchphrase />
			</div>
		</TopSectionContainer>
	);
}
