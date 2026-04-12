"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ROUTES } from "@/lib/routes";

function useLocationHash(): string {
	const [hash, setHash] = useState("");
	useEffect(() => {
		const update = () => setHash(window.location.hash);
		update();
		window.addEventListener("hashchange", update);
		return () => window.removeEventListener("hashchange", update);
	}, []);
	return hash;
}

function isNavItemActive(
	href: string,
	pathname: string,
	locationHash: string,
): boolean {
	const hashIndex = href.indexOf("#");
	const pathPart = hashIndex === -1 ? href : href.slice(0, hashIndex);
	const hrefHash = hashIndex === -1 ? "" : href.slice(hashIndex);
	const normalizedPath = pathPart === "" ? "/" : pathPart;
	if (normalizedPath !== pathname) return false;
	if (hrefHash === "") return true;
	if (hrefHash === "#top") {
		return locationHash === "#top" || locationHash === "";
	}
	return locationHash === hrefHash;
}

export type HeaderNavItem = {
	href: string;
	label: string;
	icon?: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};

export const TOP_NAV_ITEMS: HeaderNavItem[] = [
	{
		href: ROUTES.top,
		label: "ホーム",
		icon: {
			src: "/images/header/home.png",
			alt: "home",
			width: 24,
			height: 24,
		},
	},
	{ href: ROUTES.topKeratinPerm, label: "ケラチンパーマ" },
	{ href: ROUTES.topClinicStraightening, label: "クリニック縮毛矯正" },
	{ href: ROUTES.topResetCut, label: "リセットカット" },
	{ href: ROUTES.topIonTreatment, label: "イオントリートメント" },
	{ href: ROUTES.topMenu, label: "メニュー" },
];

export const SUBPAGE_NAV_ITEMS: HeaderNavItem[] = [
	{
		href: ROUTES.home,
		label: "ホーム",
		icon: {
			src: "/images/header/home.png",
			alt: "home",
			width: 24,
			height: 24,
		},
	},
	{ href: ROUTES.access, label: "アクセス" },
	{ href: ROUTES.contact, label: "お問い合わせ" },
	{ href: ROUTES.siteMap, label: "サイトマップ" },
];

export function HeaderNav() {
	const pathname = usePathname();
	const locationHash = useLocationHash();
	const isTop = pathname === "/";
	const items = isTop ? TOP_NAV_ITEMS : SUBPAGE_NAV_ITEMS;

	return (
		<ul className="mx-auto flex max-w-[1056px] flex-row items-center text-sm text-white">
			{items.map((item) => {
				const active = isNavItemActive(item.href, pathname, locationHash);
				return (
					<li key={item.label} className="w-full">
						<Link
							href={item.href}
							className={`group flex items-center justify-center gap-2 border-b-2 py-4 text-center hover:bg-header-nav-hover ${
								active
									? "border-b-[#934500] border-b-4 text-[#bbb]"
									: "border-transparent text-white"
							}`}
						>
							{item.icon ? (
								<Image
									src={item.icon.src}
									alt={item.icon.alt}
									width={item.icon.width}
									height={item.icon.height}
								/>
							) : null}
							<span className="group-hover:underline">{item.label}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
