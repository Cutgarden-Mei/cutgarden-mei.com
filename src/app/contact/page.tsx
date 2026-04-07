import { ContactForm } from "@/components/forms/contact-form";
import { getContactSettings, getSiteSettings } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Contact | CUT GARDEN MEI", description: "お問い合わせページです。", path: "/contact" });

export default async function ContactPage() {
  const [contactSettings, siteSettings] = await Promise.all([getContactSettings(), getSiteSettings()]);

  return (
    <section className="relative overflow-hidden bg-black px-4 py-10 md:px-6 md:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-95"
        style={{ backgroundImage: "url('/images/decoration/christmas-3.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/72" />

      <div className="relative mx-auto w-full max-w-[820px] border border-[#9e6e42] bg-white/92 shadow-[0_18px_40px_rgba(38,22,15,0.2)]">
        <div className="border-b border-[#c5a489] px-6 py-5 text-center text-sm font-semibold tracking-[0.25em] text-[#2f1c12]">
          お問い合わせ
        </div>

        <div className="px-6 py-10 md:px-14 md:py-12">
          <div className="mx-auto max-w-[420px] space-y-5 text-[13px] leading-8 text-[#4f392d]">
            <p>{contactSettings.thanksMessage}</p>
            <p>
              フォームからのお問い合わせは、24時間受け付けております。
              <br />
              下記フォームより、お気軽にお問い合わせ下さい。
            </p>
            <p>お問い合わせに関する返信は、3営業日以内に順次差し上げます。</p>
            <p>
              お急ぎの際はお電話でも承ります。
              <br />
              {siteSettings.phoneNumber}
            </p>
            <p>
              個人情報の取り扱いについては、
              <a className="text-sm font-medium text-[#73442b] underline transition hover:opacity-80" href={contactSettings.privacyPolicyUrl}>
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-[420px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
