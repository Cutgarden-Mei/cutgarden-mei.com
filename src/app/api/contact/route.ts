import { NextResponse } from "next/server";
import { z } from "zod";

import { createContactEntry } from "@/lib/contentful";
import { sendContactEmails } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください。"),
  email: z.email("メールアドレスの形式が不正です。"),
  subject: z.string().optional().transform((value) => value?.trim() ?? ""),
  message: z.string().optional().transform((value) => value?.trim() ?? ""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);
    await createContactEntry(payload);
    const result = await sendContactEmails(payload);

    return NextResponse.json({
      ok: true,
      message: result.simulated
        ? "お問い合わせを受け付けました。メール送信はシミュレーションです。Resend の環境変数を設定すると実送信されます。"
        : "お問い合わせを送信しました。ありがとうございます。",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, message: error.issues[0]?.message ?? "入力内容を確認してください。" }, { status: 400 });
    }

    console.error(error);
    return NextResponse.json({ ok: false, message: "送信処理に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }
}
