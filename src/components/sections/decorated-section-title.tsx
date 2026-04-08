import Image from "next/image";

type DecoratedSectionTitleProps = {
	title: string;
	iconSrc: string;
	iconAlt: string;
};

export function DecoratedSectionTitle({
	title,
	iconSrc,
	iconAlt,
}: DecoratedSectionTitleProps) {
	return (
		<h2 className="flex gap-1 text-center md:text-[28px] text-[22px] font-bold font-serif">
			<Image src={iconSrc} alt={iconAlt} width={28} height={28} />
			{title}
		</h2>
	);
}
