import Image from "next/image";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";

export function HomeConceptSection() {
	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col gap-10">
				<h2 className="text-center text-[28px] font-black font-serif">
					カットガーデンMeiは、大阪市平野区のアットホームな美容室です。
				</h2>
				<div className="flex justify-center gap-4">
					<div className="relative h-[330px] w-[350px]">
						<Image
							src="/images/top/mei_top_02.jpg"
							alt="concept"
							fill
							className="object-cover object-center"
						/>
					</div>
					<div className="relative h-[330px] w-[350px]">
						<Image
							src="/images/top/mei_top_01.jpg"
							alt="concept"
							fill
							className="object-cover object-center"
						/>
					</div>
				</div>
				<p className="mx-auto w-[760px] leading-loose">
					縮毛矯正やパーマ、カラーでボロボロになってしまった髪にお悩みの方、当店では研究を怠らず、髪に『本当に良いもの』をご提供いたしております。
					<br />
					クリニック縮毛矯正、ケラチンパーマ、イオントリートメントをぜひお試しください。メンズも各種同一料金です。お気軽にお越し下さい。
					<br />
					オーナーの私　一人でシャンプーから仕上げまでを担当致します。
					<br />
					ご来店の際は、ご予約をお願い致します。
				</p>
			</div>
		</TopSectionContainer>
	);
}
