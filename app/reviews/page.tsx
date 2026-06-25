import Link from "next/link"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { getReviews } from "@/app/actions/reviews"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StarRating } from "@/components/star-rating"
import { ReviewForm } from "@/components/review-form"

export const metadata = {
  title: "Отзывы — ЭкоБудущее",
  description: "Отзывы участников нашего эко-сообщества.",
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date))
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export default async function ReviewsPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const reviews = await getReviews()

  const avg =
    reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "0.0"

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-sidebar">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Отзывы участников
            </h1>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Что говорят люди, которые уже стали частью нашего сообщества.
            </p>
            {reviews.length > 0 && (
              <div className="mt-5 flex items-center gap-3">
                <StarRating value={Math.round(Number(avg))} />
                <span className="text-sm text-muted-foreground">
                  {avg} из 5 · {reviews.length}{" "}
                  {reviews.length === 1 ? "отзыв" : reviews.length < 5 ? "отзыва" : "отзывов"}
                </span>
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_360px]">
          {/* Reviews list */}
          <div className="order-2 lg:order-1">
            {reviews.length === 0 ? (
              <Card className="p-10 text-center">
                <p className="text-muted-foreground">Пока нет отзывов. Станьте первым!</p>
              </Card>
            ) : (
              <div className="flex flex-col gap-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-secondary text-primary">
                          {initials(review.authorName)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-medium text-foreground">{review.authorName}</span>
                          <span className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</span>
                        </div>
                        <StarRating value={review.rating} className="mt-1" />
                        <p className="mt-3 leading-relaxed text-muted-foreground">{review.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar form */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              {session?.user ? (
                <ReviewForm />
              ) : (
                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-foreground">Хотите оставить отзыв?</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Войдите в аккаунт или зарегистрируйтесь, чтобы поделиться своим мнением.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button asChild>
                      <Link href="/sign-in">Войти</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/sign-up">Регистрация</Link>
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
