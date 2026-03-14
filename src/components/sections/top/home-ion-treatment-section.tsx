import { DecoratedSectionTitle } from "@/components/sections/decorated-section-title";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";
import { TopSectionLink } from "@/components/sections/top/top-section-link";

export function HomeIonTreatmentSection() {
	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col items-center justify-center gap-10">
				<DecoratedSectionTitle
					title="イオントリートメント"
					iconSrc="/images/decoration/brush-red.png"
					iconAlt="イオントリートメント"
				/>
				<p className="text-lg font-bold">※パーマ＆カラーで効果を発揮！</p>
				<p className="text-lg">
					アルカリカラーの痛み・臭いを半減させることに成功しました。
				</p>
				<p className="max-w-[768px]">
					ミネラルイオンの力と、pHコントロールによって、髪の内部に水分をたっぷり補給・定着させることで、驚くほどの「ツヤ」がでます！
				</p>
				<TopSectionLink href="/">詳しくはこちらから</TopSectionLink>
			</div>
		</TopSectionContainer>
	);
}
