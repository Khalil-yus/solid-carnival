"use server"

import { db } from "@/lib/db"
import { contactMessages } from "@/lib/db/schema"

export async function sendContactMessage(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const name = formData.name.trim()
  const email = formData.email.trim()
  const subject = formData.subject.trim()
  const message = formData.message.trim()

  if (!name || !email || !message) {
    return { error: "Пожалуйста, заполните все обязательные поля" }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Введите корректный email" }
  }
  if (message.length > 2000) {
    return { error: "Сообщение слишком длинное (максимум 2000 символов)" }
  }

  await db.insert(contactMessages).values({
    name,
    email,
    subject: subject || null,
    message,
  })

  return { success: true }
}
