import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  // id là string, thường dùng uuid hoặc text.
  // Nếu bạn dùng uuid, hãy import { uuid } từ 'drizzle-orm/pg-core'
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(), // Thường email nên unique
  emailVerified: boolean("email_verified").default(false),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
export const session = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expire_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
export const account = pgTable("accounts", {
  // Primary Key
  id: text("id").primaryKey(),

  // Foreign Key
  userId: text("user_id")
    .notNull()
    .references(() => user.id, {
      onDelete: "cascade",
    }),

  // Account information
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),

  // OAuth tokens
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),

  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),

  scope: text("scope"),
  idToken: text("id_token"),

  // Email/Password authentication
  password: text("password"),

  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
export const verification = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),

  expiresAt: timestamp("expires_at").notNull(),

  // Tự động set thời gian khi tạo mới
  createdAt: timestamp("created_at").defaultNow().notNull(),

  // Tự động cập nhật thời gian khi dòng dữ liệu bị thay đổi
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
