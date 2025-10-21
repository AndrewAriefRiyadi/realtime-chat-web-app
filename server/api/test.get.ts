import { createClient } from "@libsql/client";

export default defineEventHandler(async () => {
    try {
        const client = createClient({
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN!,
        });

        const result = await client.execute("SELECT 1 as success");
        return result.rows;
    } catch (error: any) {
        console.error("Database Error:", error);
        return { error: error.message || "Unknown error" };
    }
});
