import {
	ImageZoomGallery,
	type ImageZoomGalleryItem,
} from "@/components/image-zoom-gallery";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

const VOICE_GALLERY_ITEMS: ImageZoomGalleryItem[] = [
	{ src: "/images/customerVoice/voice13.jpg", alt: "お客様の声 その13" },
	{ src: "/images/customerVoice/voice12.jpg", alt: "お客様の声 その12" },
	{ src: "/images/customerVoice/voice11.jpg", alt: "お客様の声 その11" },
	{ src: "/images/customerVoice/voice10.jpg", alt: "お客様の声 その10" },
	{ src: "/images/customerVoice/voice09.jpg", alt: "お客様の声 その9" },
	{ src: "/images/customerVoice/voice08.jpg", alt: "お客様の声 その8" },
	{ src: "/images/customerVoice/voice07.jpg", alt: "お客様の声 その7" },
	{ src: "/images/customerVoice/voice06.jpg", alt: "お客様の声 その6" },
	{ src: "/images/customerVoice/voice05.jpg", alt: "お客様の声 その5" },
	{ src: "/images/customerVoice/voice04.jpg", alt: "お客様の声 その4" },
	{ src: "/images/customerVoice/voice03.jpg", alt: "お客様の声 その3" },
	{ src: "/images/customerVoice/voice02.jpg", alt: "お客様の声 その2" },
	{ src: "/images/customerVoice/voice01.jpg", alt: "お客様の声 その1" },
];

export const metadata = buildMetadata({
	title: buildPageTitle("お客様の声"),
	description:
		"カットガーデンMeiにいただいたお客様の声をご紹介します。画像をタップすると拡大してご覧いただけます。",
	path: ROUTES.voice,
});

export default function VoicePage() {
	return (
		<PageFrame
			title="お客様の声"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[760px] space-y-8">
				<div className="space-y-4 text-base leading-8 text-black">
					<p>
						大事なお客様から数多くのご感想をいただいております。ありがとうございます。
					</p>
					<p>承諾いただいたお客様のお声を掲載させていただきます。</p>
					<p>
						今後もお気づきの点、ご意見がございましたらお気軽にご連絡ください。
					</p>
					<p className="text-sm text-[#5c4a40]">
						（※クリックすると拡大画像をご覧いただけます。）
					</p>
				</div>

				<ImageZoomGallery items={VOICE_GALLERY_ITEMS} variant="stack" />
			</div>
		</PageFrame>
	);
}
