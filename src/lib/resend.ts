import "server-only";

import { Resend } from "resend";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
};

export async function sendContactEmails(payload: ContactFormPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return { simulated: true as const };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    subject: `【お問い合わせ】${payload.inquiryType} / ${payload.name}`,
    replyTo: payload.email,
    text: [
      `お名前: ${payload.name}`,
      `メール: ${payload.email}`,
      `電話番号: ${payload.phone || "未入力"}`,
      `種別: ${payload.inquiryType}`,
      "",
      payload.message,
    ].join("\n"),
    html: `<h2>お問い合わせ通知</h2><p><strong>お名前:</strong> ${payload.name}</p><p><strong>メール:</strong> ${payload.email}</p><p><strong>電話番号:</strong> ${payload.phone || "未入力"}</p><p><strong>種別:</strong> ${payload.inquiryType}</p><p><strong>内容:</strong></p><pre>${payload.message}</pre>`,
  });

  await resend.emails.send({
    from,
    to: payload.email,
    subject: "お問い合わせありがとうございます | CUT GARDEN MEI",
    text: [
      `${payload.name} 様`,
      "",
      "お問い合わせありがとうございます。",
      "内容を確認のうえ、担当者より折り返しご連絡いたします。",
    ].join("\n"),
    html: `<p>${payload.name} 様</p><p>お問い合わせありがとうございます。</p><p>内容を確認のうえ、担当者より折り返しご連絡いたします。</p>`,
  });

  return { simulated: false as const };
}
