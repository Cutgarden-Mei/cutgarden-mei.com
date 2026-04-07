import { PageSectionTitle } from "@/components/page-section-title";

type PageSectionProps = {
	title: string;
	children: React.ReactNode;
	className?: string;
	contentClassName?: string;
};

export function PageSection({
	title,
	children,
	className,
	contentClassName,
}: PageSectionProps) {
	return (
		<section className={className ?? "space-y-5"}>
			<PageSectionTitle>{title}</PageSectionTitle>
			<div className={contentClassName ?? "space-y-4 text-[13px] leading-8 text-[#4f392d]"}>
				{children}
			</div>
		</section>
	);
}
