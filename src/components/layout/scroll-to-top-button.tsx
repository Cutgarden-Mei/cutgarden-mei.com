"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SCROLL_SHOW_PX = 200;

export function ScrollToTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > SCROLL_SHOW_PX);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			type="button"
			onClick={scrollToTop}
			aria-label="ページの上へ"
			className={`fixed bottom-5 right-4 z-60 flex flex-col items-center justify-center gap-1.5 rounded-md border border-[#d8d4d0] bg-white px-2 py-2.5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-[opacity,visibility] duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-top-brown md:bottom-8 md:right-6  cursor-pointer ${
				visible
					? "pointer-events-auto opacity-100"
					: "pointer-events-none invisible opacity-0"
			}`}
		>
			<Image
				src="/images/decoration/circle-up.png"
				alt=""
				width={24}
				height={24}
				className="h-10 w-10 shrink-0"
				aria-hidden
			/>
			<span className="text-xs leading-tight font-medium text-[#4a4540]">
				ページの上へ
			</span>
		</button>
	);
}
