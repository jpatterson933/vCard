import { defineConfig } from "drizzle-kit";
import { config } from "@/common/config";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.database.url,
  },
});
