import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, MessageSquare, FlaskConical, Globe } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Уроки истории",
    description:
      "Увлекательные уроки истории от Древнего мира до современности. Работаем с источниками, анализируем события, ищем причинно-следственные связи — формируем настоящее историческое мышление.",
  },
  {
    icon: Globe,
    title: "Уроки обществознания",
    description:
      "Обществознание — это наука о жизни. Разбираем право, экономику, политику и социологию так, чтобы знания работали в реальном мире, а не оставались в тетради.",
  },
  {
    icon: Trophy,
    title: "Подготовка к ОГЭ",
    description:
      "Системная подготовка к основному государственному экзамену по истории и обществознанию. Разбираем все типы заданий, отрабатываем навыки и снимаем экзаменационный стресс.",
  },
  {
    icon: FlaskConical,
    title: "Подготовка к ЕГЭ",
    description:
      "Глубокая проработка материала для единого государственного экзамена. Особое внимание — сложным заданиям второй части: эссе, аргументация, работа с документами.",
  },
  {
    icon: Users,
    title: "Проектная деятельность",
    description:
      "Помогаю ученикам создавать исследовательские и творческие проекты по истории и обществознанию. Участие в олимпиадах, конференциях и конкурсах.",
  },
  {
    icon: MessageSquare,
    title: "Развитие критического мышления",
    description:
      "Учу анализировать информацию, формулировать собственную позицию и аргументированно её отстаивать — навыки, которые пригодятся далеко за пределами школы.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Направления работы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Чем я могу <span className="text-primary">помочь</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От базового изучения предмета до успешной сдачи экзаменов — сопровождаю учеников на каждом этапе их образовательного пути.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
