"use client";

import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

type AssetTarget = {
	fields?: {
		title?: string;
		description?: string;
		file?: {
			url?: string;
			contentType?: string;
			details?: { image?: { width?: number; height?: number } };
		};
	};
};

function assetUrl(raw: string): string {
	if (raw.startsWith("https://") || raw.startsWith("http://")) return raw;
	if (raw.startsWith("//")) return `https:${raw}`;
	return `https://${raw}`;
}

const bodyOptions: Options = {
	renderMark: {
		[MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
		[MARKS.ITALIC]: (text) => <em>{text}</em>,
		[MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
		[MARKS.CODE]: (text) => (
			<code className="rounded bg-[#f0ebe8] px-1.5 py-0.5 font-mono text-[0.9em] text-[#2a221c]">
				{text}
			</code>
		),
		[MARKS.STRIKETHROUGH]: (text) => <span className="line-through opacity-80">{text}</span>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (_node, children) => (
			<p className="whitespace-pre-line text-[15px] leading-[1.9] text-[#3d332d] md:text-base md:leading-8">
				{children}
			</p>
		),
		[BLOCKS.HEADING_1]: (_node, children) => (
			<h2 className="mt-8 text-xl font-bold text-[#2a221c] md:text-2xl">{children}</h2>
		),
		[BLOCKS.HEADING_2]: (_node, children) => (
			<h2 className="mt-8 text-lg font-bold text-[#2a221c] md:text-xl">{children}</h2>
		),
		[BLOCKS.HEADING_3]: (_node, children) => (
			<h3 className="mt-6 text-base font-bold text-[#2a221c] md:text-lg">{children}</h3>
		),
		[BLOCKS.HEADING_4]: (_node, children) => (
			<h4 className="mt-5 text-base font-bold text-[#3d332d]">{children}</h4>
		),
		[BLOCKS.UL_LIST]: (_node, children) => (
			<ul className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-[1.9] text-[#3d332d] md:text-base md:leading-8">
				{children}
			</ul>
		),
		[BLOCKS.OL_LIST]: (_node, children) => (
			<ol className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.9] text-[#3d332d] md:text-base md:leading-8">
				{children}
			</ol>
		),
		[BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
		[BLOCKS.QUOTE]: (_node, children) => (
			<blockquote className="my-6 border-l-4 border-[#c4a990] pl-4 text-[#5c4a40] italic">
				{children}
			</blockquote>
		),
		[BLOCKS.HR]: () => <hr className="my-8 border-[#d5c5ba]" />,
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const target = node.data.target as AssetTarget | undefined;
			const file = target?.fields?.file;
			const rawUrl = file?.url;
			if (!rawUrl) {
				return null;
			}
			const src = assetUrl(rawUrl);
			const title = target?.fields?.title ?? target?.fields?.description ?? "";
			const ct = file.contentType ?? "";
			if (!ct.startsWith("image/")) {
				return (
					<p className="my-4">
						<a
							href={src}
							className="text-top-pink underline underline-offset-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							{title || "ファイルを開く"}
						</a>
					</p>
				);
			}
			const w = file.details?.image?.width ?? 1200;
			const h = file.details?.image?.height ?? 800;
			return (
				<figure className="my-6">
					<div className="relative w-full overflow-hidden rounded border border-[#e5d8cf] bg-[#faf8f6]">
						<Image
							src={src}
							alt={title}
							width={w}
							height={h}
							className="h-auto w-full object-contain"
							sizes="(max-width: 768px) 100vw, 672px"
						/>
					</div>
				</figure>
			);
		},
	},
};

type PostRichTextBodyProps = {
	document: Document;
};

export function PostRichTextBody({ document }: PostRichTextBodyProps) {
	return (
		<div className="space-y-5 [&>p:first-child]:mt-0">{documentToReactComponents(document, bodyOptions)}</div>
	);
}
