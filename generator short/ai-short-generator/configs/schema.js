import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"


    export const users = pgTable("users", {
        id: serial("id").primaryKey().notNull(),
        name: varchar("name").notNull(),
        email: varchar("email").notNull(),
        imageUrl: varchar("imageUrl").notNull(),
        subcription: boolean("subcription").default(sql`false`),
    });