import Image from "next/image";
import Link from "next/link";

import { HeaderMobile } from "@/components/layout/header-mobile";
import { HeaderNav } from "@/components/layout/header-nav";
import { ROUTES } from "@/lib/routes";

export function Header() {
	return (
		<header className="sticky z-50 flex w-full flex-col bg-header-bg">
			<div className="mx-auto hidden w-full max-w-[1056px] items-center justify-between gap-4 py-2 lg:flex">
				<Link href={ROUTES.home} className="flex min-w-0 flex-col gap-2">
					<Image
						src="/images/logo/logo.png"
						alt="CUT GARDEN Mei"
						width={360}
						height={51}
					/>
					<p className="text-sm text-white font-serif">
						カットガーデンMeiは、大阪市平野区のアットホームな美容室です
					</p>
				</Link>
				<div className="flex shrink-0 flex-col gap-2">
					<Link
						href={ROUTES.contact}
						className="flex items-center gap-2 border-2 border-contact-panel-border bg-contact-panel px-2"
					>
						<Image
							src="/images/header/mail.png"
							alt=""
							width={64}
							height={64}
							aria-hidden
						/>
						<p className="flex w-full flex-col">
							<span>フォームから</span>
							<span className="self-end">お問い合わせ</span>
						</p>
					</Link>
					<a
						href="tel:0667030307"
						className="flex items-center gap-2 border-2 border-contact-panel-border bg-contact-panel px-2"
					>
						<Image
							src="/images/header/mobile.png"
							alt=""
							width={24}
							height={24}
							aria-hidden
						/>
						<p className="flex flex-col items-end text-sm">
							電話でお問い合わせ・予約
							<br />
							<span className="text-contact-accent text-lg font-bold">
								０６−６７０３−０３０７
							</span>
						</p>
					</a>
				</div>
			</div>
			<div className="hidden w-full bg-header-nav lg:block">
				<HeaderNav />
			</div>

			<div className="lg:hidden">
				<HeaderMobile />
			</div>
		</header>
	);
}
