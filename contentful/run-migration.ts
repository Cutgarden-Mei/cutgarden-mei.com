import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { config as loadEnv } from "dotenv";
import { runMigration, type MigrationFunction } from "contentful-migration";

for (const envFile of [".env.local", ".env"]) {
  loadEnv({ path: resolve(process.cwd(), envFile), override: false });
}

const migrationFile = process.argv[2];

if (!migrationFile) {
  console.error("Usage: npm run contentful:migrate -- <migration-file>");
  process.exit(1);
}

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID ?? "master";

if (!spaceId) {
  console.error("Missing CONTENTFUL_SPACE_ID.");
  process.exit(1);
}

if (!accessToken) {
  console.error("Missing CONTENTFUL_MANAGEMENT_ACCESS_TOKEN.");
  process.exit(1);
}

const filePath = resolve(process.cwd(), migrationFile);

function resolveMigrationFunction(moduleValue: unknown): MigrationFunction | null {
  let current = moduleValue;

  for (let depth = 0; depth < 3; depth += 1) {
    if (typeof current === "function") {
      return current as MigrationFunction;
    }

    if (!current || typeof current !== "object" || !("default" in current)) {
      return null;
    }

    current = (current as { default: unknown }).default;
  }

  return typeof current === "function" ? (current as MigrationFunction) : null;
}

async function main() {
  const importedMigration = await import(pathToFileURL(filePath).href);
  const migrationFunction = resolveMigrationFunction(importedMigration);

  if (typeof migrationFunction !== "function") {
    throw new TypeError(`Migration file must export a default function: ${filePath}`);
  }

  await runMigration({
    migrationFunction,
    spaceId,
    environmentId,
    accessToken,
    yes: true,
  });

  console.log(`Migration completed: ${filePath}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
