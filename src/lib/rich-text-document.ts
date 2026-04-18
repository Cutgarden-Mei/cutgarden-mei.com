import type { Block, Document, Inline, Text } from "@contentful/rich-text-types";
import { BLOCKS, EMPTY_DOCUMENT } from "@contentful/rich-text-types";

/** モック用: 段落文字列から Contentful 互いの Rich Text Document を作る */
export function paragraphsToRichTextDocument(paragraphs: string[]): Document {
	return {
		nodeType: BLOCKS.DOCUMENT,
		data: {},
		content: paragraphs.map((text) => ({
			nodeType: BLOCKS.PARAGRAPH,
			data: {},
			content: [
				{
					nodeType: "text",
					value: text,
					marks: [],
					data: {},
				},
			],
		})),
	};
}

export function parseRichTextDocument(value: unknown): Document {
	if (!value || typeof value !== "object") return EMPTY_DOCUMENT;
	const doc = value as Document;
	if (doc.nodeType !== BLOCKS.DOCUMENT || !Array.isArray(doc.content)) {
		return EMPTY_DOCUMENT;
	}
	return doc;
}

function walkPlainText(node: Block | Inline | Text): string {
	if (node.nodeType === "text") {
		return (node as Text).value;
	}
	if ("content" in node && Array.isArray(node.content)) {
		return node.content.map(walkPlainText).join("");
	}
	return "";
}

/** 検索・抜粋用のプレーンテキスト */
export function documentToPlainText(doc: Document): string {
	return doc.content.map((block) => walkPlainText(block as Block)).join("\n").trim();
}

/** メタ用: 先頭付近のテキスト */
export function excerptFromDocument(doc: Document, maxLen = 200): string {
	const plain = documentToPlainText(doc);
	const line = plain.split(/\n/).find((l) => l.trim().length > 0)?.trim() ?? "";
	return line.length > maxLen ? `${line.slice(0, maxLen)}…` : line;
}
