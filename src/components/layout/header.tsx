import Image from "next/image";
import Link from "next/link";

import { HeaderNav } from "@/components/layout/header-nav";
import { ROUTES } from "@/lib/routes";

export function Header() {
	return (
		<header className="sticky z-50 flex w-full flex-col items-center justify-between bg-header-bg">
			<div className="mx-auto flex w-full max-w-[1056px] items-center justify-between py-2">
				<Link href={ROUTES.home} className="flex flex-col gap-2">
					<Image
						src="/images/logo/logo.png"
						alt="logo"
						width={360}
						height={51}
					/>
					<p className="text-sm text-white font-serif">
						カットガーデンMeiは、大阪市平野区のアットホームな美容室です
					</p>
				</Link>
				<div className="flex flex-col gap-2">
					<Link
						href={ROUTES.contact}
						className="flex items-center gap-2 border-2 border-contact-panel-border bg-contact-panel px-2"
					>
						<Image
							src="/images/header/mail.png"
							alt="mail"
							width={64}
							height={64}
						/>
						<p className="w-full flex flex-col">
							<span>フォームから</span>
							<span className="self-end">お問い合わせ</span>
						</p>
					</Link>
					<Link
						type="tel"
						href="tel:03-1234-5678"
						className="flex items-center gap-2 border-2 border-contact-panel-border bg-contact-panel px-2"
					>
						<Image
							src="/images/header/mobile.png"
							alt="mobile"
							width={24}
							height={24}
						/>
						<p className="text-sm flex flex-col items-end">
							電話でお問い合わせ・予約
							<br />
							<span className="text-contact-accent text-lg font-bold">
								０６−６７０３−０３０７
							</span>
						</p>
					</Link>
				</div>
			</div>
			<div className="w-full bg-header-nav">
				<HeaderNav />
			</div>
		</header>
	);
}
