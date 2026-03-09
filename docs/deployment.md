# Deployment Notes

## Vercel環境変数

- `NEXT_PUBLIC_SITE_URL`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## 運用方針

- Production: 本番ドメイン向け
- Preview: PRまたはブランチごとの確認環境
- Contentful Preview API を利用して、レビュー時のみ下書きコンテンツを確認
- ISRを使って主要ページの鮮度を保つ

## 推奨設定

- VercelのデプロイフックでContentful公開後に再検証
- 独自ドメイン切替前に `noindex` ではないことを確認
- Resendの送信元ドメイン認証を完了させる
