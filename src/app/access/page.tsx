import { PageFrame } from "@/components/page-frame";
import { getAccessInfo } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";
import { buildPageTitle } from "@/lib/site";
import Image from "next/image";

export const metadata = buildMetadata({
	title: buildPageTitle("Access"),
	description: "アクセス情報ページです。",
	path: "/access",
});
export const revalidate = 60;

export default async function AccessPage() {
	const access = await getAccessInfo();
	const infoRows = [
		{ label: "サロン名", value: "カットガーデンMei" },
		{ label: "オーナー", value: "櫻井太一" },
		{ label: "住　所", value: "〒547-0032\n大阪市平野区流町3丁目18-6" },
		{ label: "TEL", value: "06-6703-0307", accent: true },
		{ label: "営業時間", value: "AM10:00～PM7:00(予約優先)" },
		{
			label: "受付時間",
			value: "パーマ・カラーはPM5:30まで\nカットはPM6:30まで",
		},
		{ label: "定休日", value: "毎週月曜日" },
	];
	const guideParagraphs = [
		"出来るだけご来店前にお電話下さいますようお願いいたします。",
		"最寄り駅、「大阪メトロ谷町線平野駅」５番出口を出て、南港通りをそのまま東へ。",
		"三菱ＵＦＪ銀行とセブンイレブンの間の道を右折。",
		"一つ目の信号の手前右側、ファミリーマートの向かいに当店はございます。",
		"徒歩で約１０分になります。",
	];

	return (
		<PageFrame
			title="アクセス"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[560px] text-[13px] leading-8 text-[#4f392d]">
				<dl className="space-y-6">
					{infoRows.map((row) => (
						<div key={row.label} className="grid grid-cols-[88px_1fr] gap-4">
							<dt className="text-[#2f1c12]">{row.label}</dt>
							<dd
								className={`m-0 whitespace-pre-line ${row.accent ? "text-top-pink" : ""}`}
							>
								{row.value}
							</dd>
						</div>
					))}
				</dl>

				<div className="mt-8">
					{guideParagraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>

				<div className="mt-8 flex flex-col gap-3 text-sm">
					<div className="flex items-center">
						大きな地図でみる →
						<a
							className="w-fit underline transition hover:opacity-80 text-top-pink flex items-center gap-1"
							href={access.mapEmbedUrl}
							rel="noreferrer"
							target="_blank"
						>
							Google Mapのページ
							<Image
								src="/images/decoration/link-newtab.png"
								alt=""
								width={16}
								height={16}
								className="h-[16px] w-[16px]"
							/>
						</a>
						ヘ。
					</div>
				</div>
			</div>
		</PageFrame>
	);
}
