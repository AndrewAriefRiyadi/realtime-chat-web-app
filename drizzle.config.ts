import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config(); // memuat .env ke process.env

export default defineConfig({
    dialect: "turso",
    schema: "./server/database/schema.ts",
    out: "./server/database/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN!,
    },
});
