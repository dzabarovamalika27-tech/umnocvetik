import Link from "next/link";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Droplets,
  Flower2,
  LayoutGrid,
} from "lucide-react";

const sections = [
  {
    href: "/cabinet",
    title: "Личный кабинет",
    description:
      "Ваши растения в одном месте: карточки, статусы полива и быстрое добавление новых питомцев.",
    icon: LayoutGrid,
  },
  {
    href: "/encyclopedia",
    title: "Энциклопедия",
    description:
      "Поиск по 30+ популярным видам: свет, полив, температура и типичные проблемы — мгновенно.",
    icon: BookOpen,
  },
  {
    href: "/reminders",
    title: "Напоминания",
    description:
      "Браузерные push-напоминания как будильник: выберите растение, интервал и время полива.",
    icon: Bell,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-9rem)]">
      <section className="gradient-hero-vibrant pattern-grid">
        <div className="container mx-auto max-w-5xl px-4 py-20 sm:py-28 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Flower2 className="h-10 w-10" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              Умноцветик
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Умный помощник по уходу за домашними растениями. Ведите список
              своих зелёных питомцев, находите правила ухода за секунды и не
              забывайте поливать — мы напомним.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/login"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md active:translate-y-px"
            >
              Начать
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/encyclopedia"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 text-base font-medium text-foreground transition-all hover:bg-muted active:translate-y-px"
            >
              Найти растение
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="card-hover group rounded-3xl border border-border bg-card p-8 shadow-sm space-y-4"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <section.icon className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Перейти
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 rounded-3xl bg-secondary/60 px-6 py-6 text-center">
          <Droplets className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm sm:text-base text-secondary-foreground">
            Скоро здесь появятся регистрация, кабинет и push-напоминания о
            поливе — прототип в разработке.
          </p>
        </div>
      </section>
    </div>
  );
}
