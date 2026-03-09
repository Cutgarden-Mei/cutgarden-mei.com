import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactEmails } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください。"),
  email: z.email("メールアドレスの形式が不正です。"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "お問い合わせ種別を選択してください。"),
  message: z.string().min(10, "お問い合わせ内容を10文字以上で入力してください。"),
  privacyConsent: z
    .boolean()
    .refine((value) => value, "個人情報の取り扱いへの同意が必要です。"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);
    const result = await sendContactEmails({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      inquiryType: payload.inquiryType,
      message: payload.message,
    });

    return NextResponse.json({
      ok: true,
      message: result.simulated
        ? "開発環境のため送信はシミュレーションされました。環境変数を設定するとResendから送信されます。"
        : "お問い合わせを送信しました。ありがとうございます。",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, message: error.issues[0]?.message ?? "入力内容を確認してください。" }, { status: 400 });
    }

    return NextResponse.json({ ok: false, message: "送信処理に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }
}
