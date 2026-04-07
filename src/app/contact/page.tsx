import { ContactForm } from "@/components/forms/contact-form";
import { PageFrame } from "@/components/page-frame";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
	title: "Contact | CUT GARDEN MEI",
	description: "お問い合わせページです。",
	path: "/contact",
});

export default async function ContactPage() {
	return (
		<PageFrame
			title="お問い合わせ"
			outerClassName="bg-black"
			backgroundImageSrc="/images/decoration/christmas-3.jpg"
		>
			<div className="mx-auto max-w-[768px] space-y-5 text-[13px] leading-8 text-[#4f392d]">
				<p>お問い合わせありがとうございます。</p>
				<p>
					フォームからのお問い合わせは、２４時間受け付けております。
					<br />
					下記フォームより、お気軽にお問い合わせ下さい。
				</p>
				<p>お問い合わせに関する返信は、３営業日以内に御連絡を差し上げます。</p>
			</div>

			<div className="mx-auto mt-8 max-w-[768px]">
				<ContactForm />
			</div>
		</PageFrame>
	);
}
