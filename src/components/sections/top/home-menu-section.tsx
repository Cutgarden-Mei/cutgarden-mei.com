import Image from "next/image";
import { DecoratedSectionTitle } from "@/components/sections/decorated-section-title";
import { TopSectionContainer } from "@/components/sections/top/top-section-container";
import Link from "next/link";

const MENU_IMAGES = [
	{ src: "/images/top/menu.jpg", alt: "menu", href: "/menu" },
	{ src: "/images/top/access.jpg", alt: "access", href: "/access" },
	{ src: "/images/top/voice.jpg", alt: "voice", href: "/voice" },
	{ src: "/images/top/staff.jpg", alt: "staff", href: "/staff" },
];

export function HomeMenuSection() {
	return (
		<TopSectionContainer className="py-14">
			<div className="flex flex-col items-center justify-center gap-10">
				<DecoratedSectionTitle
					title="メニュー"
					iconSrc="/images/decoration/brush-red.png"
					iconAlt="menu"
				/>
				<div className="flex gap-4">
					{MENU_IMAGES.map((image) => (
						<Link href={image.href} key={image.src}>
							<Image
								src={image.src}
								alt={image.alt}
								width={170}
								height={170}
								className="object-cover object-center"
							/>
						</Link>
					))}
				</div>
			</div>
		</TopSectionContainer>
	);
}
