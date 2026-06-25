"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { deleteReview } from "@/app/actions/reviews"

type Review = {
  id: number
  rating: number
  content: string
  createdAt: Date
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date))
}

export function MyReviews({ reviews }: { reviews: Review[] }) {
  const router = useRouter()
  const [pendingId, setPendingId] = useState<number | null>(null)
  const [, startTransition] = useTransition()

  const handleDelete = (id: number) => {
    setPendingId(id)
    startTransition(async () => {
      await deleteReview(id)
      setPendingId(null)
      router.refresh()
    })
  }

  if (reviews.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">Вы ещё не оставили ни одного отзыва.</p>
      </Card>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <Card key={review.id} className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <StarRating value={review.rating} />
                <span className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</span>
              </div>
              <p className="mt-2 leading-relaxed text-muted-foreground">{review.content}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(review.id)}
              disabled={pendingId === review.id}
              aria-label="Удалить отзыв"
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
