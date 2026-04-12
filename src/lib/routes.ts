export const ROUTES = {
	home: "/",
	menu: "/menu",
	staff: "/staff",
	voice: "/voice",
	access: "/access",
	contact: "/contact",
	news: "/news",
	newsSearch: "/news/search",
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

/** キーワード検索結果ページの URL（`page` は 1 始まり。1 のときは省略） */
export function buildNewsSearchUrl(query: string, page = 1): string {
	const params = new URLSearchParams();
	const q = query.trim();
	if (q) params.set("q", q);
	if (page > 1) params.set("page", String(page));
	const qs = params.toString();
	return qs ? `${ROUTES.newsSearch}?${qs}` : ROUTES.newsSearch;
}
