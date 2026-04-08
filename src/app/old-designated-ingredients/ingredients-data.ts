export type DesignatedIngredientRow = {
	ingredient: string;
	purpose: string;
};

export type DesignatedIngredientBlock = {
	groupTitle: string;
	rows: DesignatedIngredientRow[];
};

export const DESIGNATED_INGREDIENT_BLOCKS: DesignatedIngredientBlock[] = [
	{
		groupTitle: "★あ行",
		rows: [
			{ ingredient: "安息香酸およびその塩類", purpose: "殺菌防腐剤" },
			{ ingredient: "イクタモール", purpose: "収れん剤" },
			{ ingredient: "イソプロピルメチルフェノール", purpose: "殺菌防腐剤" },
			{ ingredient: "ウンデシレン酸およびその塩類", purpose: "殺菌防腐剤" },
			{ ingredient: "ウンデシレン酸モノエタノールアミド", purpose: "殺菌防腐剤" },
			{ ingredient: "エデト酸およびその塩類", purpose: "金属イオン封鎖剤" },
			{ ingredient: "塩化アルキルトリメチルアンモニウム", purpose: "陽イオン界面活性剤" },
			{ ingredient: "塩化ジステアリルジメチルアンモニウム", purpose: "陽イオン界面活性剤" },
			{
				ingredient: "塩化ステアリルジメチルベンジルアンモニウム",
				purpose: "陽イオン界面活性剤",
			},
			{
				ingredient: "塩化ステアリルトリメチルアンモニウム",
				purpose: "陽イオン界面活性剤",
			},
			{ ingredient: "塩化セチルトリメチルアンモニウム", purpose: "陽イオン界面活性剤" },
			{ ingredient: "塩化セチルピリジニウム", purpose: "陽イオン界面活性剤" },
			{ ingredient: "塩化ベンザルコニウム", purpose: "殺菌防腐剤" },
			{ ingredient: "塩化ベンゼトニウム", purpose: "殺菌防腐剤" },
			{ ingredient: "塩化ラウリルトリメチルアンモニウム", purpose: "陽イオン界面活性剤" },
			{ ingredient: "塩化リゾチーム", purpose: "消炎酵素剤" },
			{
				ingredient: "塩酸アルキルジアミノエチルグリシン",
				purpose: "殺菌防腐剤",
			},
			{ ingredient: "塩酸クロルヘキシジン", purpose: "殺菌防腐剤" },
			{ ingredient: "塩酸ジフェンヒドラミン", purpose: "消炎剤" },
			{ ingredient: "オキシベンゾン", purpose: "紫外線吸収剤" },
			{ ingredient: "オルトフェニルフェノール", purpose: "殺菌防腐剤" },
		],
	},
	{
		groupTitle: "★か行",
		rows: [
			{ ingredient: "カテコール", purpose: "酸化防止剤" },
			{ ingredient: "カンタリスチンキ", purpose: "毛根刺激剤" },
			{ ingredient: "グアイアズレン", purpose: "消炎剤" },
			{
				ingredient: "グアイアズレンスルホン酸ナトリウム",
				purpose: "消炎剤",
			},
			{ ingredient: "グルコン酸クロルヘキシジン", purpose: "殺菌防腐剤" },
			{ ingredient: "クレゾール", purpose: "殺菌防腐剤" },
			{ ingredient: "クロラミンＴ", purpose: "殺菌防腐剤" },
			{ ingredient: "クロルキシレノール", purpose: "殺菌防腐剤" },
			{ ingredient: "クロルクレゾール", purpose: "殺菌防腐剤" },
			{ ingredient: "クロルフェネシン", purpose: "殺菌防腐剤" },
			{ ingredient: "クロロブタノール", purpose: "殺菌防腐剤" },
			{
				ingredient: "5-クロロ-2-メチル-4-イソチアゾリン-3-オン",
				purpose: "殺菌防腐剤",
			},
		],
	},
	{
		groupTitle: "★さ行",
		rows: [
			{ ingredient: "酢酸-dl-α-トコフェロール", purpose: "酸化防止剤" },
			{
				ingredient: "酢酸ポリオキシエチレンラノリンアルコール",
				purpose: "油分",
			},
			{ ingredient: "酢酸ラノリン", purpose: "油分" },
			{ ingredient: "酢酸ラノリンアルコール", purpose: "油分" },
			{ ingredient: "サリチル酸およびその塩類", purpose: "殺菌防腐剤" },
			{ ingredient: "サリチル酸フェニル", purpose: "紫外線吸収剤" },
			{ ingredient: "ジイソプロパノールアミン", purpose: "中和剤" },
			{ ingredient: "ジエタノールアミン", purpose: "中和剤" },
			{ ingredient: "シノキサート", purpose: "紫外線吸収剤" },
			{
				ingredient: "ジブチルヒドロキシトルエン（BHT）",
				purpose: "酸化防止剤",
			},
			{
				ingredient:
					"1,3-ジメチロール-5,5-ジメチルヒダントイン（別名DMDMヒダントイン）",
				purpose: "殺菌防腐剤",
			},
			{ ingredient: "臭化アルキルイソキノリ二ウム", purpose: "殺菌防腐剤" },
			{
				ingredient: "臭化セチルトリメチルアンモニウム",
				purpose: "陽イオン界面活性剤",
			},
			{ ingredient: "臭化ドミフェン", purpose: "殺菌防腐剤" },
			{ ingredient: "ショウキョウチンキ", purpose: "毛根刺激剤" },
			{ ingredient: "ステアリルアルコール", purpose: "油分" },
			{ ingredient: "セタノール", purpose: "油分" },
			{ ingredient: "セチル硫酸ナトリウム", purpose: "陰イオン界面活性剤" },
			{ ingredient: "セトステアリルアルコール", purpose: "油分" },
			{ ingredient: "セラック", purpose: "被膜形成剤" },
			{ ingredient: "ソルビン酸およびその塩類", purpose: "殺菌防腐剤" },
		],
	},
	{
		groupTitle: "★た行",
		rows: [
			{ ingredient: "チモール", purpose: "殺菌防腐剤" },
			{
				ingredient: "直鎖型アルキルベンゼンスルホン酸ナトリウム",
				purpose: "陰イオン界面活性剤",
			},
			{ ingredient: "チラム", purpose: "殺菌防腐剤" },
			{ ingredient: "デヒドロ酢酸およびその塩類", purpose: "殺菌防腐剤" },
			{ ingredient: "天然ゴムラテックス", purpose: "被膜剤" },
			{ ingredient: "トウガラシチンキ", purpose: "毛根刺激剤" },
			{ ingredient: "トリイソプロパノールアミン", purpose: "中和剤" },
			{ ingredient: "トリエタノールアミン", purpose: "中和剤" },
			{ ingredient: "トリクロサン", purpose: "殺菌防腐剤" },
			{ ingredient: "トリクロロカルバニリド", purpose: "殺菌防腐剤" },
		],
	},
	{
		groupTitle: "★な行",
		rows: [
			{ ingredient: "ニコチン酸ベンジル", purpose: "消炎剤" },
			{ ingredient: "ノニル酸バニリルアミド", purpose: "毛根刺激剤" },
		],
	},
	{
		groupTitle: "★は行",
		rows: [
			{ ingredient: "パラアミノ安息香酸エステル", purpose: "紫外線吸収剤" },
			{
				ingredient: "パラオキシ安息香酸エステル（パラベン）",
				purpose: "殺菌防腐剤",
			},
			{ ingredient: "パラクロルフェノール", purpose: "殺菌防腐剤" },
			{ ingredient: "パラフェノールスルホン酸亜鉛", purpose: "収れん剤" },
			{ ingredient: "ハロカルバン", purpose: "殺菌防腐剤" },
			{
				ingredient:
					"2-(2-ヒドロキシ-5-メチルフェニル)ベンゾトリアゾール",
				purpose: "紫外線吸収剤",
			},
			{ ingredient: "ピロガロール", purpose: "酸化防止剤" },
			{ ingredient: "フェノール", purpose: "殺菌防腐剤" },
			{
				ingredient: "ブチルヒドロキシアニソール（BHA）",
				purpose: "酸化防止剤",
			},
			{ ingredient: "プロピレングリコール", purpose: "保湿剤" },
			{ ingredient: "ヘキサクロロフェン", purpose: "殺菌防腐剤" },
			{ ingredient: "ベンジルアルコール", purpose: "油分" },
			{ ingredient: "没食子酸プロピル", purpose: "酸化防止剤" },
			{
				ingredient: "ポリエチレングリコール（平均分子量600以下）",
				purpose: "保湿剤",
			},
			{
				ingredient: "ポリオキシエチレンラウリルエーテル硫酸塩類",
				purpose: "陰イオン界面活性剤",
			},
			{ ingredient: "ポリオキシエチレンラノリン", purpose: "油分" },
			{ ingredient: "ポリオキシエチレンラノリンアルコール", purpose: "油分" },
			{ ingredient: "ホルモン", purpose: "特殊成分ホルモン" },
		],
	},
	{
		groupTitle: "★ま行",
		rows: [
			{ ingredient: "ミリスチン酸イソプロピル", purpose: "油分" },
			{
				ingredient: "2-メチル-4-イソチアゾリン-3-オン",
				purpose: "殺菌防腐剤",
			},
			{
				ingredient:
					"Ｎ,Ｎ“-メチレンビス\n〔N‘-（3-ヒドロ岸メチル-2,5-ジオキソ-4-\nイミダゾリジニル）ウレア〕\n（別名イミダゾリジニルウレア）",
				purpose: "殺菌防腐剤",
			},
		],
	},
	{
		groupTitle: "★ら行・その他",
		rows: [
			{ ingredient: "ラウリル硫酸塩類", purpose: "陰イオン界面活性剤" },
			{ ingredient: "ラウロイルサルコシンナトリウム", purpose: "殺菌防腐剤" },
			{ ingredient: "ラノリン", purpose: "油分" },
			{ ingredient: "液状ラノリン", purpose: "油分" },
			{ ingredient: "還元ラノリン", purpose: "油分" },
			{ ingredient: "硬質ラノリン", purpose: "油分" },
			{ ingredient: "ラノリンアルコール", purpose: "油分" },
			{ ingredient: "水素添加ラノリンアルコール", purpose: "油分" },
			{ ingredient: "ラノリン脂肪酸イソプロピル", purpose: "油分" },
			{
				ingredient: "ラノリン脂肪酸ポリエチレングリコール",
				purpose: "油分",
			},
			{ ingredient: "レゾルシン", purpose: "殺菌防腐剤" },
			{ ingredient: "ロジン", purpose: "増粘剤" },
			{
				ingredient:
					"医薬品等に使用することができる\nタール色素を定める省令\n（昭和41年厚生省令第30号）に掲げるタール色素",
				purpose: "色素",
			},
		],
	},
];
