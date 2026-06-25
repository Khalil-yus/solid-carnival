import Image from "next/image"
import Link from "next/link"
import { Target, Eye, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "О нас — ЭкоБудущее",
  description: "Наша миссия, ценности и подход к устойчивому развитию.",
}

const values = [
  {
    icon: Target,
    title: "Наша миссия",
    description: "Сделать заботу об окружающей среде естественной частью жизни каждого человека.",
  },
  {
    icon: Eye,
    title: "Наше видение",
    description: "Мир, где экономический рост и сохранение природы идут рука об руку.",
  },
  {
    icon: HeartHandshake,
    title: "Наши ценности",
    description: "Ответственность, открытость, научный подход и сила коллективных действий.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-sidebar">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              О проекте ЭкоБудущее
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Мы — некоммерческая инициатива, объединяющая людей, организации и города вокруг идей устойчивого
              развития. С 2015 года мы реализуем проекты по защите природы и продвижению зелёных технологий.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <value.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-sidebar">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/community-planting.png"
                alt="Команда волонтёров"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
                Что мы делаем
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Организуем посадки деревьев и восстановление лесов.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Проводим образовательные программы и эко-уроки.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Поддерживаем переход бизнеса на возобновляемую энергию.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Развиваем раздельный сбор и переработку отходов.
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/sign-up">Присоединиться к нам</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
