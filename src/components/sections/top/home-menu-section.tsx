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
		<TopSectionContainer className="py-14 md:px-0 px-[37.5px]">
			<div className="flex flex-col items-center justify-center gap-10">
				<DecoratedSectionTitle
					title="メニュー"
					iconSrc="/images/decoration/brush-red.png"
					iconAlt="menu"
				/>
				<div className="grid w-full grid-cols-2 gap-4 md:flex md:w-full md:flex-row md:justify-center">
					{MENU_IMAGES.map((image) => (
						<Link
							href={image.href}
							key={image.src}
							className="block min-w-0 w-full md:w-auto"
						>
							<Image
								src={image.src}
								alt={image.alt}
								width={170}
								height={170}
								sizes="(max-width: 767px) calc((100vw - 75px - 16px) / 2), 170px"
								className="aspect-square w-full object-cover object-center md:aspect-auto md:h-[170px] md:w-[170px]"
							/>
						</Link>
					))}
				</div>
			</div>
		</TopSectionContainer>
	);
}
