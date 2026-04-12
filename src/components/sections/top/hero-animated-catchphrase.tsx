"use client";

const LINE_FIRST = "あなたの髪の悩み";
const LINE_SECOND = "おまかせください！";

const CHAR_DELAY_MS = 110;
const CHAR_DURATION_S = 0.72;

export function HeroAnimatedCatchphrase() {
	let delayIndex = 0;

	return (
		<p className="absolute top-0 bottom-0 left-0 z-10 m-auto h-fit font-serif text-[22px] leading-loose font-bold text-black ml-2 md:ml-0 md:text-6xl">
			{Array.from(LINE_FIRST).map((char) => {
				const i = delayIndex++;
				return (
					<span
						key={`f-${i}`}
						className="hero-char inline-block opacity-0"
						style={{
							animation: `hero-char-reveal ${CHAR_DURATION_S}s ease forwards`,
							animationDelay: `${i * CHAR_DELAY_MS}ms`,
						}}
					>
						{char}
					</span>
				);
			})}
			<br />
			<span className="ml-10 inline-block">
				{Array.from(LINE_SECOND).map((char) => {
					const i = delayIndex++;
					return (
						<span
							key={`s-${i}`}
							className="hero-char inline-block opacity-0"
							style={{
								animation: `hero-char-reveal ${CHAR_DURATION_S}s ease forwards`,
								animationDelay: `${i * CHAR_DELAY_MS}ms`,
							}}
						>
							{char}
						</span>
					);
				})}
			</span>
		</p>
	);
}
