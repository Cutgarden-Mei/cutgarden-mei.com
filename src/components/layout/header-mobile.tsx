"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
	SUBPAGE_NAV_ITEMS,
	TOP_NAV_ITEMS,
	type HeaderNavItem,
} from "@/components/layout/header-nav";
import { ROUTES } from "@/lib/routes";

const MENU_ICON_SRC = "/images/decoration/sp-menu-w.png";
const MENU_ICON_SIZE = 40;

function MobileNavLink({
	item,
	onNavigate,
}: {
	item: HeaderNavItem;
	onNavigate: () => void;
}) {
	return (
		<Link
			href={item.href}
			onClick={onNavigate}
			className="flex items-center justify-center gap-2 py-3.5 text-center text-sm text-white transition hover:bg-white/10"
		>
			{item.icon ? (
				<Image
					src={item.icon.src}
					alt=""
					width={item.icon.width}
					height={item.icon.height}
					className="shrink-0"
					aria-hidden
				/>
			) : null}
			<span>{item.label}</span>
		</Link>
	);
}

export function HeaderMobile() {
	const pathname = usePathname();
	return <HeaderMobileInner key={pathname} pathname={pathname} />;
}

function HeaderMobileInner({ pathname }: { pathname: string }) {
	const isTop = pathname === "/";
	const items = isTop ? TOP_NAV_ITEMS : SUBPAGE_NAV_ITEMS;
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="flex w-full flex-col">
			<div className="px-3 pt-3 pb-2">
				<div className="flex items-start justify-between gap-3">
					<Link href={ROUTES.home} className="min-w-0 flex-1">
						<Image
							src="/images/logo/logo.png"
							alt="CUT GARDEN Mei"
							width={360}
							height={51}
							className="h-auto w-full max-w-[260px]"
						/>
					</Link>
					<button
						type="button"
						onClick={() => setMenuOpen((o) => !o)}
						className="shrink-0 rounded p-1.5 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						aria-expanded={menuOpen}
						aria-controls="primary-mobile-navigation"
						aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
					>
						<Image
							src={MENU_ICON_SRC}
							alt=""
							width={MENU_ICON_SIZE}
							height={MENU_ICON_SIZE}
							className="h-9 w-9 object-contain"
							aria-hidden
						/>
					</button>
				</div>
				<p className="mt-2 pb-3 text-left text-xs leading-relaxed text-white font-serif">
					カットガーデンMeiは、大阪市平野区のアットホームな美容室です
				</p>
			</div>

			<nav
				id="primary-mobile-navigation"
				aria-label="サイト内メニュー・お問い合わせ"
				aria-hidden={!menuOpen}
				className={`grid border-t border-white/20 bg-[#666666] transition-[grid-template-rows] duration-200 ease-out ${
					menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
				inert={!menuOpen}
			>
				<div className="max-h-[min(85dvh,560px)] min-h-0 overflow-y-auto overflow-x-hidden">
					<div className="flex flex-col gap-2 border-b border-dotted border-white/90 px-16 py-3">
						<Link
							href={ROUTES.contact}
							onClick={() => setMenuOpen(false)}
							className="flex items-center gap-3 rounded-md border-2 border-contact-panel-border bg-contact-panel px-3 py-2.5"
						>
							<Image
								src="/images/header/mail.png"
								alt=""
								width={48}
								height={48}
								className="h-12 w-12 shrink-0 object-contain"
								aria-hidden
							/>
							<p className="flex flex-1 flex-col text-sm text-black">
								<span>フォームから</span>
								<span className="self-end">お問い合わせ</span>
							</p>
						</Link>
						<a
							href="tel:0667030307"
							onClick={() => setMenuOpen(false)}
							className="flex items-center gap-3 rounded-md border-2 border-contact-panel-border bg-contact-panel px-3 py-2.5"
						>
							<Image
								src="/images/header/mobile.png"
								alt=""
								width={24}
								height={24}
								className="h-6 w-6 shrink-0 object-contain"
								aria-hidden
							/>
							<p className="flex flex-1 flex-col items-end text-sm text-black">
								<span>電話でお問い合わせ・予約</span>
								<span className="text-contact-accent text-base font-bold tabular-nums">
									０６−６７０３−０３０７
								</span>
							</p>
						</a>
					</div>
					<ul className="flex flex-col">
						{items.map((item) => (
							<li
								key={item.label}
								className="border-b border-dotted border-white/90 last:border-b-0"
							>
								<MobileNavLink
									item={item}
									onNavigate={() => setMenuOpen(false)}
								/>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
}
