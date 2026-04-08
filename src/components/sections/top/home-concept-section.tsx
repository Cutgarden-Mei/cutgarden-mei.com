"use client";

import {
	ImageZoomGallery,
	type ImageZoomGalleryItem,
} from "@/components/image-zoom-gallery";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";

const CONCEPT_GALLERY_ITEMS: ImageZoomGalleryItem[] = [
	{
		src: "/images/top/mei_top_02.jpg",
		alt: "カットガーデンMeiのコンセプト画像",
		zoomable: true,
	},
	{
		src: "/images/top/mei_top_01.jpg",
		alt: "カットガーデンMeiのコンセプト画像",
		zoomable: true,
	},
];

export function HomeConceptSection() {
	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col gap-10">
				<h2 className="text-center text-[28px] font-black font-serif">
					カットガーデンMeiは、大阪市平野区のアットホームな美容室です。
				</h2>
				<ImageZoomGallery
					variant="inline"
					items={CONCEPT_GALLERY_ITEMS}
					inlineThumbnailClassName="relative h-[330px] w-[350px]"
					maxWidthClassName="max-w-[720px]"
					bodyClassName="bg-white px-4 py-4 md:px-6 md:py-6"
					modalInnerClassName="relative mx-auto w-full max-w-[640px]"
					modalImageWidth={600}
					modalImageHeight={776}
					modalImageClassName="h-auto w-full object-contain"
					modalImageSizes="(max-width: 720px) 90vw, 640px"
				/>
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
