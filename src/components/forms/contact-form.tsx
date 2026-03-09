"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "ご予約について",
  message: "",
  privacyConsent: false,
};

const fieldClassName =
  "w-full rounded-2xl border border-[#dbc8bc] bg-white/90 px-4 py-3 text-[#26160f] outline-none transition focus:border-[#73442b] focus:ring-2 focus:ring-[#73442b]/15";
const submitButtonClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-[#73442b] px-5 text-sm font-medium text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70";

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { message: string };
      if (!response.ok) throw new Error(result.message || "送信に失敗しました。");

      setStatus("success");
      setMessage(result.message);
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "送信に失敗しました。");
    }
  }

  return (
    <form className="grid gap-5 rounded-[28px] border border-[#73442b]/10 bg-white/80 p-7 shadow-[0_18px_40px_rgba(38,22,15,0.08)]" onSubmit={handleSubmit}>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#26160f]">お名前</span>
        <input required type="text" className={fieldClassName} value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#26160f]">メールアドレス</span>
        <input required type="email" className={fieldClassName} value={formData.email} onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))} />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#26160f]">電話番号</span>
        <input type="tel" className={fieldClassName} value={formData.phone} onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))} />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#26160f]">お問い合わせ種別</span>
        <select className={fieldClassName} value={formData.inquiryType} onChange={(event) => setFormData((current) => ({ ...current, inquiryType: event.target.value }))}>
          <option>ご予約について</option>
          <option>メニューについて</option>
          <option>採用について</option>
          <option>その他</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#26160f]">お問い合わせ内容</span>
        <textarea required rows={6} className={fieldClassName} value={formData.message} onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))} />
      </label>

      <label className="grid grid-cols-[auto_1fr] items-center gap-3 text-sm text-[#7e6b61]">
        <input required checked={formData.privacyConsent} type="checkbox" className="h-4 w-4 rounded border-[#dbc8bc] text-[#73442b]" onChange={(event) => setFormData((current) => ({ ...current, privacyConsent: event.target.checked }))} />
        <span>個人情報の取り扱いに同意します。</span>
      </label>

      <button className={submitButtonClassName} disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "送信中..." : "送信する"}
      </button>

      {message ? (
        <p className={`m-0 text-sm ${status === "success" ? "text-[#2b6d45]" : "text-[#b42318]"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
