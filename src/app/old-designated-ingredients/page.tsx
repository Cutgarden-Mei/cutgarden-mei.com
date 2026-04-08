import { Fragment } from "react";

import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

import { DESIGNATED_INGREDIENT_BLOCKS } from "./ingredients-data";

export const metadata = buildMetadata({
	title: buildPageTitle("旧指定成分について"),
	description:
		"旧指定成分の概要、シャンプー・リンスの成分、薬事法に基づく成分一覧などをご紹介します。",
	path: ROUTES.oldDesignatedIngredients,
});

function MultilineText({ text }: { text: string }) {
	const lines = text.split("\n");
	return lines.map((line, i) => (
		<Fragment key={i}>
			{i > 0 ? <br /> : null}
			{line}
		</Fragment>
	));
}

export default function OldDesignatedIngredientsPage() {
	return (
		<PageFrame
			title="旧指定成分について"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-12">
				<PageSection title="旧指定成分とは">
					<p>
						シャンプーには、泡立ちをつくるための増泡剤、腐敗や酸化・カビなどを防ぐための防腐剤や酸化防止剤、きれいな色、よい香りを出すための着色料や香料などが加えられています。
					</p>
					<p>
						化粧品類の品質の安定には欠かせないものもあるのですが、中には体にとって良くない成分も含まれているのです。
					</p>
					<p className="font-semibold text-black">
						●指定成分（表示成分とは）
					</p>
					<p>
						これらのさまざまなトラブルを購入者（＝消費者）が避けられるように、以前は、化粧品原料の中で特に毒性の強い102種類を指定し、表示を義務づけていました。
					</p>
					<p>
						これが「指定成分」（あるいは「表示成分」）といわれるものです。
					</p>
					<p className="font-semibold text-black">
						●全成分表示の義務化とその影響
					</p>
					<p>
						しかし、2001年4月からは、全成分表示（刺激の強い、弱いに関わらず原料すべてを表示する）が義務づけられました。消費者にとって全成分が表示されるのは安心なのですが、20～30種類ものカタカナ名が小さな文字でズラズラ並んでいたのでは、店頭でこれをすべて理解するのはとても不可能です。
					</p>
					<p>
						かえって刺激の強い成分が分かりにくくなってしまったように感じます。
					</p>
				</PageSection>

				<PageSection title="毛髪に油分がないと枝毛や抜け毛が増える">
					<p>健康な髪には適度な油分が含まれています。</p>
					<p>自然な状態の髪の毛には、油分が含まれています。</p>
					<p>
						この油分は、湿り気や柔軟性を与える、外部からの有害物質や細菌の侵入を防ぐ、体内からの水分の放出を防ぐなどの機能があり、髪を保護する大切なものなのです。
					</p>
					<p>
						そこで、油分がなくなると、枝毛、抜け毛、切れ毛の原因となり、ツヤや弾力もなくなります。
						<br />
						そして加齢とともに、薄くなっていくわけです。
					</p>
					<p className="font-semibold text-black">
						●キューティクルを破壊する合成洗剤
					</p>
					<p>
						ところが、市販のシャンプーには合成洗剤に使われている刺激の強い界面活性剤が含まれています。
						<br />
						界面活性剤は、その強力な洗浄力で頭皮や毛髪の油分を取り、キューティクルを破壊してしまいます。
						<br />
						キューティクルは数層からなっている非常に薄い膜で、その大切な役割は髪の毛内部の保護です。
					</p>
					<p>
						正常な髪ではきちんとそろっていますが、界面活性剤入りのシャンプーを使っている人の場合はボロボロになっているケースが見られます。大切な油分を「汚れ」として取り除いてしまっているのです。
					</p>
				</PageSection>

				<PageSection title="コンディショニングという名前にだまされない">
					<p>
						界面活性剤の洗浄力や皮膚への刺激をやわらげるために「コンディショニング」と名づけられたシャンプーが開発されました。
						このコンディショニングシャンプーには、カチオン（陽イオン）化セルロースという物質が用いられています。
					</p>
					<p>
						シャンプー液を薄めると、カチオン化セルロースと界面活性剤が複合塩をつくり毛髪につくので、シャンプーのすすぎ中も指通りがなめらかになり、毛髪の損傷防止に効果が期待できるというものです。
					</p>
					<p>
						もちろん、保湿剤、増粘剤、着色料、安定剤、殺菌防止剤なども使われています。
					</p>
					<p>
						さらに、界面活性剤入りシャンプーは、分解されにくいため川や湖を汚すという問題もあります。メダカの一種タップミーの眼球とエラに致命的な 障害を与えることも報告されています。
					</p>
					<p className="font-semibold text-black">
						●かぶれを起こしやすい成分について
					</p>
					<p>Ｋ社　コンディショナー　かぶれを起こしやすい成分</p>
					<ul className="list-none space-y-1 pl-0">
						<li>塩化ステアリルトリメチルアンモニウム（陽イオン界面活性剤）</li>
						<li>セタノール（油分）</li>
						<li>ジブチルヒドロキシトルエン（酸化防止剤）</li>
						<li>安息香酸塩（殺菌防腐剤）</li>
						<li>黄色4号（タール色素）</li>
						<li>黄色5号（タール色素）</li>
						<li>香料</li>
					</ul>
				</PageSection>

				<PageSection title="リンスのシリコンについて">
					<p>
						リンスは、シャンプー後の髪になめらかさを与え、しっとりさせるためのもの。
					</p>
					<p>
						カチオン（陽イオン）界面活性剤と高級アルコールが形成するゲルのなかに油分を配合しています。カチオン界面活性剤は毛髪に吸着し、摩擦を少なくします。
					</p>
					<p>
						いったん吸着したカチオン界面活性剤や油分は、単なる水洗いでは落ちません。つまり、界面活性剤や油分がずっと髪についたままなのです。
						<br />
						油分は、一般的に毛髪になめらかさを与える効果が高いシリコンが用いられています。シリコンはケイ素を含む高分子化合物。
					</p>
					<p>
						化学反応を起こしにくいため、医療品や電線の絶縁剤などに使われてきました。
					</p>
					<p>
						シリコンの安全性については見解が分かれていますが、化学的に安定しており、体内に吸収されないと考えられていたのに、問題が起きた理由は分かっていません。
					</p>
					<p>
						それにしても、なぜ現実に被害が発生しているものを化粧品原料として使用するのか理解に苦しみます。
					</p>
					<p className="font-semibold text-black">
						●かぶれを起こしやすい成分について
					</p>
					<p>シリコンの表示名：ジメチコン</p>
					<ul className="list-none space-y-1 pl-0">
						<li>ジメチコンコポリオール</li>
						<li>シクロメチコン</li>
						<li>ジメチコノール</li>
					</ul>
					<p className="mt-4">Ｋ社　リンス　かぶれを起こしやすい成分</p>
					<ul className="list-none space-y-1 pl-0">
						<li>塩化ステアリルトリメチルアンモニウム（陽イオン界面活性剤）</li>
						<li>セタノール（油分）</li>
						<li>プロピレングリコール（保湿剤）</li>
						<li>パラベン（殺菌防腐剤）</li>
						<li>黄色4号（タール色素）</li>
						<li>赤色230号（タール色素）</li>
					</ul>
					<p className="mt-4">
						塩化ステアリルトリメチルアンモニウムは、水中で陽イオンが活性をおびてはたらく界面活性剤です。洗浄力は弱いものの、陰イオン界面活性剤と結合して水に溶けない結晶をつくり、毛髪の表面をコーティングして静電気を中和します。
					</p>
					<p>
						また、逆性せっけんとも呼ばれ、殺菌剤として知られ、無臭で、消毒薬として広く利用されています。しかし、急性毒性は、毒性が強い界面活性剤として知られるABSやLASの5～7倍という強さです。アメリカでは誤飲による死亡事故がありました。
					</p>
				</PageSection>

				<PageSection title="旧指定成分一覧" contentClassName="text-base leading-8 text-black">
					<div className="overflow-x-auto">
						<table className="w-full min-w-[280px] border-collapse text-left text-sm">
							<thead>
								<tr className="border-b-2 border-[#9e6e42]">
									<th className="py-2 pr-4 font-semibold text-black md:pr-8">
										■薬事法による成分■
									</th>
									<th className="py-2 font-semibold text-black">■おもな用途■</th>
								</tr>
							</thead>
							{DESIGNATED_INGREDIENT_BLOCKS.map((block) => (
								<tbody key={block.groupTitle}>
									<tr className="bg-[#f7f3ef]">
										<th
											className="py-3 pr-4 text-left font-semibold text-black md:pr-8"
											colSpan={2}
											scope="colgroup"
										>
											{block.groupTitle}
										</th>
									</tr>
									{block.rows.map((row, rowIndex) => (
										<tr
											key={`${block.groupTitle}-${rowIndex}`}
											className="border-b border-dotted border-[#d9cfc6]"
										>
											<td className="py-2 pr-4 align-top md:pr-8">
												<MultilineText text={row.ingredient} />
											</td>
											<td className="py-2 align-top md:whitespace-normal">
												{row.purpose}
											</td>
										</tr>
									))}
								</tbody>
							))}
						</table>
					</div>
				</PageSection>
			</div>
		</PageFrame>
	);
}
