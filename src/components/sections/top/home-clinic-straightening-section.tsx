import { DecoratedSectionTitle } from "@/components/sections/decorated-section-title";
import { DecoratedTextRow } from "@/components/sections/decorated-text-row";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";
import { TopSectionLink } from "@/components/sections/top/top-section-link";

export function HomeClinicStraighteningSection() {
	return (
		<TopSectionContainer className="py-14 md:px-0 px-[37.5px]">
			<div className="flex flex-col items-center justify-center gap-10">
				<DecoratedSectionTitle
					title="クリニック縮毛矯正"
					iconSrc="/images/decoration/brush-red.png"
					iconAlt="クリニック縮毛矯正"
				/>
				<p className="text-lg font-bold">※１日２名様限定</p>
				<p className="text-lg">
					ノンアルカリ薬剤＆アイロン未使用で髪に優しい縮毛矯正！
					<strong>髪サラサラ・ストレート</strong>
				</p>
				<p>
					★<span className="text-top-pink">こんな方におすすめします！</span>
				</p>
				<div className="flex flex-col gap-2">
					<DecoratedTextRow
						text="「髪の痛みが気になる方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
					<DecoratedTextRow
						text="「アイロンを使いたくない方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
					<DecoratedTextRow
						text="「不自然にピンピンのストレートが嫌な方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
					<DecoratedTextRow
						text="「他店で縮毛矯正を断られた方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
				</div>
				<TopSectionLink href="/">詳しくはこちらから</TopSectionLink>
			</div>
		</TopSectionContainer>
	);
}
