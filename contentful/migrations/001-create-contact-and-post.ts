import type { MigrationFunction } from "contentful-migration";

const migration: MigrationFunction = function createContactAndPostModels(migration) {
  const contact = migration
    .createContentType("contact")
    .name("Contact")
    .description("Stores contact form submissions.");

  contact.displayField("subject");

  contact
    .createField("name")
    .name("お名前")
    .type("Symbol")
    .required(true);

  contact
    .createField("email")
    .name("メールアドレス")
    .type("Symbol")
    .required(true)
    .validations([
      {
        regexp: {
          pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
          flags: "",
        },
      },
    ]);

  contact
    .createField("subject")
    .name("題名")
    .type("Symbol")
    .required(true);

  contact
    .createField("body")
    .name("本文")
    .type("Text")
    .required(true);

  const post = migration
    .createContentType("post")
    .name("Post")
    .description("Stores blog and news posts.");

  post.displayField("title");

  post
    .createField("publishedAt")
    .name("投稿日時")
    .type("Date")
    .required(true);

  post
    .createField("title")
    .name("タイトル")
    .type("Symbol")
    .required(true);

  post
    .createField("body")
    .name("ボディ")
    .type("RichText")
    .required(true);

  post
    .createField("type")
    .name("タイプ")
    .type("Symbol")
    .required(true)
    .validations([{ in: ["blog", "news"] }]);

  post.changeFieldControl("type", "builtin", "dropdown", {});
};

export default migration;
