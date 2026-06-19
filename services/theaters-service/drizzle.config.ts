import type { Config } from "drizzle-kit";

export default {
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/migrations",
  dbCredentials: {
     url: (globalThis as any).process?.env?.DATABASE_URL!,
  },
  schemaFilter: ["seats"],
  verbose: true,
  strict: true,
} satisfies Config;
