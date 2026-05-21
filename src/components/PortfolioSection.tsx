import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const tests = [
  {
    title: "Тест по истории",
    category: "OnlineTestPad",
    description:
      "Проверь свои знания по истории в интерактивном тесте. Задания охватывают ключевые темы и события. Удобный формат — сразу видишь результат и ошибки.",
    url: "https://onlinetestpad.com/2p262htrywibk",
    tags: ["История", "Интерактив", "Самопроверка"],
    emoji: "📜",
  },
  {
    title: "Тест по обществознанию",
    category: "Яндекс Формы",
    description:
      "Тест по обществознанию на платформе Яндекс Формы. Проверь знание основных понятий, правовых норм и социальных процессов в удобном формате.",
    url: "https://forms.yandex.ru/cloud/6a0cfc2795add54cccdbc9fe",
    tags: ["Обществознание", "Яндекс Формы", "Самопроверка"],
    emoji: "⚖️",
  },
  {
    title: "Задание по истории",
    category: "1С:Урок",
    description:
      "Интерактивное задание на образовательной платформе 1С:Урок. Работа с историческими источниками и анализ событий в игровом формате.",
    url: "https://urok.1c.ru/share/task/072ffef01039a26d2e312ef3b3c1eb33/",
    tags: ["История", "1С:Урок", "Интерактив"],
    emoji: "🏛️",
  },
  {
    title: "Тест: Банк тестов",
    category: "БанкТестов.ру",
    description:
      "Тест из официального банка тестов — формат приближен к реальным экзаменационным заданиям. Отличная тренировка перед ОГЭ и ЕГЭ.",
    url: "https://banktestov.ru/test/113600",
    tags: ["ОГЭ/ЕГЭ", "Тренировка", "Экзамен"],
    emoji: "✏️",
  },
]

export function PortfolioSection() {
  return (
    <section id="tests" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Тесты и задания</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Подборка интерактивных тестов и заданий для самостоятельной проверки знаний. Выбирай тест и проверяй себя прямо сейчас!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tests.map((test, index) => (
            <Card
              key={index}
              className="group overflow-hidden border hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-muted/30 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500">{test.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(test.url, "_blank")}
                  >
                    Пройти тест <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{test.category}</p>
                <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{test.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {test.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="gap-2 w-full"
                  onClick={() => window.open(test.url, "_blank")}
                >
                  Открыть тест <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
