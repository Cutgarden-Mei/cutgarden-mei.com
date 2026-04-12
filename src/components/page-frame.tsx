import { PageTitle } from "@/components/page-title";

type PageFrameProps = {
	title: string;
	children: React.ReactNode;
	className?: string;
	contentClassName?: string;
	outerClassName?: string;
	backgroundImageSrc?: string;
	backgroundOverlayClassName?: string;
	titleVariant?: "default" | "doubleRule";
};

export function PageFrame({
	title,
	children,
	className,
	contentClassName,
	outerClassName,
	backgroundImageSrc,
	backgroundOverlayClassName,
	titleVariant = "default",
}: PageFrameProps) {
	return (
		<section
			className={`relative overflow-hidden px-0 py-40 md:px-6 md:py-60 ${outerClassName ?? ""}`}
		>
			{backgroundImageSrc ? (
				<div
					className="absolute inset-0 bg-fixed bg-cover bg-center opacity-95"
					style={{ backgroundImage: `url('${backgroundImageSrc}')` }}
				/>
			) : null}
			{backgroundImageSrc ? (
				<div
					className={`absolute inset-0 my-32 md:my-50 ${backgroundOverlayClassName ?? "bg-white/72"}`}
				/>
			) : null}

			<div
				className={`relative mx-auto w-full max-w-[1056px] border-t-4 border-[#9e6e42] bg-white shadow-[0_18px_40px_rgba(38,22,15,0.2)] ${className ?? ""}`}
			>
				<PageTitle variant={titleVariant}>{title}</PageTitle>
				<div className={contentClassName ?? "px-6 py-10 md:px-14 md:py-12"}>
					{children}
				</div>
			</div>
		</section>
	);
}
