import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("リセットカット"),
	description:
		"カットガーデンMeiオリジナルのリセットカット。もつれをほどいて動きやすくする技術と料金のご案内です。",
	path: ROUTES.resetCut,
});

function PriceRow({ label, price }: { label: string; price: string }) {
	return (
		<li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dotted border-[#d9cfc6] py-2">
			<span>{label}</span>
			<span className="shrink-0 tabular-nums">{price}</span>
		</li>
	);
}

export default function ResetCutPage() {
	return (
		<PageFrame
			title="リセットカット"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-12">
				<PageSection title="「リセットカット」とは？">
					<p>このような悩みをお持ちのお客様に、お勧めいたします！</p>
					<p>■襟足が浮いちゃってイヤ！</p>
					<p>■つむじが分かれてしまって、薄く見えるのがイヤ！</p>
					<p>■前髪の分け目を変えたい！</p>
					<p>■分け目をなくしたい！</p>
					<p>■長さは変えたくないけど、量を少なくしたい！</p>
					<p>
						薬剤等を使わずに、特殊なハサミを用いて、目に見えない髪の「もつれ」をほどくことによって、髪を自由に動かしやすくします。長さを変えずにボリュームダウンしたり、分け目を変えたり、つむじの分かれ目を目立たないようにする新しいカット技術です！！
					</p>
					<p>
						全頭に「リセットカット」を施すと、不思議と艶がでてサラサラになります。
						<br />
						（効果の感じ方には、個人差があります。）
					</p>
					<p>★「リセットカット」はカットガーデンMeiのオリジナルです。</p>
				</PageSection>

				<PageSection title="リセットカット料金">
					<p className="font-semibold text-black">
						■通常料金（カット料金にプラス）
					</p>
					<ul className="list-none space-y-0 pl-0">
						<PriceRow label="・ワンポイント" price="５００円" />
						<PriceRow label="・全頭" price="２,５００円" />
					</ul>

					<p className="mt-6 font-semibold text-black">
						■お得なコース（おまかせコース）
					</p>
					<p>
						・カット料金にプラス１,５００円で、必要な箇所に「リセットカット」を施して、気になるところを改善します！！
					</p>
					<p className="tabular-nums font-bold text-[#f00]">
						３,８００円＋１,５００円＝５,３００円
					</p>

					<p className="mt-6">
						★パーマ・縮毛矯正の場合は、追加料金は頂きません！！
						<br />
						しばらくの間、お試し期間といたしまして、おまかせコース料金は頂きません。
						<br />
						（但し、お客様のご希望により、全頭リセットカットを施す場合は、この限りではありません。）
					</p>
				</PageSection>
			</div>
		</PageFrame>
	);
}
