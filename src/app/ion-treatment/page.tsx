import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("イオントリートメント"),
	description:
		"全国の美容室のわずか1％で認められたイオントリートメントについてご紹介するページです。",
	path: ROUTES.ionTreatment,
});

export default function IonTreatmentPage() {
	return (
		<PageFrame
			title="イオントリートメント"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-12">
				<PageSection title="「イオントリートメント」全国の美容室の１％の奇跡">
					<p>
						この秘薬は、全国でわずか１％の美容室でしか、使用が認められておりません。
					</p>
					<p>それを、当店は入手することが出来ました。</p>
					<p>長年、美容師をしていると、多くの色々な薬剤を見てきました。</p>
					<p>その中で、これほど結果の出るものには出会っていなかったのです。</p>

					<p>
						ですから、そこで、
						<br />
						<span className="block">
							「イオントリートメントカラー」
							<br />
							「イオントリートメントパーマ」
							<br />
							「イオンクリニック縮毛矯正」
						</span>
						として、お客様の髪を綺麗にするメニューを新たに加えさせていただきました。
					</p>

					<p>
						ただ、大変貴重で高価なものですので、通常のパーマ・カラーより、値段が3,000円プラスになります。
					</p>
					<p>
						私は、それだけの値打ちがあると判断して、コストを度外視して、あえてメニューに加えました。
					</p>
					<p>髪がツヤツヤになりたい方は、是非一度お試しください。</p>

					<p>
						★この効果を持続させるには、「イオントリートメントホームケア用」の継続使用をおすすめします！
						<br />
						パーマに関しましては、普段のお手入れや、髪の状態によって「イオントリートメントパーマ」か「ケラチンパーマ」のどちらが良いかを相談の上、決めさせていただきます。
					</p>

					<p>
						●お断り
						<br />
						大変申し訳ございませんが、製造・販売元より、インターネット上での詳しい内容等は控えていただくようにとの警告がありましたので、詳しい内容等は当店に直接お尋ね下さいませ。
					</p>
				</PageSection>
			</div>
		</PageFrame>
	);
}
