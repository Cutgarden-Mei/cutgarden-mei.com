# cutgarden-mei.com

WordPressで構築された現サイトを、`Next.js + Contentful + Resend + Vercel` 構成へ置き換えるための実装ベースです。

## セットアップ

```bash
npm install
npm run dev
```

`.env.example` を `.env.local` にコピーし、必要な環境変数を設定してください。

## 主な構成

- `src/app`: App Router の画面とAPI
- `src/components`: レイアウト、セクション、フォームなどのUI
- `src/lib/contentful.ts`: Contentful連携とモックフォールバック
- `src/lib/resend.ts`: Resendメール送信
- `docs/information-architecture.md`: ページ構成とMVP範囲
- `docs/contentful-models.md`: Contentfulモデル設計
- `docs/deployment.md`: Vercel運用メモ
