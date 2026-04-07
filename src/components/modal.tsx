"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	description?: string;
	footer?: React.ReactNode;
	closeOnBackdropClick?: boolean;
	maxWidthClassName?: string;
	bodyClassName?: string;
};

export function Modal({
	isOpen,
	onClose,
	children,
	title,
	description,
	footer,
	closeOnBackdropClick = true,
	maxWidthClassName = "max-w-[640px]",
	bodyClassName,
}: ModalProps) {
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen || typeof document === "undefined") return null;

	return createPortal(
		<div
			className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 py-8"
			role="dialog"
			aria-modal="true"
			aria-label={title}
			onClick={() => {
				if (closeOnBackdropClick) onClose();
			}}
		>
			<div
				className={`relative w-full ${maxWidthClassName} overflow-hidden rounded-[14px] border border-white/15 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.45)]`}
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#6f5646] transition hover:bg-white"
					aria-label="閉じる"
				>
					<X className="h-4 w-4" aria-hidden="true" />
				</button>

				{title || description ? (
					<div className="border-b border-[#e5ddd7] px-6 py-5">
						{title ? (
							<h2 className="text-lg font-semibold text-ink md:text-xl">{title}</h2>
						) : null}
						{description ? (
							<p className="mt-2 text-sm leading-7 text-[#6f5646]">{description}</p>
						) : null}
					</div>
				) : null}

				<div className={bodyClassName ?? "bg-white px-6 py-6"}>{children}</div>

				{footer ? (
					<div className="border-t border-[#e5ddd7] bg-[#fbf8f5] px-6 py-4">
						{footer}
					</div>
				) : null}
			</div>
		</div>,
		document.body,
	);
}
