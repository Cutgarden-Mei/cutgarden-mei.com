export const ROUTES = {
	home: "/",
	menu: "/menu",
	staff: "/staff",
	voice: "/voice",
	access: "/access",
	contact: "/contact",
	news: "/news",
	blog: "/blog",
	siteMap: "/site-map",
	hairBasics: "/hair-basics",
	ionTreatment: "/ion-treatment",
	keratinPerm: "/keratin-perm",
	shampooTalk: "/shampoo-talk",
	resetCut: "/reset-cut",
	oldDesignatedIngredients: "/old-designated-ingredients",
	clinicStraightening: "/clinic-straightening",
	top: "/#top",
	topMenu: "/#menu",
	topKeratinPerm: "/#keratin-perm",
	topClinicStraightening: "/#clinic-straightening",
	topResetCut: "/#reset-cut",
	topIonTreatment: "/#ion-treatment",
} as const;

export function getStaffDetailRoute(slug: string) {
	return `${ROUTES.staff}/${slug}`;
}

export function getNewsDetailRoute(slug: string) {
	return `${ROUTES.news}/${slug}`;
}

export function getArchiveMonthPath(yearMonth: string) {
	return `/archive/${yearMonth}`;
}
