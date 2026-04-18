import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollToTopButton } from "@/components/layout/scroll-to-top-button";
import { QueryProvider } from "@/components/providers/query-provider";
import { getSiteSettings } from "@/lib/contentful";

import "./globals.css";

const notoSerif = Noto_Serif_JP({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
	variable: "--font-serif-jp",
});

export async function generateMetadata(): Promise<Metadata> {
	const settings = await getSiteSettings();
	return {
		title: settings.seo.title,
		description: settings.seo.description,
		keywords: settings.seo.keywords,
	};
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ja">
			<body className={`${notoSerif.variable} font-sans bg-white`}>
				<QueryProvider>
					<Header />
					<main className="bg-white">{children}</main>
					<Footer />
					<ScrollToTopButton />
				</QueryProvider>
			</body>
		</html>
	);
}
