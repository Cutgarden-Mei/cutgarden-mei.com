import Image from "next/image";

import { PageFrame } from "@/components/page-frame";
import { PageSection } from "@/components/page-section";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

export const metadata = buildMetadata({
	title: buildPageTitle("髪の基礎知識"),
	description: "髪の構造や頭皮に関する基礎知識をご紹介するページです。",
	path: ROUTES.hairBasics,
});

export default function HairBasicsPage() {
	return (
		<PageFrame
			title="髪の基礎知識"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-12">
				<PageSection title="毛髪のなりたち">
					<p>
						毛根は、毛根と毛幹に分かれています。
						<br />
						頭皮の内部2～3mmを毛根、外側の部分を毛幹と呼びます。
						<br />
						毛根の下部が毛球で、ここに毛乳頭があります。毛乳頭には、頭皮の毛細血管から各種の栄養が送られ、細胞分裂が行われ、毛母細胞が作られています。毛母細胞に押し上げられて、毛髪は一日あたり0.3～0.5mmの割合で伸びています。
					</p>

					<div className="space-y-4 text-center">
						<p className="text-sm text-top-brown">＜髪の構造＞</p>
						<div className="mx-auto w-full max-w-[350px]">
							<Image
								src="/images/touhi.jpg"
								alt="頭皮と毛髪の構造図"
								width={350}
								height={500}
								className="h-auto w-full"
							/>
						</div>
					</div>
				</PageSection>

				<PageSection title="毛髪の構造">
					<p>
						毛幹は外側から、毛表皮(キューティクル)、毛皮質(コルテックス)、毛髄質(メデュラ)の、3層からできています。キューティクルは、毛先に向かって重なりあっている、ウロコのようなもので、コルテックスは毛髪の中身とも言うべきもので、メラニン色素を含んでいます。メデュラは毛髪の芯にあたり、うぶ毛のような細くて柔らかい毛には見られません。ちょうど「のり巻き」のようになっています。
					</p>

					<div className="space-y-4 text-center">
						<p className="text-sm text-top-brown">＜毛髪の構造＞</p>
						<div className="mx-auto w-full max-w-[560px]">
							<Image
								src="/images/kouzou2.jpg"
								alt="毛髪の構造図"
								width={300}
								height={135}
								className="h-auto w-full"
							/>
						</div>
					</div>
				</PageSection>

				<PageSection title="毛髪のサイクル">
					<p>
						毛髪の数は約10万本で、寿命は、男性で2～5年、女性で4～6年です。
						<br />
						男性平均を4年とするなら、抜け毛本数は一日あたり68本になります。
					</p>
					<p>
						毛髪の一生は
						<br />
						・髪が伸びている時期(成長期)2～6年
						<br />
						・成長の止まった髪が根付いている時期(中間期)2～3週間
						<br />
						・髪が生えかわる時期(休止期)2～3ヶ月
						<br />
						の、3段階に分かれています。
					</p>
				</PageSection>
			</div>
		</PageFrame>
	);
}
