export const SITE_TITLE = "カットガーデンMei";

export const SITE_DESCRIPTION =
	"あなたの髪の悩み、おまかせください！カットガーデンMeiは、大阪市平野区のアットホームな美容室です。ケラチンパーマ・クリニック縮毛矯正・リセットカット・イオントリートメント‥等、新しい技術に、日々研究を重ねています。";

export const SITE_KEYWORDS = [
	"大阪市平野区",
	"美容室",
	"ケラチンパーマ",
	"クリニック縮毛矯正",
	"リセットカット",
	"イオントリートメント",
] as const;

export function buildPageTitle(pageTitle?: string) {
	if (!pageTitle || pageTitle === SITE_TITLE) return SITE_TITLE;
	return `${pageTitle} | ${SITE_TITLE}`;
}
