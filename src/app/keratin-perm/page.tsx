import Image from "next/image";

import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("ケラチンパーマ"),
	description:
		"形状記憶ケラチンパーマの特徴や、従来のパーマとの違い、おすすめの方についてご紹介します。",
	path: ROUTES.keratinPerm,
});

export default function KeratinPermPage() {
	return (
		<PageFrame
			title="ケラチンパーマ"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-12">
				<PageSection title="「ケラチンパーマ」ってなに？">
					<p>
						<strong className="text-xl">『形状記憶ケラチンパーマ』</strong>
						こんな方におすすめします！
					</p>
					<p>■ 縮毛矯正しているけど、パーマをかけたい方</p>
					<p>■ パーマやカラー等で傷んでしまった髪の方</p>
					<p>■ 髪を傷めたくない方</p>
					<p>■ 髪にこしがなくなってきたと感じている方</p>
				</PageSection>

				<PageSection title="次世代「ケラチンパーマ」とは？">
					<p className="text-lg font-bold">・・・従来のパーマは？</p>
					<p>
						パーマ剤は、頭髪にパーマをかける機能を目的とした粧剤です。
						<br />
						ところが最近になって、髪の損傷の程度によっては1剤を塗布した段階で、髪が柔らかくなり過ぎて切れてしまう現象が多くなりました。
					</p>
					<p>
						そこで<span className="font-bold">損傷毛・超損傷毛</span>
						に対してパーマをかける、パーマ剤ではない化粧品に類別されるウェーブ剤があります。しかし、還元・酸化という化学反応で髪にパーマをかけるウェーブ剤であることには変わりありません。
					</p>
					<p>そうです。髪への負担が大きいか少ないかの違いだけなんです。</p>
					<p>まったく傷まないパーマはないのです！今までは…</p>
					<p>ところが、ありました！</p>
					<p>
						それは、<strong className="text-xl">『ケラチンパーマ』</strong>
						です。
					</p>
				</PageSection>

				<PageSection title="ケラチンパーマは従来のパーマとどう違うの？">
					<p>
						ケラチンは、髪と同じ成分のケラチンタンパク質が、髪のコルテックス繊維の間に入り込んで、ロッド巻きした形状をケラチンが記憶して、損傷した髪をトリートメントしながら、パーマをかけるウェーブ剤として開発されました。
					</p>
					<p>
						パーマ剤は還元・酸化という化学反応に対して、ケラチンは形状記憶というプロセスによって、ウェーブが記憶される為、傷むどころか、
						<span className="font-bold">髪の強度も２０％アップ</span>
						されるという、素晴らしい実験データが出ております。
					</p>
					<p className="font-bold">
						◎
						パーマではない為、縮毛矯正した後の髪の毛にも、きれいにかけることが出来ます！
					</p>
					<p>
						★
						最近、パーマ液をベースにした「ケラチンパーマ」も登場してきたようです。類似商品にご注意下さい！
					</p>
				</PageSection>

				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col gap-1">
						<p className="font-bold text-lg">◆通常のパーマ後の毛髪</p>
						<div className="flex gap-4">
							<div className="mx-auto w-full max-w-[171px] shrink-0 md:mx-0">
								<Image
									src="/images/keratinPerm/pamago2.jpg"
									alt="通常のパーマ後の毛髪の電子顕微鏡写真。毛小皮が浮き上がっている様子"
									width={171}
									height={179}
									className="h-auto w-full"
								/>
							</div>
							<p className="min-w-0 flex-1">
								パーマ1剤の過剰反応により、毛髪の表面の乾燥・剥離で毛小皮が浮き上がっているのが認められます。
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col gap-1">
						<p className="font-bold text-lg">◆ケラチンパーマ後の毛髪</p>
						<div className="flex gap-4">
							<div className="mx-auto w-full max-w-[171px] shrink-0 md:mx-0">
								<Image
									src="/images/keratinPerm/keratingo2.jpg"
									alt="ケラチンパーマ後の毛髪の電子顕微鏡写真。毛小皮が密着している様子"
									width={171}
									height={179}
									className="h-auto w-full"
								/>
							</div>
							<p className="min-w-0 flex-1">
								『ケラチン』の効果で、毛小皮はしっかり重なって、毛髪の表面に密着しています。
							</p>
						</div>
					</div>
				</div>

				<PageSection title="「ケラチンパーマ」のメリット">
					<p>
						先に述べましたように、パーマではないため、次のようなメリットがあります。
					</p>
					<ol className="space-y-2 list-decimal list-inside underline">
						<li>パーマ液の臭いがしない（臭いが残らない）</li>
						<li>パーマと比べカールのもちが良い</li>
						<li>髪がまったく痛まない（逆に髪の強度がアップ）</li>
						<li>縮毛矯正していてもキレイにかかる</li>
						<li>その日にすぐシャンプーができる</li>
						<li>回数を重ねる程艶がでて手触りが良くなる</li>
					</ol>
				</PageSection>
			</div>
		</PageFrame>
	);
}
