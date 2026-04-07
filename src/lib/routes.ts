export const ROUTES = {
	home: "/",
	menu: "/menu",
	staff: "/staff",
	voice: "/voice",
	access: "/access",
	contact: "/contact",
	news: "/news",
	siteMap: "/site-map",
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
