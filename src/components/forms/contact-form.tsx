"use client";

import { useState } from "react";
import { z } from "zod";

const initialState = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const requiredFieldMessage = "必須項目に記入もれがあります。";
const invalidFormMessage =
	"入力内容に不備があります。確認してもう一度送信してください。";

const contactFormSchema = z.object({
	name: z.string().trim().min(1, requiredFieldMessage),
	email: z
		.string()
		.trim()
		.min(1, requiredFieldMessage)
		.email("メールアドレスの形式が不正です。"),
	subject: z.string(),
	message: z.string(),
});

type ContactFormData = typeof initialState;
type ContactFormField = keyof ContactFormData;
type ContactFormErrors = Partial<Record<ContactFormField, string>>;

const fieldClassName =
	"h-9 w-full border border-contact-field-border bg-white px-3 text-[13px] text-ink outline-none transition focus:border-contact-focus focus:ring-2 focus:ring-contact-focus/15";
const submitButtonClassName =
	"inline-flex min-h-8 items-center justify-center rounded-[4px] bg-contact-submit px-4 text-xs font-medium text-white transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70";

function getFieldErrors(formData: ContactFormData): ContactFormErrors {
	const result = contactFormSchema.safeParse(formData);
	if (result.success) return {};

	return result.error.issues.reduce<ContactFormErrors>((errors, issue) => {
		const field = issue.path[0];
		if (typeof field === "string" && !(field in errors)) {
			errors[field as ContactFormField] = issue.message;
		}
		return errors;
	}, {});
}

export function ContactForm() {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [message, setMessage] = useState("");

	function updateField<K extends ContactFormField>(
		field: K,
		value: ContactFormData[K],
	) {
		setFormData((current) => ({ ...current, [field]: value }));
		setErrors((current) => {
			if (!current[field]) return current;
			const next = { ...current };
			delete next[field];
			return next;
		});
	}

	function handleBlur() {
		setErrors(getFieldErrors(formData));
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setMessage("");
		const nextErrors = getFieldErrors(formData);
		setErrors(nextErrors);

		if (Object.keys(nextErrors).length > 0) {
			setStatus("error");
			setMessage(invalidFormMessage);
			return;
		}

		setStatus("submitting");

		try {
			const payload = {
				name: formData.name.trim(),
				email: formData.email.trim(),
				subject: formData.subject.trim(),
				message: formData.message.trim(),
			};
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const result = (await response.json()) as { message: string };
			if (!response.ok)
				throw new Error(result.message || "送信に失敗しました。");

			setStatus("success");
			setMessage(result.message);
			setFormData(initialState);
		} catch (error) {
			setStatus("error");
			setMessage(error instanceof Error ? error.message : invalidFormMessage);
		}
	}

	return (
		<form
			noValidate
			className="grid gap-5 text-[13px] text-ink"
			onSubmit={handleSubmit}
		>
			<label className="grid gap-2">
				<span>お名前 (必須)</span>
				<input
					required
					type="text"
					className={`${fieldClassName} ${errors.name ? "border-contact-error focus:border-contact-error focus:ring-contact-error/15" : ""}`}
					value={formData.name}
					onChange={(event) => updateField("name", event.target.value)}
					onBlur={handleBlur}
					aria-invalid={Boolean(errors.name)}
					aria-describedby={errors.name ? "contact-name-error" : undefined}
				/>
				{errors.name ? (
					<span
						id="contact-name-error"
						className="text-xs leading-5 text-contact-error"
					>
						{errors.name}
					</span>
				) : null}
			</label>

			<label className="grid gap-2">
				<span>メールアドレス (必須)</span>
				<input
					required
					type="email"
					className={`${fieldClassName} ${errors.email ? "border-contact-error focus:border-contact-error focus:ring-contact-error/15" : ""}`}
					value={formData.email}
					onChange={(event) => updateField("email", event.target.value)}
					onBlur={handleBlur}
					aria-invalid={Boolean(errors.email)}
					aria-describedby={errors.email ? "contact-email-error" : undefined}
				/>
				{errors.email ? (
					<span
						id="contact-email-error"
						className="text-xs leading-5 text-contact-error"
					>
						{errors.email}
					</span>
				) : null}
			</label>

			<label className="grid gap-2">
				<span>題名</span>
				<input
					type="text"
					className={`${fieldClassName} ${errors.subject ? "border-contact-error focus:border-contact-error focus:ring-contact-error/15" : ""}`}
					value={formData.subject}
					onChange={(event) => updateField("subject", event.target.value)}
					onBlur={handleBlur}
					aria-invalid={Boolean(errors.subject)}
					aria-describedby={
						errors.subject ? "contact-subject-error" : undefined
					}
				/>
				{errors.subject ? (
					<span
						id="contact-subject-error"
						className="text-xs leading-5 text-contact-error"
					>
						{errors.subject}
					</span>
				) : null}
			</label>

			<label className="grid gap-2">
				<span>メッセージ本文</span>
				<textarea
					rows={6}
					className={`min-h-[96px] w-full resize-y border bg-white px-3 py-2 text-[13px] text-ink outline-none transition focus:ring-2 ${
						errors.message
							? "border-contact-error focus:border-contact-error focus:ring-contact-error/15"
							: "border-contact-field-border focus:border-contact-focus focus:ring-contact-focus/15"
					}`}
					value={formData.message}
					onChange={(event) => updateField("message", event.target.value)}
					onBlur={handleBlur}
					aria-invalid={Boolean(errors.message)}
					aria-describedby={
						errors.message ? "contact-message-error" : undefined
					}
				/>
				{errors.message ? (
					<span
						id="contact-message-error"
						className="text-xs leading-5 text-contact-error"
					>
						{errors.message}
					</span>
				) : null}
			</label>

			<div className="pt-1">
				<button
					className={submitButtonClassName}
					disabled={status === "submitting"}
					type="submit"
				>
					{status === "submitting" ? "送信中..." : "送信"}
				</button>
			</div>

			{message ? (
				<p
					className={`m-0 text-sm leading-6 ${status === "success" ? "text-contact-success" : "text-contact-error"}`}
				>
					{message}
				</p>
			) : null}
		</form>
	);
}
