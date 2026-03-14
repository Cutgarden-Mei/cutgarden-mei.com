import { DecoratedSectionTitle } from "@/components/sections/decorated-section-title";
import { DecoratedTextRow } from "@/components/sections/decorated-text-row";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";
import { TopSectionLink } from "@/components/sections/top/top-section-link";

export function HomeKeratinPermSection() {
	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col items-center justify-center gap-10">
				<DecoratedSectionTitle
					title="ケラチンパーマ"
					iconSrc="/images/decoration/brush-red.png"
					iconAlt="ケラチンパーマ"
				/>
				<p className="text-lg max-w-[768px]">
					髪と同じ成分の「ケラチン」のみでウェーブを形状記憶させ、損傷した髪を修復しながらパーマをかけます。
				</p>
				<p className="text-lg font-bold">
					今までになかったパーマ液を使わないパーマ！
				</p>
				<p>
					★<span className="text-top-pink">こんな方におすすめします！</span>
				</p>
				<div className="flex flex-col gap-2">
					<DecoratedTextRow
						text="「縮毛矯正しているけど、パーマをかけたい方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
					<DecoratedTextRow
						text="「パーマやカラーで髪が傷んでしまった方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
					<DecoratedTextRow
						text="「髪にこしがなくなってきたと感じる方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
					<DecoratedTextRow
						text="「髪を傷めないでパーマスタイルを楽しみたい方」"
						iconSrc="/images/decoration/clip-blue.png"
						iconAlt="clip"
					/>
				</div>
				<TopSectionLink href="/">詳しくはこちらから</TopSectionLink>
			</div>
		</TopSectionContainer>
	);
}
