"use client"

import { useState, useTransition } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { sendContactMessage } from "@/app/actions/contact"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [pending, startTransition] = useTransition()

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const res = await sendContactMessage(form)
      if (res?.error) {
        setError(res.error)
        return
      }
      setSent(true)
      setForm({ name: "", email: "", subject: "", message: "" })
    })
  }

  if (sent) {
    return (
      <Card className="flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Сообщение отправлено!</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Отправить ещё одно
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Имя *</Label>
            <Input id="name" value={form.name} onChange={update("name")} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={form.email} onChange={update("email")} required />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Тема</Label>
          <Input id="subject" value={form.subject} onChange={update("subject")} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Сообщение *</Label>
          <Textarea id="message" value={form.message} onChange={update("message")} rows={5} maxLength={2000} required />
        </div>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" disabled={pending} className="self-start">
          {pending ? "Отправка..." : "Отправить сообщение"}
        </Button>
      </form>
    </Card>
  )
}
