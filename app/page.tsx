import Image from "next/image"
import Link from "next/link"
import { Leaf, Recycle, Sun, Users, Droplets, Wind, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const features = [
  {
    icon: Sun,
    title: "Возобновляемая энергия",
    description: "Переход на солнечную и ветровую энергию для снижения углеродного следа.",
  },
  {
    icon: Recycle,
    title: "Переработка отходов",
    description: "Современные подходы к сортировке, переработке и сокращению отходов.",
  },
  {
    icon: Droplets,
    title: "Чистая вода",
    description: "Сохранение водных ресурсов и защита рек, озёр и океанов.",
  },
  {
    icon: Wind,
    title: "Чистый воздух",
    description: "Мониторинг качества воздуха и борьба с загрязнением в городах.",
  },
  {
    icon: Leaf,
    title: "Биоразнообразие",
    description: "Восстановление лесов и защита исчезающих видов растений и животных.",
  },
  {
    icon: Users,
    title: "Сообщество",
    description: "Объединяем людей, готовых менять мир к лучшему вместе.",
  },
]

const stats = [
  { value: "12 000+", label: "Участников сообщества" },
  { value: "340", label: "Эко-проектов" },
  { value: "85 тыс.", label: "Посаженных деревьев" },
  { value: "26", label: "Городов-партнёров" },
]

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero-forest.png"
              alt="Зелёный лес с рекой на рассвете"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/55" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-28 md:py-40">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-sm font-medium text-background backdrop-blur">
              <Leaf className="h-4 w-4" />
              Экология и устойчивое развитие
            </span>
            <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight text-background md:text-6xl">
              Вместе создаём устойчивое будущее планеты
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-background/90">
              Присоединяйтесь к сообществу, которое заботится о природе, продвигает зелёные технологии и меняет
              отношение к окружающей среде.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/sign-up">
                  Присоединиться
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/40 bg-background/10 text-background hover:bg-background/20 hover:text-background"
              >
                <Link href="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-sidebar">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Направления нашей работы
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Мы объединяем экспертов, активистов и неравнодушных людей вокруг ключевых тем устойчивого развития.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 transition-shadow hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Split sections */}
        <section className="bg-sidebar">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/renewable-energy.png"
                alt="Ветряные турбины и солнечные панели"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
                Энергия, которая не вредит планете
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Возобновляемые источники энергии — основа устойчивого будущего. Мы поддерживаем проекты по внедрению
                солнечной и ветровой энергии, помогаем бизнесу и городам переходить на чистые технологии.
              </p>
              <Button asChild className="mt-6" variant="outline">
                <Link href="/about">Наши инициативы</Link>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
                Сила в сообществе
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Тысячи волонтёров по всей стране высаживают деревья, очищают парки и берега, проводят эко-уроки.
                Зарегистрируйтесь, чтобы участвовать в мероприятиях и делиться своими отзывами.
              </p>
              <Button asChild className="mt-6">
                <Link href="/reviews">Читать отзывы</Link>
              </Button>
            </div>
            <div className="order-1 overflow-hidden rounded-2xl md:order-2">
              <Image
                src="/community-planting.png"
                alt="Волонтёры высаживают деревья"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
              Готовы стать частью перемен?
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
              Создайте аккаунт, чтобы участвовать в проектах, оставлять отзывы и быть в курсе всех эко-инициатив.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/sign-up">Создать аккаунт</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
