import Image from "next/image";
import type { ReactNode } from "react";

import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";
import Link from "next/link";

export const metadata = buildMetadata({
	title: buildPageTitle("クリニック縮毛矯正"),
	description:
		"ノンアルカリ・ノンアイロンのクリニック縮毛矯正。自然なストレートとメリット、施術工程、注意事項をご紹介します。",
	path: ROUTES.clinicStraightening,
});

function ProcessStep({ title, body }: { title: string; body: ReactNode }) {
	return (
		<div className="space-y-2">
			<p className="font-semibold text-black">{title}</p>
			{body ? (
				<div className="space-y-2 text-base leading-8">{body}</div>
			) : null}
		</div>
	);
}

function StepArrow() {
	return (
		<p className="py-1 text-center text-lg text-[#7a3a12]" aria-hidden="true">
			↓
		</p>
	);
}

export default function ClinicStraighteningPage() {
	return (
		<PageFrame
			title="クリニック縮毛矯正"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-12">
				<p className="font-medium leading-12 text-3xl bg-[#7a3a12] text-white p-2 rounded-[4px]">
					まるで　「生まれつきのストレートヘアみたいに自然でツヤツヤ！」　の髪に!!
				</p>

				<PageSection title="「クリニック縮毛矯正」とは？">
					<p>
						<strong>『クリニック縮毛矯正』</strong>{" "}
						この様な方には特におすすめします！
					</p>
					<p>■他店で縮毛矯正を断られた方</p>
					<p>■不自然にピンピンのストレートが嫌な方</p>
					<p>■とにかくアイロンを使うのが嫌な方</p>
					<p>■たまにはブローやカーラー等で、違うスタイルも楽しみたい方</p>
					<p>■やっぱり髪が傷むのが嫌な方</p>
					<p className="text-top-pink">
						クリニック縮毛矯正は、ノンアルカリの薬剤を使用し、アイロンを使用しない為熱変性を起こしません。
					</p>
					<p>
						近年はアイロン専用の薬品が多くなってきました。　さて実際には、「アイロン」と「ドライヤー」どちらが良いのでしょうか？
					</p>
					<p>
						アイロンを使用する方法だと、よりまっすぐに伸ばすことができますが、熱によるタンパク質の熱変性を引き起こし後々のスタイルチェンジにも悪影響をもたらします
					</p>
					<p>
						ブローブラシで伸ばす方法だと、熱変性は起こしませんし、スタイルチェンジもしやすいですが、抵抗が大きく、キューティクルにも悪影響を与えてしまう可能性があるといわれております。
					</p>
					<p>
						しかし、当店の『ｸﾘﾆｯｸ縮毛矯正』は両方の良いとこどりが出来るのです。
						<br />
						<span className="font-bold text-top-pink text-lg">
							ノンアルカリ<span className="font-normal">の薬剤</span>
						</span>
						を使用することに加え、しっかりとしたブローテクニック・アイロンテクニックにより、髪の傷みを最小限にとどめることができ、思い通りのストレートヘアに仕上げることができます。
					</p>
					<p>
						縮毛髪の断面は楕円形をしているのに対し、直毛髪の断面は円形に近くなっています。
						<br />
						この楕円形の毛髪に、天然の高級たんぱく質や保湿成分を補給し、成分の量を均一にし、円筒形に近づけることで癖を伸ばします。
					</p>

					<div className="flex flex-col gap-6 pt-2 md:flex-row md:gap-8">
						<div className="text-center w-full max-w-[224px]">
							<Image
								src="/images/syukumoudan.jpg"
								alt="縮毛髪の断面（楕円形）の模式図"
								width={224}
								height={195}
								className="h-auto w-full"
							/>
						</div>
						<div className="text-center w-full max-w-[224px]">
							<Image
								src="/images/tyokumoudan.jpg"
								alt="直毛髪の断面（円形に近い）の模式図"
								width={224}
								height={195}
								className="mx-auto h-auto w-full max-w-[224px]"
							/>
						</div>
					</div>
				</PageSection>

				<PageSection title="「クリニック縮毛矯正」のメリット">
					<p>
						■豊富な天然素材(ムコ多糖類・ケラチンタンパク・コラーゲン・スクワラン・セラミド・シルクプロテイン・トレハロース・ｎｍｆ成分・混合植物エキスなど)がいっぱい入っています！
					</p>
					<p>
						■髪に優しいトリートメントでストレートになり、しかもダメージレス！
					</p>
					<p>■自然な質感で、ダメージを感じさせない艶のある仕上がり！</p>
					<p>■ストレートメニューは、ノンアイロン！(アイロンも可)</p>
					<p>
						■スタイルの再現性、自在性はバツグンで、ホームケアがとっても楽ちん！
					</p>
					<p>■弱酸性。ノンアルカリ！</p>
					<p>■使用薬液の不快な臭いが残りません！</p>
				</PageSection>

				<PageSection title="施術工程">
					<p>
						☆このストレートは、ダメージなどで脱落した髪の成分を補い、成分の量を均一にすることで髪の形をキレイな円筒形に近づけることで、癖毛を伸ばします。
						<br />
						だから、傷まずに自然な質感とツヤが出て、スタイルのアレンジがお楽しみ頂けます。
					</p>

					<div className="mt-6 space-y-1 text-base leading-8">
						<ProcessStep
							title="●カウンセリング"
							body={
								<p>
									毛髪診断（クセの強弱、ダメージ度合い、髪質）により、薬剤を選択します。
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●プレシャンプー"
							body={<p>毛髪中心にシャンプーします。</p>}
						/>
						<StepArrow />
						<ProcessStep
							title="●地肌の保護"
							body={
								<p>
									アメリカのNASAが開発した、最高級のお肌の保護クリームを使用しています。
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●前処理"
							body={
								<>
									<p>
										はじめに、髪の主成分であるケラチンタンパクや、コラーゲンを補給します。
										<br />
										数種類のハーブエキスも入っています。
									</p>
									<p>
										次に、乾燥を防ぐため、髪の健康に必要な天然の保湿成分（NMF）を塗布します。
									</p>
								</>
							}
						/>
						<StepArrow />
						<ProcessStep title="●約５分ほど加温" body={null} />
						<StepArrow />
						<ProcessStep
							title="●薬剤塗布"
							body={
								<p>
									髪の形状を整えるために、さらに栄養分を補給。
									<br />
									（お肌の高級化粧品にも使用される天然タンパク質や、自然の成分が豊富に含まれています。）
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●１５分～３０分ほど加温(毛髪の状況によって変わります)"
							body={
								<p>
									加温をすることで有効成分をしっかりと髪に浸透させます。
									<br />
									（少し熱いかもしれませんが、その方が効果が上がります。）
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●お流し"
							body={
								<p>
									キレイにお流しし、引締め効果のあるトリートメントを付けます。
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●ブローローション塗布"
							body={
								<p>
									ドライヤーの熱から髪を守るため、ブローローションを塗布します。
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●ブロー"
							body={
								<>
									<p>
										髪の生えている方向に、熱を加えながらブローしていきます。仕上げのブローではありません。
										<br />
										キトサンやシルクの働きとドライヤーの熱の効果によって、今まで吸収した有効成分を閉じ込め、
										<br />
										髪の形状をストレートに記憶させます。
									</p>
									<p>
										★よりストレートにしたいとお考えの方は、この後アイロン処理をします。
									</p>
								</>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●定着ローション塗布"
							body={
								<p>
									ストレートの形状が戻らないよう、最終の定着ローションを塗布します。
									<br />
									この中にも　スクワラン、トレハロース、シルクプロテインなどの有効成分が含まれています。
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep
							title="●シャンプー"
							body={
								<p>
									４８時間は、洗髪できませんのでシャンプーとトリートメントをします。
								</p>
							}
						/>
						<StepArrow />
						<ProcessStep title="●仕上げ" body={null} />
					</div>
				</PageSection>

				<PageSection title="「クリニック縮毛矯正」導入ストーリー！">
					<p>
						ここで、この「クリニック縮毛矯正」がどのようにして、当店に導入することになったのか？
						<br />
						を、お話ししたいと思います。
					</p>
					<p>
						私の妻もくせ毛なので、当たり前のように縮毛矯正をしていました。
						<br />
						なにぶん、美容師の妻の特権みたいなものなのでしょうか、けっこう頻度が高かったので、かなり傷みには気を付けていてもどうしても傷んできます。
						<br />
						そこへ、カラーもしているものですから、半端なく傷んできて、ついに私は美容師としてこれ以上の縮毛矯正はしない方が良いとの判断をして、当分の間、縮毛矯正はしないことにしました。
					</p>
					<p>
						ところが、妻は我慢が出来なくて何とかしてほしいと訴えてきたのです。（くせ毛の妻には耐えられなかったみたいです）
					</p>
					<p>
						そこで、何とかこの傷んだ妻の髪を矯正することの出来る薬剤は存在しないものかと、いろいろな情報を集め、調べたところ、ある一つの薬剤に行きついたのです。
					</p>
					<p>
						それでも、今までの私の中にあった常識では不可能だという思いはぬぐいきれませんでしたが、一応連絡を付け、妻をモデルに講習してもらうことに決めました。
						<br />
						妻の髪に出来るようならこれは本物だと確信が出来ると思ったからです。
					</p>
					<p>
						その結果、縮毛矯正はこれしかないとの結論に至り、導入することに決めました。
					</p>
					<p>
						当店では、「
						<Link
							href={ROUTES.keratinPerm}
							className="text-top-pink font-bold hover:underline"
						>
							ケラチンパーマ
						</Link>
						」という特殊なパーマのメニューがあるので、このケラチンパーマの薬剤と理論をうまく組み合わせて、よりダメージの少ない当店独自の縮毛矯正ができると思い、研究と実験を重ねました。
					</p>
					<p>
						しかし、ぶっちゃけた話をさせてもらうと、この矯正の薬剤のコストは通常の薬剤の約５倍から６倍ほどかかります。
						<br />
						ですので、通常の値段で施術するとほとんど利益が出ないのです。
					</p>
					<p>
						高めの料金設定でするか、通常の薬剤を使用して安く提供させていただくかを悩みましたが、本当にこだわりを持って矯正したい人を対象にしようと決め、導入することにしました。
					</p>
					<p>
						ですので、こだわりを持って、極力髪に負担をかけず、自然な仕上がりを求める方にしていただきたいと思っております。
					</p>
				</PageSection>

				<PageSection title="施術後の注意事項！">
					<p>
						クリニック縮毛矯正の効果を最大限に生かし、持続させて頂く為に、数点の注意事項がございます。
					</p>
					<p>
						★施術後、４８時間以内のシャンプーは控えてくださいますようお願い致します。
						<br />
						(毛髪再生の効果が弱まると共に、癖が多少もどることがあります。)
					</p>
					<p>
						★シャンプー後は必ずドライヤーで乾かして、ブローしてください。
						<br />
						(絶対に、髪の毛が濡れたままオヤスミにならないでください。)
					</p>
					<p>
						★なるべく、きつく縛らないでください。
						<br />
						特に、施術後４８時間は縛らないようにお願い致します！
						<br />
						(ゴムの跡がついたり、切れ毛の原因になることがあります。)
					</p>
					<p className="font-semibold text-black">おすすめします！！</p>
					<p>
						当店では、髪の毛を強化する為に、一週間以内の『ケラチンエステ』をおすすめします。
						<br />
						10日以内の施術に限り、通常価格6,000円のところを、2,000円引きの4,000円の特別料金でさせて頂きます。
					</p>
				</PageSection>
			</div>
		</PageFrame>
	);
}
