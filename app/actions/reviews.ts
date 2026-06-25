"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { reviews } from "@/lib/db/schema"
import { desc, eq, and } from "drizzle-orm"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"

async function getSessionUser() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Необходимо войти в аккаунт")
  return session.user
}

export async function getReviews() {
  return db.select().from(reviews).orderBy(desc(reviews.createdAt))
}

export async function getMyReviews() {
  const u = await getSessionUser()
  return db.select().from(reviews).where(eq(reviews.userId, u.id)).orderBy(desc(reviews.createdAt))
}

export async function createReview(formData: { rating: number; content: string }) {
  const u = await getSessionUser()

  const rating = Math.min(5, Math.max(1, Math.round(formData.rating)))
  const content = formData.content.trim()

  if (!content) {
    return { error: "Отзыв не может быть пустым" }
  }
  if (content.length > 1000) {
    return { error: "Отзыв слишком длинный (максимум 1000 символов)" }
  }

  await db.insert(reviews).values({
    userId: u.id,
    authorName: u.name,
    rating,
    content,
  })

  revalidatePath("/reviews")
  revalidatePath("/account")
  return { success: true }
}

export async function deleteReview(id: number) {
  const u = await getSessionUser()
  await db.delete(reviews).where(and(eq(reviews.id, id), eq(reviews.userId, u.id)))
  revalidatePath("/reviews")
  revalidatePath("/account")
  return { success: true }
}
