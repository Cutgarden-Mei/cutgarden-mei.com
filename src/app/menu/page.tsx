import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("メニュー・料金"),
	description:
		"カットガーデンMeiのカット・パーマ・縮毛矯正・カラー・ヘアエステのメニューと料金（税込）です。",
	path: ROUTES.menu,
});

function PriceRow({ label, price }: { label: string; price: string }) {
	return (
		<li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dotted border-[#d9cfc6] py-2">
			<span>・{label}</span>
			<span className="shrink-0 tabular-nums">{price}</span>
		</li>
	);
}

function MenuItemWithNote({
	label,
	price,
	note,
}: {
	label: string;
	price: string;
	note?: string;
}) {
	return (
		<li className="border-b border-dotted border-[#d9cfc6] py-3">
			<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
				<span>・{label}</span>
				<span className="shrink-0 tabular-nums">{price}</span>
			</div>
			{note ? (
				<p className="mt-2 pl-1 text-sm leading-relaxed text-[#5c4a40]">{note}</p>
			) : null}
		</li>
	);
}

export default function MenuPage() {
	return (
		<PageFrame
			title="メニュー・料金"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-10">
				<p className="text-base font-medium leading-8 text-black">
					※メンズもすべて同一料金です（すべて税込み価格です）
				</p>

				<PageSection title="カット" contentClassName="space-y-0 text-base leading-8 text-black">
					<ul className="list-none space-y-0 pl-0">
						<PriceRow label="カット(S.B)" price="￥3,850" />
						<PriceRow label="高校生(S.B)" price="￥3,350" />
						<PriceRow label="中学生(S.B)" price="￥2,850" />
						<PriceRow label="小学生(S.500)" price="￥1,850" />
						<PriceRow label="だっこ" price="￥2,050" />
						<PriceRow label="前髪カット" price="￥1,020" />
						<PriceRow label="シャンプー＆ブロー" price="￥2,420" />
					</ul>
				</PageSection>

				<PageSection title="パーマ" contentClassName="space-y-0 text-base leading-8 text-black">
					<ul className="list-none space-y-0 pl-0">
						<MenuItemWithNote
							label="チオ"
							price="￥7,700～"
							note="（健康毛の方の一般的なパーマです）"
						/>
						<MenuItemWithNote
							label="システィン"
							price="￥8,580～"
							note="（少し傷み気味の方におすすめです）"
						/>
						<MenuItemWithNote
							label="イオントリートメントパーマ"
							price="￥10,780～"
							note="（傷めたくないけどしっかりとかけたい方に）"
						/>
						<MenuItemWithNote
							label="形状記憶ケラチンパーマ"
							price="￥12,650～"
							note="（髪の主成分のケラチンのみでカールをつけます）"
						/>
						<MenuItemWithNote label="ストレート" price="￥9,350～" />
					</ul>
				</PageSection>

				<PageSection title="縮毛矯正" contentClassName="space-y-0 text-base leading-8 text-black">
					<ul className="list-none space-y-0 pl-0">
						<PriceRow
							label="クリニック縮毛矯正(ノンアイロン)"
							price="￥21,450～"
						/>
					</ul>
				</PageSection>

				<PageSection title="カラー" contentClassName="space-y-0 text-base text-black">
					<ul className="list-none space-y-0 pl-0 leading-8">
						<MenuItemWithNote
							label="イオントリートメントカラー"
							price="￥7,480～"
							note="（超おすすめ。ツヤツヤになります）"
						/>
						<PriceRow label="白髪染め" price="￥5,610～" />
						<PriceRow label="おしゃれ" price="￥6,710～" />
					</ul>
					<p className="mt-4 leading-8">
						★髪を傷めない為に、プレトリートメント（＋￥1,100）を推奨しています。
					</p>
					<ul className="mt-4 list-none space-y-0 pl-0 leading-8">
						<PriceRow label="酸性カラー" price="￥7,700～" />
					</ul>
				</PageSection>

				<PageSection
					title="ヘアエステ(のみの場合＋￥2,200UP)"
					contentClassName="space-y-0 text-base text-black"
				>
					<ul className="list-none space-y-0 pl-0 leading-8">
						<MenuItemWithNote
							label="ケラチンエステ"
							price="￥4,620～"
							note="（髪をケラチンで補強します）"
						/>
						<MenuItemWithNote
							label="ケラチンアイロンエステ"
							price="￥6,600～"
							note="（縮毛矯正をされている方向けに、ケラチンで補強します）"
						/>
						<MenuItemWithNote
							label="キューティクルエステ"
							price="￥6,000～10,000前後"
							note="（髪の内部補強とキューティクルの補強、人工のキューティクルを形成します。髪の状態により、施術内容が変わりますので、料金も変動します。）"
						/>
					</ul>
					<p className="mt-6 leading-8">
						★ヘアエステメニューに関しまして、お客様の損傷度合い等により、一人一人内容が変わりますので、施術行程と料金を施術前に提示させていただきます。
					</p>
				</PageSection>
			</div>
		</PageFrame>
	);
}
