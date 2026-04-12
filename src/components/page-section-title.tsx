type PageSectionTitleProps = {
	children: React.ReactNode;
};

export function PageSectionTitle({ children }: PageSectionTitleProps) {
	return (
		<h2 className="rounded-[4px] bg-[#7a3a12] px-4 py-2 text-white text-xl">
			◆{children}
		</h2>
	);
}
