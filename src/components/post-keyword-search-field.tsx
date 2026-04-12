"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { type FormEvent, useCallback, useEffect, useState } from "react";

import { buildNewsSearchUrl } from "@/lib/routes";

type PostKeywordSearchFieldProps = {
	defaultQuery?: string;
	className?: string;
	wrapperClassName?: string;
};

export function PostKeywordSearchField({
	defaultQuery = "",
	className,
	wrapperClassName = "relative h-[32px] w-full max-w-[300px]",
}: PostKeywordSearchFieldProps) {
	const router = useRouter();
	const [value, setValue] = useState(defaultQuery);

	useEffect(() => {
		setValue(defaultQuery);
	}, [defaultQuery]);

	const submit = useCallback(() => {
		const q = value.trim();
		router.push(buildNewsSearchUrl(q, 1));
	}, [value, router]);

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		submit();
	}

	return (
		<form className={className} onSubmit={onSubmit}>
			<div className={wrapperClassName}>
				<input
					type="search"
					name="q"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="キーワード検索"
					autoComplete="off"
					enterKeyHint="search"
					className="h-full w-full rounded-full border-3 border-contact-panel pr-8 pl-2"
				/>
				<button
					type="submit"
					className="absolute top-1/2 right-1 mr-1 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer"
					aria-label="検索"
				>
					<Image
						src="/images/decoration/search.png"
						alt=""
						width={18}
						height={18}
						className="h-5 w-5"
					/>
				</button>
			</div>
		</form>
	);
}
