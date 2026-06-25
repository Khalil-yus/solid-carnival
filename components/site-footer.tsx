import Link from "next/link"
import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-sidebar">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold text-foreground">ЭкоБудущее</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Платформа и сообщество для тех, кто верит в устойчивое развитие и заботится о планете.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Навигация</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary">
                О нас
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-primary">
                Отзывы
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-primary">
                Контакты
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-primary">
                Регистрация
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Контакты</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              info@ecofuture.ru
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +7 (495) 123-45-67
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Москва, ул. Зелёная, 1
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} ЭкоБудущее. Все права защищены.`}
        </div>
      </div>
    </footer>
  )
}
