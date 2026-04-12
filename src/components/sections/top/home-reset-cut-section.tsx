import { DecoratedSectionTitle } from "@/components/sections/decorated-section-title";
import { DecoratedTextRow } from "@/components/sections/decorated-text-row";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";
import { TopSectionLink } from "@/components/sections/top/top-section-link";
import { ROUTES } from "@/lib/routes";

export function HomeResetCutSection() {
	return (
		<TopSectionContainer className="py-14 md:px-0 px-[37.5px]">
			<div className="flex flex-col items-center justify-center gap-10">
				<DecoratedSectionTitle
					title="リセットカット"
					iconSrc="/images/decoration/brush-red.png"
					iconAlt="リセットカット"
				/>
				<p className="text-lg font-bold">※当店オリジナル（新技術）</p>
				<p className="text-lg">
					薬剤を使わず、髪の毛を折ったり曲げたりしないで、髪のお悩みを解消いたします。
				</p>
				<div className="flex flex-col items-end gap-10">
					<div className="flex flex-col gap-2">
						<p>★こんな方におすすめします！</p>
						<DecoratedTextRow
							text="「襟足が浮いちゃってイヤ！」"
							iconSrc="/images/decoration/clip-blue.png"
							iconAlt="clip"
						/>
						<DecoratedTextRow
							text="「つむじが分かれてしまって、薄く見えるのがイヤ！」"
							iconSrc="/images/decoration/clip-blue.png"
							iconAlt="clip"
						/>
						<DecoratedTextRow
							text="「前髪の分け目を変えたい」"
							iconSrc="/images/decoration/clip-blue.png"
							iconAlt="clip"
						/>
						<DecoratedTextRow
							text="「長さは変えたくないけど、毛量を少なくしたい」"
							iconSrc="/images/decoration/clip-blue.png"
							iconAlt="clip"
						/>
					</div>
					<p>など・・・</p>
				</div>
				<TopSectionLink href={ROUTES.resetCut}>詳しくはこちらから</TopSectionLink>
			</div>
		</TopSectionContainer>
	);
}
