import { CustomerVoiceGallery } from "@/components/customer-voice-gallery";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { buildPageTitle } from "@/lib/site";

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

				<CustomerVoiceGallery />
			</div>
		</PageFrame>
	);
}
