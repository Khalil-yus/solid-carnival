import Link from "next/link"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { Mail, User, Calendar, MessageSquare } from "lucide-react"
import { auth } from "@/lib/auth"
import { getMyReviews } from "@/app/actions/reviews"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MyReviews } from "@/components/my-reviews"

export const metadata = {
  title: "Личный кабинет — ЭкоБудущее",
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date))
}

export default async function AccountPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  const user = session.user
  const myReviews = await getMyReviews()

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-sidebar">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 sm:flex-row sm:items-center">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-lg text-primary-foreground">
                {initials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">{user.name}</h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[320px_1fr]">
          {/* Profile card */}
          <div className="flex flex-col gap-4">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground">Данные аккаунта</h2>
              <ul className="mt-4 flex flex-col gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Имя:</span>
                  <span className="font-medium text-foreground">{user.name}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium text-foreground">{user.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">С нами с:</span>
                  <span className="font-medium text-foreground">{formatDate(user.createdAt)}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Отзывов:</span>
                  <span className="font-medium text-foreground">{myReviews.length}</span>
                </li>
              </ul>
            </Card>
            <Button asChild variant="outline">
              <Link href="/reviews">Оставить новый отзыв</Link>
            </Button>
          </div>

          {/* My reviews */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Мои отзывы</h2>
            <MyReviews reviews={myReviews} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
