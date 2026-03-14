import Image from "next/image";

type DecoratedTextRowProps = {
	text: string;
	iconSrc: string;
	iconAlt: string;
	className?: string;
	textClassName?: string;
};

export function DecoratedTextRow({
	text,
	iconSrc,
	iconAlt,
	className = "",
	textClassName = "",
}: DecoratedTextRowProps) {
	return (
		<div className={`flex items-center gap-2 ${className}`.trim()}>
			<Image src={iconSrc} alt={iconAlt} width={18} height={18} />
			<span className={textClassName}>{text}</span>
		</div>
	);
}
