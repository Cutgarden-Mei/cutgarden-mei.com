import { ContactForm } from "@/components/forms/contact-form";
import { getContactSettings, getSiteSettings } from "@/lib/contentful";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Contact | CUT GARDEN MEI", description: "お問い合わせページです。", path: "/contact" });

export default async function ContactPage() {
  const [contactSettings, siteSettings] = await Promise.all([getContactSettings(), getSiteSettings()]);

  return (
    <>
      <section className="bg-gradient-to-b from-[#cda98e]/12 to-transparent px-4 py-20 md:px-6">
        <div className="mx-auto grid w-full max-w-[1120px] gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl leading-tight font-semibold text-[#26160f]">ご予約前のご相談もお気軽にどうぞ</h2>
            <div className="mt-4 space-y-3 text-base leading-8 text-[#7e6b61]">
              <p>{contactSettings.thanksMessage}</p>
              <p>お急ぎの場合はお電話でも承っています。</p>
              <p>{siteSettings.phoneNumber}</p>
              <p>
                個人情報の取り扱いについては、
                <a className="text-sm font-medium text-[#73442b] transition hover:opacity-80" href={contactSettings.privacyPolicyUrl}>
                  プライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
