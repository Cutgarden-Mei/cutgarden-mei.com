import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto w-full max-w-[1120px]">
        <p className="font-serif text-xs uppercase tracking-[0.18em] text-[#73442b]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#26160f] md:text-5xl">ページが見つかりませんでした</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#7e6b61]">URLをご確認いただくか、トップページからお探しください。</p>
        <Link className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#73442b] px-5 text-sm font-medium text-white transition hover:-translate-y-0.5" href="/">ホームへ戻る</Link>
      </div>
    </section>
  );
}
