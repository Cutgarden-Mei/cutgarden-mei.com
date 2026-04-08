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
			<div
				className={
					contentClassName ?? "space-y-4 text-base leading-8 text-black"
				}
			>
				{children}
			</div>
		</section>
	);
}
