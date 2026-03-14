import Image from "next/image";

export function SectionDivider() {
	return (
		<div className="bg-top-brown flex h-16 w-full items-center justify-center overflow-hidden">
			<div className="relative h-full w-full max-w-[240px]">
				<Image
					src="/images/decoration/accent.png"
					alt=""
					fill
					className="object-contain object-center"
					sizes="240px"
				/>
			</div>
		</div>
	);
}
