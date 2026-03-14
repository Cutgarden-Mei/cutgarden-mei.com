import Link from "next/link";

type TopSectionLinkProps = {
	href: string;
	children: React.ReactNode;
};

export function TopSectionLink({ href, children }: TopSectionLinkProps) {
	return (
		<Link href={href} className="bg-top-brown px-4 py-2 text-2xl text-white">
			{children}
		</Link>
	);
}
