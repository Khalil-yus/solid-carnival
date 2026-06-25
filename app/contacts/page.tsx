import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Контакты — ЭкоБудущее",
  description: "Свяжитесь с командой ЭкоБудущее.",
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@ecofuture.ru" },
  { icon: Phone, label: "Телефон", value: "+7 (495) 123-45-67" },
  { icon: MapPin, label: "Адрес", value: "Москва, ул. Зелёная, 1" },
  { icon: Clock, label: "Часы работы", value: "Пн–Пт, 9:00–18:00" },
]

export default function ContactsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-sidebar">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Свяжитесь с нами
            </h1>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Есть вопрос, идея или предложение о сотрудничестве? Напишите нам — мы всегда рады диалогу.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[360px_1fr]">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <Card key={item.label} className="flex flex-row items-center gap-4 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Форма обратной связи</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
