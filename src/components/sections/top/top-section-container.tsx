type TopSectionContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export function TopSectionContainer({
	children,
	className = "",
}: TopSectionContainerProps) {
	return (
		<section className={`mx-auto max-w-[1056px] ${className}`.trim()}>
			{children}
		</section>
	);
}
