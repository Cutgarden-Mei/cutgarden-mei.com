"use client";

import Image from "next/image";
import { useState } from "react";

import { Modal } from "@/components/modal";

const VOICE_IMAGES = [
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
] as const;

const IMAGE_SIZE = 550;

export function CustomerVoiceGallery() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const isOpen = openIndex !== null;
	const active = openIndex !== null ? VOICE_IMAGES[openIndex] : null;

	return (
		<>
			<ul className="space-y-8">
				{VOICE_IMAGES.map((item, index) => (
					<li key={item.src}>
						<button
							type="button"
							onClick={() => setOpenIndex(index)}
							className="group mx-auto block w-full max-w-[550px] cursor-zoom-in rounded-[4px] border border-[#e5ddd7] bg-white p-2 shadow-[0_8px_24px_rgba(38,22,15,0.08)] transition hover:border-[#c4a88a] hover:shadow-[0_12px_32px_rgba(38,22,15,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a3a12]"
							aria-label={`${item.alt}を拡大表示`}
						>
							<Image
								src={item.src}
								alt=""
								width={IMAGE_SIZE}
								height={IMAGE_SIZE}
								className="h-auto w-full object-contain"
								sizes="(max-width: 600px) 100vw, 550px"
							/>
						</button>
					</li>
				))}
			</ul>

			<Modal
				isOpen={isOpen}
				onClose={() => setOpenIndex(null)}
				title="拡大表示"
				maxWidthClassName="max-w-[min(92vw,760px)]"
				bodyClassName="bg-[#1a1512] p-3 md:p-5"
			>
				{active ? (
					<Image
						src={active.src}
						alt={active.alt}
						width={IMAGE_SIZE}
						height={IMAGE_SIZE}
						className="mx-auto h-auto max-h-[min(85vh,550px)] w-full object-contain"
						sizes="(max-width: 760px) 92vw, 760px"
						priority={isOpen}
					/>
				) : null}
			</Modal>
		</>
	);
}
