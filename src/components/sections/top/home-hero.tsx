import Image from "next/image";
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
					className="w-full h-full object-cover"
				/>
				<p className="absolute bottom-0 top-0 m-auto left-0 text-black text-6xl font-bold font-serif z-10 leading-loose h-fit">
					あなたの髪の悩み
					<br />
					<span className="ml-10">おまかせください！</span>
				</p>
			</div>
		</TopSectionContainer>
	);
}
