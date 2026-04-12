type PageTitleProps = {
	children: React.ReactNode;
	/** 上下に茶色のライン（検索結果ページなど） */
	variant?: "default" | "doubleRule";
};

export function PageTitle({
	children,
	variant = "default",
}: PageTitleProps) {
	if (variant === "doubleRule") {
		return (
			<h2 className="border-t border-b border-[#9e6e42] px-6 py-5 text-center font-serif font-semibold tracking-[0.25em] text-[#2f1c12] text-xl">
				{children}
			</h2>
		);
	}

	return (
		<h2 className="border-b border-[#c5a489] px-6 py-5 text-center font-serif font-semibold tracking-[0.25em] text-[#2f1c12] text-xl">
			{children}
		</h2>
	);
}
