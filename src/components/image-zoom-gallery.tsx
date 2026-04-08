"use client";

import Image from "next/image";
import { useState } from "react";

import { Modal } from "@/components/modal";

export type ImageZoomGalleryItem = {
	src: string;
	alt: string;
	/** false のときクリックで拡大しない（サムネのみ） */
	zoomable?: boolean;
};

export type ImageZoomGalleryProps = {
	items: ImageZoomGalleryItem[];
	/** stack: 縦並び（一覧） / inline: 横並び */
	variant?: "stack" | "inline";
	/** サムネイル一覧のラッパー（ul） */
	listClassName?: string;
	/** variant stack 時の拡大ボタン用クラス */
	stackThumbnailButtonClassName?: string;
	/** variant inline 時の各サムネラッパー（寸法・トリミング） */
	inlineThumbnailClassName?: string;
	modalTitle?: string;
	maxWidthClassName?: string;
	bodyClassName?: string;
	/** モーダル内の画像ラッパー（任意） */
	modalInnerClassName?: string;
	modalImageWidth?: number;
	modalImageHeight?: number;
	modalImageClassName?: string;
	modalImageSizes?: string;
	/** stack 時サムネの next/image 寸法 */
	stackImageWidth?: number;
	stackImageHeight?: number;
	thumbnailSizes?: string;
};

const DEFAULT_STACK_LIST = "space-y-8";
const DEFAULT_STACK_FRAME =
	"mx-auto block w-full max-w-[550px] rounded-[4px] border border-[#e5ddd7] bg-white p-2 shadow-[0_8px_24px_rgba(38,22,15,0.08)]";
const DEFAULT_STACK_BUTTON = `${DEFAULT_STACK_FRAME} group cursor-zoom-in transition hover:border-[#c4a88a] hover:shadow-[0_12px_32px_rgba(38,22,15,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a3a12]`;
const DEFAULT_INLINE_THUMB = "relative h-[330px] w-[350px]";
const DEFAULT_MODAL_MAX = "max-w-[min(92vw,760px)]";
const DEFAULT_MODAL_BODY = "bg-[#1a1512] p-3 md:p-5";
const DEFAULT_MODAL_IMAGE_CLASS =
	"mx-auto h-auto max-h-[min(85vh,550px)] w-full object-contain";
const DEFAULT_STACK_W = 550;
const DEFAULT_STACK_H = 550;

export function ImageZoomGallery({
	items,
	variant = "stack",
	listClassName,
	stackThumbnailButtonClassName = DEFAULT_STACK_BUTTON,
	inlineThumbnailClassName = DEFAULT_INLINE_THUMB,
	modalTitle = "",
	maxWidthClassName = DEFAULT_MODAL_MAX,
	bodyClassName = DEFAULT_MODAL_BODY,
	modalInnerClassName,
	modalImageWidth = DEFAULT_STACK_W,
	modalImageHeight = DEFAULT_STACK_H,
	modalImageClassName = DEFAULT_MODAL_IMAGE_CLASS,
	modalImageSizes = "(max-width: 760px) 92vw, 760px",
	stackImageWidth = DEFAULT_STACK_W,
	stackImageHeight = DEFAULT_STACK_H,
	thumbnailSizes = "(max-width: 600px) 100vw, 550px",
}: ImageZoomGalleryProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const isOpen = openIndex !== null;
	const active =
		openIndex !== null && items[openIndex] ? items[openIndex] : null;

	const resolvedListClassName =
		listClassName ??
		(variant === "inline"
			? "flex list-none flex-wrap justify-center gap-4"
			: DEFAULT_STACK_LIST);

	return (
		<>
			<ul className={resolvedListClassName}>
				{items.map((item, index) => {
					const zoomable = item.zoomable !== false;
					const key = `${item.src}-${index}`;

					if (variant === "inline") {
						const thumb = (
							<Image
								src={item.src}
								alt=""
								fill
								className={
									zoomable
										? "object-cover object-center transition hover:scale-[1.02]"
										: "object-cover object-center"
								}
								sizes="(max-width: 400px) 100vw, 350px"
							/>
						);

						return (
							<li key={key}>
								{zoomable ? (
									<button
										type="button"
										onClick={() => setOpenIndex(index)}
										className={`${inlineThumbnailClassName} cursor-pointer overflow-hidden`}
										aria-label={`${item.alt}を拡大表示`}
									>
										{thumb}
									</button>
								) : (
									<div
										className={`${inlineThumbnailClassName} overflow-hidden`}
									>
										{thumb}
									</div>
								)}
							</li>
						);
					}

					return (
						<li key={key}>
							{zoomable ? (
								<button
									type="button"
									onClick={() => setOpenIndex(index)}
									className={stackThumbnailButtonClassName}
									aria-label={`${item.alt}を拡大表示`}
								>
									<Image
										src={item.src}
										alt=""
										width={stackImageWidth}
										height={stackImageHeight}
										className="h-auto w-full object-contain"
										sizes={thumbnailSizes}
									/>
								</button>
							) : (
								<div className={DEFAULT_STACK_FRAME}>
									<Image
										src={item.src}
										alt=""
										width={stackImageWidth}
										height={stackImageHeight}
										className="h-auto w-full object-contain"
										sizes={thumbnailSizes}
									/>
								</div>
							)}
						</li>
					);
				})}
			</ul>

			<Modal
				isOpen={isOpen}
				onClose={() => setOpenIndex(null)}
				title={modalTitle}
				maxWidthClassName={maxWidthClassName}
				bodyClassName={bodyClassName}
			>
				{active ? (
					modalInnerClassName ? (
						<div className={modalInnerClassName}>
							<Image
								src={active.src}
								alt={active.alt}
								width={modalImageWidth}
								height={modalImageHeight}
								className={modalImageClassName}
								sizes={modalImageSizes}
								priority={isOpen}
							/>
						</div>
					) : (
						<Image
							src={active.src}
							alt={active.alt}
							width={modalImageWidth}
							height={modalImageHeight}
							className={modalImageClassName}
							sizes={modalImageSizes}
							priority={isOpen}
						/>
					)
				) : null}
			</Modal>
		</>
	);
}
