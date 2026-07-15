"use server";
import { eq } from "drizzle-orm";
import { db } from "../db/index";
import { user } from "../db/schema";
export async function getUserDetails(userId: string | undefined) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!userId) {
    return null;
  }
  const userProfile = await db
    .select()
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);
  return userProfile[0] ?? null;
}
