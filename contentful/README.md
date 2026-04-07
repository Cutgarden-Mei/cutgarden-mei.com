# Contentful migrations

`contentful/migrations` には Contentful のコンテンツモデルを定義するマイグレーションファイルを配置します。

## Tooling

- `contentful-migration`: Contentful のコンテンツモデル変更を適用
- `tsx`: TypeScript のマイグレーション/実行スクリプトをそのまま実行
- `dotenv`: `.env.local` / `.env` から必要な環境変数を読み込み

実行ラッパーは `contentful/run-migration.ts` にあります。

## Added migration

- `001-create-contact-and-post.ts`

このマイグレーションでは、次の Content Type を作成します。

- `contact`
- `post`

## Model summary

### `contact`

- `name`: お名前
- `email`: メールアドレス
- `subject`: 題名
- `body`: 本文

### `post`

- `publishedAt`: 投稿日時
- `title`: タイトル
- `body`: ボディ
- `type`: `blog` / `news`

## Notes

- 事前に `.env.local` または `.env` に `CONTENTFUL_SPACE_ID` と `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` を設定してください。
- 環境を指定したい場合は `CONTENTFUL_ENVIRONMENT_ID` を設定します。未指定時は `master` を使います。
- 任意のマイグレーションは `npm run contentful:migrate -- ./contentful/migrations/<file>.ts` で実行できます。
- 今回追加したマイグレーションは `npm run contentful:migrate:contact-post` で実行できます。
- `email` にはメールアドレス形式のバリデーションを設定しています。
- `post.type` は `blog` と `news` のみ選択できるドロップダウンです。
- この追加はコンテンツモデル作成までで、アプリ側の問い合わせ保存や投稿取得処理にはまだ接続していません。
