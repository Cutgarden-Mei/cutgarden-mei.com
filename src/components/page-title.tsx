type PageTitleProps = {
	children: React.ReactNode;
};

export function PageTitle({ children }: PageTitleProps) {
	return (
		<h2 className="border-b border-[#c5a489] px-6 py-5 text-center text-sm font-serif font-semibold tracking-[0.25em] text-[#2f1c12] md:text-xl">
			{children}
		</h2>
	);
}
