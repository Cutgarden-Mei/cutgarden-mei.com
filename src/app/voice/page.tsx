import { getVoices } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
	title: "Voice | CUT GARDEN MEI",
	description: "お客様の声一覧ページです。",
	path: "/voice",
});
export const revalidate = 60;

export default async function VoicePage() {
	const voices = await getVoices();

	return (
		<>
			<section className="px-4 py-20 md:px-6">
				<div className="mx-auto grid w-full max-w-[1120px] gap-4 md:grid-cols-2">
					{voices.map((voice) => (
						<article
							key={`${voice.customerName}-${voice.menuLabel}`}
							className="rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]"
						>
							<p className="font-serif text-xs uppercase tracking-[0.18em] text-[#73442b]">
								{voice.menuLabel}
							</p>
							<h2 className="mt-3 text-2xl font-semibold text-[#26160f]">
								{voice.customerName}
							</h2>
							<p className="mt-4 text-base leading-8 text-[#7e6b61]">
								{voice.comment}
							</p>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
