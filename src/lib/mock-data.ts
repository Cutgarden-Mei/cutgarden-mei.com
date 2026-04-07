import type {
  AccessInfo,
  ContactSettings,
  HomePageData,
  MenuCategory,
  NewsPost,
  SiteSettings,
  StaffMember,
  Voice,
} from "@/lib/types";

export const siteSettings: SiteSettings = {
  siteName: "CUT GARDEN MEI",
  siteDescription: "髪も気持ちも整う、街のプライベートサロン。",
  phoneNumber: "03-1234-5678",
  reservationUrl: "https://example.com/reserve",
  address: "東京都渋谷区〇〇 1-2-3",
  businessHours: "9:00 - 19:00",
  holiday: "毎週火曜・第3水曜",
  instagramUrl: "https://www.instagram.com/",
  seo: {
    title: "CUT GARDEN MEI | 渋谷のプライベートサロン",
    description:
      "WordPressサイトを置き換える前提で設計した、CUT GARDEN MEI のヘッドレスCMS版サイトです。",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Staff", href: "/staff" },
    { label: "Voice", href: "/voice" },
    { label: "Access", href: "/access" },
    { label: "Contact", href: "/contact" },
  ],
};

export const homePage: HomePageData = {
  hero: {
    eyebrow: "Private Salon",
    title: "今の空気感を残したまま、更新しやすいサイトへ。",
    description:
      "デザインの印象はそのままに、WordPressから Next.js と Contentful ベースの運用へ置き換えるための実装土台です。",
    image: "/images/mei_top_02.jpg",
  },
  conceptTitle: "Concept",
  conceptBody: [
    "やわらかい世界観と落ち着いたトーンを維持しながら、更新しやすさと表示速度を両立させる構成を目指しています。",
    "固定ページは構造化し、一覧ページはContentfulで管理することで、日常運用の負荷を下げます。",
  ],
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "cut",
    name: "Cut",
    description: "再現性を重視したベーシックメニュー。",
    items: [
      { name: "デザインカット", price: "¥5,500", duration: "60 min", description: "骨格と髪質に合わせて、扱いやすいスタイルへ整えます。" },
      { name: "前髪カット", price: "¥1,100", duration: "15 min", description: "少しの変化で印象を整えるメンテナンスメニュー。" },
    ],
  },
  {
    slug: "color",
    name: "Color",
    description: "透明感と艶感を意識したカラー提案。",
    items: [
      { name: "カラー", price: "¥7,700", duration: "90 min", description: "ライフスタイルに合わせて色持ちの良いカラーを提案します。" },
      { name: "リタッチカラー", price: "¥6,600", duration: "75 min", description: "根元のみを整えたい方向けのメニューです。" },
    ],
  },
  {
    slug: "treatment",
    name: "Treatment",
    description: "ダメージケアと質感改善のための集中ケア。",
    items: [
      { name: "トリートメント", price: "¥4,400", duration: "30 min", description: "髪の状態に応じたケアで、まとまりやすさを高めます。" },
    ],
  },
];

export const staffMembers: StaffMember[] = [
  {
    slug: "mei",
    name: "Mei",
    role: "Owner Stylist",
    bio: [
      "お客様一人ひとりの空気感を大切にしながら、無理のない似合わせを提案します。",
      "ナチュラルなボブや、やわらかいレイヤースタイルが得意です。",
    ],
    specialties: ["ナチュラルボブ", "透明感カラー", "顔まわりデザイン"],
    image: "/images/staff.jpg",
    instagramUrl: "https://www.instagram.com/",
  },
  {
    slug: "assistant-yui",
    name: "Yui",
    role: "Assistant",
    bio: [
      "居心地のよい時間を過ごしていただけるよう、丁寧な接客を心がけています。",
      "ヘッドスパやケアメニューのご相談もお任せください。",
    ],
    specialties: ["ヘッドスパ", "ホームケア提案"],
    image: "/images/default-image.jpg",
  },
];

export const voices: Voice[] = [
  {
    customerName: "Aさま",
    menuLabel: "カット + カラー",
    comment: "雰囲気を大きく変えずに、今っぽい軽さを出してもらえました。お店も落ち着いていて通いやすいです。",
    staffSlug: "mei",
  },
  {
    customerName: "Mさま",
    menuLabel: "カット + トリートメント",
    comment: "相談しながら進めてくれるので安心感があり、毎回ちょうど良い仕上がりになります。",
    staffSlug: "mei",
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "site-renewal-preparation",
    title: "サイトリニューアル準備のお知らせ",
    excerpt: "現サイトの世界観を残しながら、更新しやすい構成へ置き換える準備を進めています。",
    body: [
      "現在、WordPressで運用しているサイトを Next.js + Contentful 構成へ移行する準備を進めています。",
      "公開後は、メニューやスタッフ情報の更新をよりスムーズに行える予定です。",
    ],
    category: "お知らせ",
    publishedAt: "2026-03-09",
    image: "/images/default-image.jpg",
    type: "news",
  },
  {
    slug: "spring-color-campaign",
    title: "春カラーのご相談受付中",
    excerpt: "透明感を意識した春のカラーメニューを提案しています。",
    body: [
      "明るさを抑えつつもやわらかく見えるカラー提案を強化しています。",
      "髪の状態やライフスタイルに合わせた色味をご案内します。",
    ],
    category: "キャンペーン",
    publishedAt: "2026-03-01",
    image: "/images/default-image.jpg",
    type: "news",
  },
];

export const accessInfo: AccessInfo = {
  storeName: "CUT GARDEN MEI",
  postalCode: "150-0000",
  address: "東京都渋谷区〇〇 1-2-3 2F",
  phoneNumber: "03-1234-5678",
  businessHours: "9:00 - 19:00",
  holiday: "毎週火曜・第3水曜",
  parking: "近隣コインパーキングをご利用ください。",
  mapEmbedUrl: "https://www.google.com/maps",
  directions: [
    "JR渋谷駅から徒歩5分。宮益坂方面へ進み、〇〇ビル2Fです。",
    "初めての方はお電話いただければ道順をご案内します。",
  ],
};

export const contactSettings: ContactSettings = {
  toEmail: "salon@example.com",
  fromEmail: "no-reply@example.com",
  thanksMessage: "お問い合わせありがとうございます。通常2営業日以内にご返信します。",
  privacyPolicyUrl: "/privacy-policy",
  autoReplySubject: "お問い合わせありがとうございます | CUT GARDEN MEI",
  autoReplyBody: "このたびはお問い合わせいただきありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。",
};
