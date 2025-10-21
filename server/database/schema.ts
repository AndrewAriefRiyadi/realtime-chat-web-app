import {sql} from 'drizzle-orm';
import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("users", {
    id: t.integer().primaryKey({ autoIncrement: true }),
    username: t.text().notNull().unique(),
    password: t.text().notNull(),
    timestamp: t.text().notNull().default(sql`(current_timestamp)`)
});
