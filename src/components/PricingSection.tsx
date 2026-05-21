import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const achievements = [
  {
    name: "Педагогическое образование",
    icon: "🎓",
    features: [
      "Высшее педагогическое образование",
      "Специализация: история и обществознание",
      "Подготовка к ОГЭ и ЕГЭ",
      "Современные методики преподавания",
      "Работа с учениками разного уровня",
    ],
    highlighted: false,
  },
  {
    name: "Профессиональные качества",
    icon: "⭐",
    features: [
      "Индивидуальный подход к каждому",
      "Интерактивные форматы уроков",
      "Проектная и исследовательская работа",
      "Подготовка к олимпиадам",
      "Развитие критического мышления",
      "Открытость и поддержка учеников",
    ],
    highlighted: true,
  },
  {
    name: "Цифровые инструменты",
    icon: "💻",
    features: [
      "Интерактивные онлайн-тесты",
      "Работа с образовательными платформами",
      "Дистанционное обучение",
      "Создание цифровых учебных материалов",
      "Использование мультимедиа на уроках",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Компетенции педагога
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Мои <span className="text-primary">профессиональные</span> компетенции
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Сочетание глубоких знаний предмета, педагогического мастерства и современных цифровых инструментов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className={`relative group ${
                item.highlighted
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {item.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Ключевые
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <CardTitle className="text-2xl mb-2">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Всегда в поиске новых{" "}
            <span className="text-primary font-semibold">методов и подходов</span> для{" "}
            <span className="text-primary font-semibold">лучшего результата</span> учеников
          </p>
        </div>
      </div>
    </section>
  )
}
