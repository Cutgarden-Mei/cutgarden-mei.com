"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/lib/routes";

type NavItem = {
	href: string;
	label: string;
	icon?: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};

const TOP_NAV_ITEMS: NavItem[] = [
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

const SUBPAGE_NAV_ITEMS: NavItem[] = [
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
	const isTop = pathname === "/";
	const items = isTop ? TOP_NAV_ITEMS : SUBPAGE_NAV_ITEMS;

	return (
		<ul className="mx-auto flex max-w-[1056px] items-center text-sm text-white">
			{items.map((item) => (
				<li key={item.label} className="w-full">
					<Link
						href={item.href}
						className="group flex items-center justify-center gap-2 py-4 text-center hover:bg-header-nav-hover"
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
			))}
		</ul>
	);
}
