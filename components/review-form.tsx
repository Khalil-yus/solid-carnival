"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { createReview } from "@/app/actions/reviews"
import { cn } from "@/lib/utils"

export function ReviewForm() {
  const router = useRouter()
  const [rating, setRating] = useState(5)
  const [hover, setHover] = useState(0)
  const [content, setContent] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [pending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const res = await createReview({ rating, content })
      if (res?.error) {
        setError(res.error)
        return
      }
      setContent("")
      setRating(5)
      setDone(true)
      router.refresh()
      setTimeout(() => setDone(false), 4000)
    })
  }

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-foreground">Оставить отзыв</h2>
      <p className="mt-1 text-sm text-muted-foreground">Поделитесь своим опытом участия в проектах.</p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Оценка</Label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(0)}
                aria-label={`Поставить оценку ${i}`}
                className="p-0.5"
              >
                <Star
                  className={cn(
                    "h-7 w-7 transition-colors",
                    i <= (hover || rating) ? "fill-accent text-accent" : "fill-none text-muted-foreground/40",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="content">Ваш отзыв</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Расскажите о своём опыте..."
            rows={4}
            maxLength={1000}
            required
          />
        </div>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        {done && <p className="text-sm text-primary">Спасибо! Ваш отзыв опубликован.</p>}

        <Button type="submit" disabled={pending} className="self-start">
          {pending ? "Отправка..." : "Опубликовать отзыв"}
        </Button>
      </form>
    </Card>
  )
}
