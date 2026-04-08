import Image from "next/image";

import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("スタッフ紹介"),
	description:
		"カットガーデンMei 店長・櫻井太一のプロフィールとごあいさつです。",
	path: ROUTES.staff,
});

export default function StaffPage() {
	return (
		<PageFrame
			title="スタッフ紹介"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
					<div className="mx-auto w-full max-w-[320px] shrink-0 md:mx-0">
						<Image
							src="/images/staff/masuta-scaled.jpg"
							alt="櫻井太一"
							width={640}
							height={480}
							className="h-auto w-full rounded-[4px] object-cover shadow-[0_8px_24px_rgba(38,22,15,0.12)]"
							sizes="(max-width: 768px) 100vw, 320px"
							priority
						/>
					</div>
					<div className="min-w-0 flex-1 space-y-2 text-center md:text-left">
						<p className="text-xl font-semibold text-black md:text-2xl">
							櫻井 太一　（サクライ タイチ）
						</p>
					</div>
				</div>

				<div className="space-y-3">
					役職・肩書／代表
					<br />
					誕生日／６月２７日　　血液型／Ｂ型
					<br />
					出身／和歌山県和歌山市
				</div>

				<div className="space-y-4 text-base leading-8 text-black">
					<p>
						大阪市・平野区にある、「美容室カットガーデンＭｅｉ」は、おかげさまでオープンから１７年目になります。
					</p>
					<p>ただ、流行り？のガラス張りの洒落たサロンではありません。</p>
					<p>
						落ち着いた雰囲気で、現在はオーナーの私、一人で営業しております。
						<br />
						したがって、大手サロンのようにベルトコンベア式に担当が変わったりしません。カット・パーマ・カラーの基本技術をしっかりこなします。
					</p>
					<p>
						また、理容の技術もマスターしておりますので、両方の良いところを取り入れ、トコトンこだわっているつもりです。
					</p>
					<p>お家に帰られてからの手入れのしやすさが、一番重要だと考えます！</p>
					<p>「カットガーデンＭｅｉ」は男性の方も大歓迎いたします。</p>
					<p>
						赤ちゃんや小さいお子さんからパパやママ、おじいちゃん、おばあちゃん、障害をお持ちの方まで、ご家族様全員とお付き合いしたいと思っております。
					</p>
					<p>理・美容歴合わせて３０年以上の私がすべてを担当致します。</p>
					<p>
						個性を大事にしながら、髪の傷み０％を目指して、他にはそうそう見かけない特殊、かつ最高級の薬剤を、自分の目で確かめ、研究して使用しております。
					</p>
					<p>
						縮毛矯正やパーマ、カラー等で髪がボロボロになってしまって悲しい思いをしている方、ぜひ一度ご相談ください。
						<br />
						一緒に二人三脚で治していきましょう！
					</p>
					<p>どうぞ、よろしくお願い致します。</p>
				</div>
			</div>
		</PageFrame>
	);
}
